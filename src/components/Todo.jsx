import React, { useState } from "react";
import CrossIcon from "../assets/icons/icon-cross.svg";
import CheckIcon from "../assets/icons/icon-check.svg";

const Todo = (props) => {
   const handleClick = (e) => {
      props.removeTodo(props.id);
   };
   const handleCheckBox = () => {
      props.toggleComplete(props.id);
   };
   return (
      <>
         <div className="todo">
            <span
               className={props.isComplete ? "completed" : "incompleted"}
               onClick={handleCheckBox}
            >
               {props.isComplete && <img src={CheckIcon}></img>}
            </span>
            {props.isComplete ? (
               <p>
                  <s>{props.todo}</s>
               </p>
            ) : (
               <p>{props.todo}</p>
            )}
            <img
               src={CrossIcon}
               alt="cross icon"
               id={props.id}
               onClick={handleClick}
            />
         </div>
         <hr />
      </>
   );
};

export default Todo;
