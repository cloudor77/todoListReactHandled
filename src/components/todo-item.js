// import { Fragment } from "react";
import KeepOrDelete from "../view/keep-delete-view";
import classes from "./todo-item.module.css";

const ToDoItem = (props) => {
  return (
    <div className={classes.listItem}>
      <p className={classes.todoNum}>{`${props.todoNum + 1}.`}</p>
      <li>{props.title}</li>
      <KeepOrDelete id={props.id} removingToDo={props.passingRemoveTodo} />
    </div>
  );
};

export default ToDoItem;
