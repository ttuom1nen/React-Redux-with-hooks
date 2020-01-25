import React from "react";
import { useDispatch } from "react-redux";
import { removeItem, toggleEdit } from "../redux/actions/actionCreators";

const listItemStyle = {
  border: "1px solid silver",
  background: "white",
  maxWidth: "300px",
  padding: "10px",
  margin: "10px",
  boxSizing: "border-box"
};

const buttonStyle = {
  cursor: "pointer"
};

const ListItem = ({ id, name, editing }) => {
  const dispatch = useDispatch();
  return (
    <div id={id} style={{ ...listItemStyle }}>
      {editing ? (
        <input
          type="text"
          value={name}
          onChange={() => console.log("Implement onChange")}
        />
      ) : (
        <div>{name}</div>
      )}

      <div>
        <button style={buttonStyle} onClick={() => dispatch(toggleEdit(id))}>
          {editing ? "Save" : "Edit"}
        </button>
        <button style={buttonStyle} onClick={() => dispatch(removeItem(id))}>
          Remove
        </button>
      </div>
    </div>
  );
};

export default ListItem;
