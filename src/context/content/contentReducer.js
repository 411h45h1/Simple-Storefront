import { ADD_CONTENT, GET_CONTENT, CONTENT_ERROR, ADD_COUNT } from "../types";

export default (state, action) => {
  switch (action.type) {
    case ADD_COUNT:
      return {
        ...state,
        counter: [...(state.counter + 1)]
      };
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
