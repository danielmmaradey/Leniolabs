import isEmpty from "../../util/validation/is-empty";

import { GET_DATA_MEMBERS, ERROR_DATA_MEMBERS } from "../types";

const initialState = {
  isLoadedDataMembers: false,
  isLoadedDataMembersError: false,
  members: {},
  error: ""
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_DATA_MEMBERS:
      return {
        ...state,
        isLoadedDataMembers: !isEmpty(action.payload),
        isLoadedDataMembersError: false,
        members: action.payload,
        error: ""
      };
    case ERROR_DATA_MEMBERS:
      return {
        ...state,
        isLoadedDataMembers: false,
        isLoadedDataMembersError: true,
        members: {},
        error: "error"
      };
    default:
      return state;
  }
}
