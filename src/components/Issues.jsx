import React from "react";
import getIssues from "../resources/fakeIssuesServer";

const getSelection = type => {
  let icon;
  switch (type) {
    case "bug":
      icon = "bug";
      break;
    case "feature":
      icon = "mouse-pointer";
      break;
    case "job":
      icon = "lemon";
      break;
  }
  return icon;
};

const Issues = () => {
  return (
    <div class="list-group">
      {getIssues.map(issue => {
        return (
          <a href="#" class="list-group-item list-group-item-action">
            <i class={"fas fa-" + getSelection(issue.type)}></i>
            {issue.type} {issue.title} {issue.description} {issue.asignee}
          </a>
        );
      })}
      <a href="#" class="list-group-item list-group-item-action active">
        Cras justo odio
      </a>
      <a href="#" class="list-group-item list-group-item-action">
        Dapibus ac facilisis in
      </a>
      <a
        href="#"
        class="list-group-item list-group-item-action disabled"
        tabindex="-1"
        aria-disabled="true"
      >
        Vestibulum at eros
      </a>
    </div>
  );
};

export default Issues;
