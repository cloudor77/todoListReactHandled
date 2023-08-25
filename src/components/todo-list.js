import ToDoItem from "./todo-item";
import classes from "./todo-list.module.css";

const ToDoList = (props) => {
  return (
    <div className={classes.todoList}>
      {props.todos.length === 0 && (
        <h2 className={classes.noToDo}>No ToDo(s) yet...</h2>
      )}
      <ul>
        {props.todos.length > 0 &&
          props.todos.map((todo, i) => {
            return (
              <ToDoItem
                id={todo.id}
                key={todo.id}
                title={todo.title}
                passingRemoveTodo={props.removeTodo}
                todoNum={i}
              />
            );
          })}
      </ul>
    </div>
  );
};

export default ToDoList;
