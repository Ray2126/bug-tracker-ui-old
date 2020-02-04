import {
  FETCH_PROJECTS_BY_USER,
  FETCH_PROJECT,
  CREATE_PROJECT,
  FETCH_ISSUES,
  FETCH_ISSUE,
  CREATE_ISSUE,
  CLOSE_ISSUE,
  FETCH_COMMENTS,
  FETCH_COMMENT,
  CREATE_COMMENT,
  EDIT_COMMENT,
  DELETE_COMMENT,
  ASSIGN_USER_TO_ISSUE,
  ASSIGN_USER_TO_PROJECT,
  REMOVE_USER_FROM_PROJECT
} from "./types";
import axios from "../axiosConfig";

export const fetchProjects = user_id => async dispatch => {
  const response = await axios.get(`/userProjects/user/${user_id}`);

  dispatch({ type: FETCH_PROJECTS_BY_USER, payload: response.data });
};

export const fetchProject = project_id => async dispatch => {
  const response = await axios.get(`/projects/${project_id}`);

  dispatch({ type: FETCH_PROJECT, payload: response.data });
};
