import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import NewTodo from "./components/NewTodo";
import TodoList from "./components/TodoList";
import Todo from "./components/Todo";
import Clear from "./components/Clear";
import Footer from "./components/Footer";

const App = () => {
   const [todoList, setTodoList] = useState(() => {
      const storedList = localStorage.getItem("todoList");
      return storedList ? JSON.parse(storedList) : [];
    });
    const [id, setId] = useState(() => {
      const storedList = localStorage.getItem("todoList");
      if (storedList) {
        const parsedList = JSON.parse(storedList);
        const maxId = parsedList.reduce((max, todo) => (todo.id > max ? todo.id : max), 0);
        return maxId + 1;
      }
      return 0;
    });
    const [filter, setFilter] = useState("all");

   useEffect(()=>{
      localStorage.setItem("todoList",JSON.stringify(todoList))
   },[todoList])

   function addTodo(todoValue) {
      setTodoList((prevTodos) => [
        { text: todoValue, id: id, isComplete: false },
        ...prevTodos,
      ]);
      setId((prevId) => prevId + 1);
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
         <TodoList listElements={listElements} filter={filter} />
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
