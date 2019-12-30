import React from "react";
import getIssue from "../resources/fakeIssuesServer.json";

const getIcon = type => {
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
    // <div class="list-group">
    //   {getIssue.map(issue => (
    //     <a href="#" class="list-group-item list-group-item-action">
    //       <i class={getIcon(issue.type)}></i> {issue.title} {issue.description}{" "}
    //       {issue.asignee}
    //     </a>
    //   ))}
    // </div>

    <div class="list-group">
      {getIssue.map(issue => (
        <a href="#" class="list-group-item list-group-item-action">
          <div class="d-flex w-100 justify-content-between">
            <i
              class={getIcon(issue.type)}
              onMouseOver={() => {
                console.log(displayLegend(issue.type));
              }}
            />
            <h6 class="mb-1">
              {" "}
              {issue.title} - {issue.description}
            </h6>
            <small>{issue.asignee}</small>
          </div>
        </a>
      ))}
    </div>
  );
};

export default Issues;
