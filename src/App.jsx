import React, { useState } from "react";
import Header from "./components/Header";
import NewTodo from "./components/NewTodo";
import TodoList from "./components/TodoList";
import Todo from "./components/Todo";
import Clear from "./components/Clear";
import Footer from "./components/Footer";
import Empty from "./components/Empty";

const App = () => {
   const [todoList, setTodoList] = useState([]);
   const [id, setId] = useState(0);
   const [filter, setFilter] = useState("all");

   function addTodo(todoValue) {
      setId((prevId) => prevId + 1);
      setTodoList((prevTodos) => [
         { text: todoValue, id: id, isComplete: false },
         ...prevTodos,
      ]);
   }
   function removeTodo(todoId) {
      setTodoList((prevList) => prevList.filter((todo) => todo.id !== todoId));
   }
   function toggleComplete(todoId) {
      setTodoList((prevList) =>
         prevList.map((todo) => {
            if (todo.id == todoId) {
               return { ...todo, isComplete: !todo.isComplete };
            } else {
               return { ...todo };
            }
         })
      );
   }
   function clearCompleted() {
      setTodoList((prevList) =>
         prevList.filter((todo) => todo.isComplete == false)
      );
   }
   function showCompleted() {
      setFilter("completed");
   }
   function showActive() {
      setFilter("active");
   }
   function showAll() {
      setFilter("all");
   }
   const filteredTodos =
      filter === "all"
         ? todoList
         : filter === "completed"
         ? todoList.filter((todo) => todo.isComplete == true)
         : todoList.filter((todo) => todo.isComplete == false);
   const listElements = filteredTodos.map((todo) => {
      return (
         <Todo
            key={todo.id}
            id={todo.id}
            todo={todo.text}
            isComplete={todo.isComplete}
            removeTodo={removeTodo}
            toggleComplete={toggleComplete}
         />
      );
   });
   return (
      <>
         <Header />
         <NewTodo addTodo={addTodo} showAll={showAll} />
         {listElements.length ? (
            <TodoList listElements={listElements} />
         ) : (
            <Empty />
         )}
         <Clear
            todoList={todoList}
            clearCompleted={clearCompleted}
            filter={filter}
         />
         <Footer
            todoList={todoList}
            showCompleted={showCompleted}
            showAll={showAll}
            showActive={showActive}
            filter={filter}
         />
      </>
   );
};

export default App;
