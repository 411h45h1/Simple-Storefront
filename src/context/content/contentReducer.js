import { ADD_CONTENT, CONTENT_ERROR } from "../types";

export default (state, action) => {
  switch (action.type) {
    case ADD_CONTENT:
      return {
        ...state,
        contents: [...state.contents, action.payload]
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
