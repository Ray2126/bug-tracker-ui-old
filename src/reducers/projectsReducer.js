import {
  FETCH_PROJECTS_BY_USER,
  FETCH_PROJECT,
  CREATE_PROJECT
} from "../actions/types";
import _ from "lodash";

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_PROJECTS_BY_USER:
      return { ...state, ..._.mapKeys(action.payload, "project_id") };
    case FETCH_PROJECT:
      return { ...state, [action.payload.project_id]: action.payload };
    case CREATE_PROJECT:
      return { ...state, [action.payload.project_id]: action.payload };
    default:
      return state;
  }
};
