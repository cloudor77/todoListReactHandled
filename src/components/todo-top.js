import classes from "./todo-top.module.css";

const ToDoTop = () => {
  return (
    <nav className={classes.nav}>
      <img src={require("../img/to-do.png")} />
      <h4>
        To-Do<span className={classes.navText}>(s)</span>
      </h4>
    </nav>
  );
};

export default ToDoTop;
