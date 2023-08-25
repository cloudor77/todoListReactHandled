import classes from "./todo-form.module.css";
import { useState } from "react";

const ToDoForm = (props) => {
  const [newToDo, setNewToDo] = useState("");
  const [lengthError, setLengthError] = useState(false);
  const [onChangeValue, setOnChangeValue] = useState(false);
  const [emptyValue, setEmptyValue] = useState(false);

  const inputOnChangeValue = (e) => {
    if (e.target.value === "") {
      setOnChangeValue(true);
    } else {
      setOnChangeValue(false);
    }

    if (e.target.value.length >= 60) {
      setLengthError(true);
      return false;
    }

    setNewToDo(e.target.value);
    setLengthError(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (newToDo.trim() === "") {
      setEmptyValue(true);
      return false;
    }

    props.submit(newToDo);
    setEmptyValue(false);
    setNewToDo("");
  };

  console.log(newToDo);

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <input
        type="text"
        name="todo"
        autoComplete="on"
        onChange={inputOnChangeValue}
        value={newToDo}
      />

      {emptyValue || onChangeValue ? (
        <h4 className={classes.formError}>Todo value cannot be empty...</h4>
      ) : (
        ""
      )}
      {lengthError && lengthError ? (
        <h4 className={classes.formMaximum}>You have reached max chars...</h4>
      ) : (
        ""
      )}
      <button className={classes.borderPop}>Add</button>
    </form>
  );
};

export default ToDoForm;
