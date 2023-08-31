import { useState } from "react";
import classes from "./keep-delete-view.module.css";

const KeepOrDelete = (props) => {
  const [isShown, setIsShown] = useState(false);

  const removeToDoHandler = () => {
    props.removingToDo(props.id);
  };

  const revealOptions = () => {
    setIsShown(true);
    console.log("what");
  };

  return (
    <div className={`${classes.KeepOrDeleteBtn}`}>
      <div
        onClick={revealOptions}
        className={classes.deleteText}
        style={{ transform: isShown ? "scaleX(0.9)" : "" }}
      >
        Delete
      </div>
      {isShown && (
        <div onClick={removeToDoHandler} className={classes.deleteBtn}>
          <span>Yes</span>
        </div>
      )}
      {isShown && (
        <div onClick={() => setIsShown(false)} className={classes.keepBtn}>
          <span>No</span>
        </div>
      )}
    </div>
  );
};

export default KeepOrDelete;
