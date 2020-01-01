import React from "react";
import getIssue from "../resources/fakeIssuesServer.json";

//useState for updating icon and colour
const getIssueTypeIcon = type => {
  let icon;

  switch (type) {
    case "bug":
      icon = "bug";
      break;
    case "job":
      icon = "lemon";
      break;
    case "feature":
      icon = "mouse-pointer";
      break;
  }
  return "fas fa-" + icon;
};

const setIssueTypeColour = type => {
  let colour;

  switch (type) {
    case "bug":
      colour = "red";
      break;
    case "job":
      colour = "yellow";
      break;
    case "feature":
      colour = "green";
      break;
  }
  return colour;
};

const getPriorityIcon = type => {
  let icon;

  switch (type) {
    case "low priority":
      icon = "car";
      break;
    case "high priority":
      icon = "plane";
      break;
  }
  return "fas fa-" + icon;
};

const setPriorityColour = type => {
  let colour;

  switch (type) {
    case "low priority":
      colour = "blue";
      break;
    case "high priority":
      colour = "red";
      break;
  }
  return colour;
};

const displayLegend = type => {
  let icon;

  switch (type) {
    case "bug":
      icon = "bug";
      break;
    case "job":
      icon = "job";
      break;
    case "feature":
      icon = "feature";
      break;
  }
  return icon;
};

const onMouseOver = e => {
  return "bug";
};

const Issues = () => {
  return (
    <div>
      <button class="btn btn-success">New Issue</button>
      <div class="dropdown">
        <dropDown>
          <button
            class="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenu2"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Sort
          </button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
            <button class="dropdown-item" type="button">
              Newest
            </button>
            <button class="dropdown-item" type="button">
              Oldest
            </button>
          </div>
        </dropDown>

        <dropDown>
          <button
            class="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenu3"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <button class="dropdown-item" type="button">
            type="button"
              id="defaultCheck1"
            />
            <h6 class="mb-1">
              {" "}
              {issue.title} - {issue.description}
            </h6>
            <small>{issue.asignee}</small>
            </fieldset>
          </div>
        </a>
      ))}
      <fieldset>
        <h4>Shapes</h4>
        <div class="checkbox">
          <input type="checkbox" value=".square" />
          <label>Square</label>
        </div>
        <div class="checkbox">
          <input type="checkbox" value=".circle" />
          <label>Circle</label>
        </div>
        <div class="checkbox">
          <input type="checkbox" value=".triangle" />
          <label>Triangle</label>
        </div>
      </fieldset>

      <fieldset>
        <h4>Colours</h4>
        <div class="checkbox">
          <input type="checkbox" value=".white" />
          <label>White</label>
        </div>
        <div class="checkbox">
          <input type="checkbox" value=".green" />
          <label>Green</label>
        </div>
        <div class="checkbox">
          <input type="checkbox" value=".blue" />
          <label>Blue</label>
        </div>
      </fieldset>

      <fieldset>
        <h4>Sizes</h4>
        <div class="checkbox">
          <input type="checkbox" value=".sm" />
          <label>Small</label>
        </div>
        <div class="checkbox">
          <input type="checkbox" value=".lrg" />
          <label>Large</label>
        </div>
      </fieldset>

      {/* render issue list dynamically */}
      <div class="list-group">
        {getIssue.map(issue => (
          <a href="#" class="list-group-item list-group-item-action">
            <div class="d-flex w-100 justify-content-between">
              <h6 class="mb-1">
                <i
                  class={getIssueTypeIcon(issue.type)}
                  style={{ color: setIssueTypeColour(issue.type) }}
                />
                {issue.title} - {issue.description}{" "}
                {/* TODO: Need to render the type colour dynamically */}
                {/* <i class={getIssueTypeIcon(issue.type)} style={{ color: "blue" }} /> */}
              </h6>
              <small>Assigned to: {issue.assignee}</small>
            </div>
            <div class="d-flex w-100 justify-content-between">
              <small class="mb-1">
                Reported by: {issue.author} on: {issue.date}
              </small>
              <small
                class="badge badge-secondary"
                style={{ backgroundColor: setPriorityColour(issue.priority) }}
              >
                {issue.priority}
              </small>
            </div>
          </a>
        ))}
      </div>
      <small>
        <i class="far fa-copyright"></i> Created by 2 jacked brothers
      </small>
    </div>
  );
};

export default Issues;
