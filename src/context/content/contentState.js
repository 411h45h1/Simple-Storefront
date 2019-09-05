import React, { useReducer } from "react";
import axios from "axios";
import uuid from "uuid";
import contentContext from "./contentContext";
import contentReducer from "./contentReducer";
import { ADD_CONTENT, CONTENT_ERROR } from "../types";

const ContentState = props => {
  const initialState = {
    contents: [],
    current: null,
    filtered: null,
    error: null
  };
  const [state, dispatch] = useReducer(contentReducer, initialState);

  // ADD CONTENT
  const addContent = async content => {
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };

    try {
      const res = await axios.post("/api/shop", content, config);

      dispatch({
        type: ADD_CONTENT,
        payload: res.data
      });
    } catch (err) {
      console.log("add content error");
    }
  };

  return (
    <contentContext.Provider
      value={{
        contents: state.contents,
        current: state.current,
        filtered: state.filtered,
        error: state.error,
        addContent
      }}
    >
      {props.children}
    </contentContext.Provider>
  );
};

export default ContentState;
