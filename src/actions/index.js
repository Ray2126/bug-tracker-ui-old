import {
  FETCH_PROJECTS_BY_USER,
  FETCH_PROJECT,
  CREATE_PROJECT,
  FETCH_ISSUES_BY_PROJECT,
  FETCH_ISSUE,
  CREATE_ISSUE,
  CLOSE_ISSUE,
  FETCH_COMMENTS_BY_ISSUE,
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

export const fetchIssues = project_id => async dispatch => {
  const response = await axios.get(`/issues/projects/${project_id}`);

  dispatch({ type: FETCH_ISSUES_BY_PROJECT, payload: response.data });
};

export const fetchIssue = issue_id => async dispatch => {
  const response = await axios.get(`/issues/${issue_id}`);

  dispatch({ type: FETCH_ISSUE, payload: response.data });
};

export const fetchComments = issue_id => async dispatch => {
  const response = await axios.get(`/comments/issue/${issue_id}`);

  dispatch({ type: FETCH_COMMENTS_BY_ISSUE, payload: response.data });
};

export const fetchComment = comment_id => async dispatch => {
  const response = await axios.get(`/comments/${comment_id}`);

  dispatch({ type: FETCH_COMMENT, payload: response.data });
};

export const assignUserToProject = (user_id, project_id) => async dispatch => {
  const response = await axios.post("/userProjects", {
    user_id,
    project_id
  });

  dispatch({ type: ASSIGN_USER_TO_PROJECT, payload: response.data });
};

export const removeUserFromProject = (
  user_id,
  project_id
) => async dispatch => {
  await axios.patch(`/userProjects/${user_id}/${project_id}`);

  dispatch({ type: REMOVE_USER_FROM_PROJECT });
};
