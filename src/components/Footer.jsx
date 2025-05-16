import React from "react";

const Footer = (props) => {
   return (
      props.todoList.length > 0 && (
         <footer>
            <a
               onClick={() => props.showAll()}
               className={props.filter === "all" ? "bright-a" : ""}
            >
               All
            </a>
            <a
               onClick={() => props.showActive()}
               className={props.filter === "active" ? "bright-a" : ""}
            >
               Active
            </a>
            <a
               onClick={() => props.showCompleted()}
               className={props.filter === "completed" ? "bright-a" : ""}
            >
               Completed
            </a>
         </footer>
      )
   );
};

export default Footer;
