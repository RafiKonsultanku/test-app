import React from "react";
import { useDoc } from "@syncstate/react";

function TodoItem({ todoItemPath }) {

  return (
    <div>
      <div className="d-flex align-content-center">
        <div
          className="d-flex align-items-center todoTitle"
        >
          <div style={{ width: "100%" }}>{TodoItem.caption} </div>
        </div> 
      </div>
    </div>
  );
}

export default TodoItem;
