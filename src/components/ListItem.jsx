import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  removeItem,
  toggleEdit,
  saveInput
} from "../redux/actions/actionCreators";

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

  const [input, setInput] = useState(name);

  const handleInputChange = e => setInput(e.currentTarget.value);

  return (
    <div id={id} style={{ ...listItemStyle }}>
      {editing ? (
        <input type="text" value={input} onChange={handleInputChange} />
      ) : (
        <div>{name}</div>
      )}

      <div>
        {editing ? (
          <button
            style={buttonStyle}
            onClick={() => dispatch(saveInput(id, input))}
          >
            Save
          </button>
        ) : (
          <button style={buttonStyle} onClick={() => dispatch(toggleEdit(id))}>
            Edit
          </button>
        )}

        <button style={buttonStyle} onClick={() => dispatch(removeItem(id))}>
          Remove
        </button>
      </div>
    </div>
  );
};

export default ListItem;
