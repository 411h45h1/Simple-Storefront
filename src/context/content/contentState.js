import React, { useReducer } from "react";
import axios from "axios";
import uuid from "uuid";
import contentContext from "./contentContext";
import contentReducer from "./contentReducer";
import { ADD_CONTENT, GET_CONTENT, CONTENT_ERROR, ADD_COUNT } from "../types";

const ContentState = props => {
  const initialState = {
    contents: []
  };
  const [state, dispatch] = useReducer(contentReducer, initialState);

  //Get Content
  const getContent = async () => {
    try {
      const res = await axios.get("/api/shop");

      dispatch({
        type: GET_CONTENT,
        payload: res.data
      });
    } catch (err) {
      console.log("get content error");
    }
  };

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
        addContent,
        getContent
      }}
    >
      {props.children}
    </contentContext.Provider>
  );
};

export default ContentState;
