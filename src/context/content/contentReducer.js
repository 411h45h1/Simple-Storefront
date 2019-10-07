import { ADD_CONTENT, GET_CONTENT, CONTENT_ERROR } from "../types";

export default (state, action) => {
  switch (action.type) {
    case GET_CONTENT:
      return {
        ...state,
        contents: action.payload,
        loading: false
      };
    case ADD_CONTENT:
      return {
        ...state,
        contents: [...state.contents, action.payload],
        loading: false
      };
    case CONTENT_ERROR:
      return {
        ...state,
        error: action.payload
      };

    default:
      return state;
  }
};
