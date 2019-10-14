import axios from "axios";
import { BASE_URL, KEY_URL } from "../../util/APIs/APIs";

import { GET_DATA_MEMBERS, ERROR_DATA_MEMBERS } from "../types";

export const GetDataMembers = () => async dispatch => {
  try {
    const response = await axios.get(BASE_URL, { headers: KEY_URL });
    dispatch({
      type: GET_DATA_MEMBERS,
      payload: response.data
    });
  } catch (error) {
    dispatch({
      type: ERROR_DATA_MEMBERS,
      payload: error
    });
  }
};
