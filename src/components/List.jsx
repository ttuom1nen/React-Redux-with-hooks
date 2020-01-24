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
            <button
              onClick={() =>
                dispatch({
                  type: "ADD_ITEM",
                  payload: {}
                })
              }
            >
              Add Item
            </button>
            <button
              onClick={() =>
                dispatch({
                  type: "REMOVE_ITEM",
                  payload: {}
                })
              }
            >
              Remove Item
            </button>
          </div>
          <div>
            {items.map(item => (
              <ListItem key={item.id} id={item.id} name={item.name} />
            ))}
          </div>
        </div>
      ) : (
        <b>Loading data...</b>
      )}
    </div>
  );
};

export default List;
