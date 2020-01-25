import React, { useEffect } from "react";
import ListItem from "./ListItem";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "../redux/actions/actionCreators";

const listStyle = {
  background: "aliceblue",
  padding: "10px",
  margin: "10px",
  boxSizing: "border-box"
};

const List = () => {
  const dispatch = useDispatch();
  const { isFetching, didInvalidate, items } = useSelector(
    state => state.fetch
  );

  useEffect(() => {
    dispatch(fetchUsers());
    return () => {};
  }, [dispatch]);

  return (
    <div style={{ ...listStyle }}>
      {!isFetching ? (
        <div>
          <div>
            {items.map(item => (
              <ListItem
                key={item.id}
                id={item.id}
                name={item.name}
                editing={item.editing}
              />
            ))}
          </div>
        </div>
      ) : !didInvalidate ? (
        <b>Loading data...</b>
      ) : (
        <b>Error Loading Users!</b>
      )}
    </div>
  );
};

export default List;
