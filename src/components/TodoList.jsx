import React from "react";

const TodoList = (props) => {
   return (
      props.listElements.length>0 && (
         <div className="todo-list-div">{props.listElements}</div>
      )
   );
};

export default TodoList;
