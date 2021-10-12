import { GET_WORDS } from "./types";
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
