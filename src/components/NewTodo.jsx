import React from "react";

const NewTodo = (props) => {
   const handleKeyDown = (e) => {
      if (e.key == "Enter") {
         const value = e.target.value.trim();
         if (value) {
            props.addTodo(value);
            e.target.value = "";
            props.showAll()
         }
      }
   };

   return (
      <div className="create-todo">
         <span className="incompleted"></span>
         <input
            type="text"
            placeholder="Create a new todo"
            onKeyDown={handleKeyDown}
         />
      </div>
   );
};

export default NewTodo;
