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
    contents: [
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
      },
      {
        id: 4,
        name: "garbage",
        colour: "red",
        size: "l",
        quantity: "5"
      },
      {
        id: 5,
        name: "more garbage",
        colour: "red",
        size: "s",
        quantity: "24"
      },
      {
        id: 6,
        name: "sauce",
        colour: "red",
        size: "m",
        quantity: "55"
      }
    ]
  };
  const [state, dispatch] = useReducer(contentReducer, initialState);

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
        contents: state.contents
      }}
    >
      {props.children}
    </contentContext.Provider>
  );
};
export default ContentState;
