import React, { useReducer } from "react";
import uuid from "uuid";
import contentContext from "./contentContext";
import contentReducer from "./contentReducer";
import {
  ADD_CONTENT,
  DELETE_CONTENT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTENT,
  FILTER_CONTENT,
  CLEAR_FILTER
} from "../types";

const ContentState = props => {
  const initialState = {
    content: [
      {
        id: 1,
        name: "Gucci flip flops",
        colour: "Black",
        size: "l",
        quantity: "40"
      },
      {
        id: 2,
        name: "Cuggi Sweater",
        colour: "red",
        size: "xl",
        quantity: "500"
      },
      {
        id: 3,
        name: "nike socks",
        colour: "white",
        size: "s",
        quantity: "2"
      }
    ]
  };
  const [state, dispatch] = useReducer(contactReducer, initialState);

  // ADD CONTENT

  //DELETE CONTENT

  //SET CURRENT CONTENT

  //CLEAR CURRENT CONTENT

  //UPDATE CONTENT

  //FILTER CONTENT

  //CLEAR FILTER

  return (
    <contentContext.Provider
      value={{
        content: state.content
      }}
    >
      {props.children}
    </contentContext.Provider>
  );
};
export default ContentState;
