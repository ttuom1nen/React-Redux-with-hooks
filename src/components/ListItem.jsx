import React from "react";

const listItemStyle = {
  border: "1px solid silver",
  background: "white",
  maxWidth: "300px",
  padding: "10px",
  margin: "10px",
  boxSizing: "border-box"
};

const ListItem = ({ id, name }) => {
  return (
    <div id={id} style={{ ...listItemStyle }}>
      {name}
    </div>
  );
};

export default ListItem;
