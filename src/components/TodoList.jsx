import React from "react";
import empty from "/src/assets/images/empty.png"

const TodoList = (props) => {
   if (props.listElements.length > 0) {
      return <div className="todo-list-div">{props.listElements}</div>;
   } else if (props.filter == "all") {
      return (
         <div className="empty">
            <h2>Your list is empty !</h2>
            <img src={empty} />
         </div>
      );
   }
};

export default TodoList;
