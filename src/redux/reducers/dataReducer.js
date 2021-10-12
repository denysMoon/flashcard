import { GET_WORDS } from "../types";

const initialState = {
  words: [],
};

export const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_WORDS:
      return { ...state, words: action.payload };
    default:
      return state;
  }
};
