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

const Issues = () => {
  return (
    <div class="list-group">
      {getIssue.map(issue => (
        <a href="#" class="list-group-item list-group-item-action">
          <i class={getIcon(issue.type)}></i> {issue.title} {issue.description}{" "}
          {issue.asignee}
        </a>
      ))}

      <a href="#" class="list-group-item list-group-item-action active">
        Dapibus ac facilisis in
      </a>
      <a href="#" class="list-group-item list-group-item-action">
        Morbi leo risus
      </a>
      <a href="#" class="list-group-item list-group-item-action">
        Porta ac consectetur ac
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
