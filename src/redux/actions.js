import { GET_WORDS, ADD_WORD, DELETE_WORD } from "./types";
import { LINK } from "../utils/consts";
import Axios from "axios";

export const getWords = () => {
  return async (dispatch) => {
    try {
      const result = await Axios.get(`${LINK}flashcards`);

      dispatch({
        type: GET_WORDS,
        payload: result.data,
      });
    } catch (err) {}
  };
};

export const addWord = (word) => {
  return async (dispatch) => {
    try {
      const result = await Axios.post(`${LINK}flashcards`, {
        word1: word.word1,
        word2: word.word2,
        difficult: word.difficult,
      });

      dispatch({
        type: ADD_WORD,
        payload: result.data,
      });
    } catch (err) {}
  };
};

export const deleteWord = (_id) => {
  return async (dispatch) => {
    try {
      const result = await Axios.delete(`${LINK}flashcards/${_id}`);

      dispatch({
        type: DELETE_WORD,
        payload: _id,
      });
    } catch (err) {}
  };
};
