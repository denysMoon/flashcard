import { GET_WORDS, ADD_WORD, DELETE_WORD } from "../types";

const initialState = {
  words: [],
};

export const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_WORDS:
      return { ...state, words: action.payload };
    case ADD_WORD:
      return { ...state, words: state.words.concat([action.payload]) };
    case DELETE_WORD:
      return {
        ...state,
        words: state.words.filter((item) => item._id !== action.payload),
      };
    default:
      return state;
  }
};
