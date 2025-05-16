import React from "react";

const Clear = (props) => {
   const todosLeft = props.todoList.filter((todo) => todo.isComplete == false);
   const todosCompleted = props.todoList.filter(
      (todo) => todo.isComplete == true
   );
   function handleBorderRadius(){
      if((todosCompleted==0 && props.filter==="completed")||(todosLeft==0 && props.filter==="active")){
         return "clear-div-0-left"
      }else {
         return "clear-div"
      }
   }
   function handleItemsLeft() {
      if (props.filter === "all") {
         return (
            <>
               <p>
                  {props.todoList.length > 1
                     ? `${props.todoList.length} items`
                     : `${props.todoList.length} item`}
               </p>
               {todosCompleted.length>0&& <a onClick={() => props.clearCompleted()}>Clear Completed</a>}
            </>
         );
      } else if (props.filter === "active") {
         return (
            <p>
               {todosLeft.length > 1
                  ? `${todosLeft.length} items left`
                  : `${todosLeft.length} item left`}
            </p>
         );
      } else
         return (
            <>
               <p>
                  {todosCompleted.length !=1
                     ? `${todosCompleted.length} items completed`
                     : `${todosCompleted.length} item Completed`}
               </p>
               {todosCompleted.length>0&& <a onClick={() => props.clearCompleted()}>Clear Completed</a>}
            </>
         );
   }
   return (
      props.todoList.length > 0 && (
         <div className={handleBorderRadius()}>{handleItemsLeft()}</div>
      )
   );
};

export default Clear;
