import React, { useState } from "react";
import getProjectData from "../../resources/projectDatabase.json";
import "./Issues.scss";

//useState for updating icon and colour

const Issues = () => {
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

  const setPriorityColour = priority => {
    let colour;

    switch (priority) {
      case "low priority":
        colour = "blue";
        break;
      case "high priority":
        colour = "orange";
        break;
      case "urgent":
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

  return (
    <div className="issue-list">
      <div className="list-group">
        {getProjectData.map(project => (
          <div>
            {project.issues.map(issue => (
              <a href="#" className="list-group-item list-group-item-action">
                <div className="d-flex w-100 justify-content-between">
                  <h6 className="mb-1">
                    {issue.id}
                    {issue.title} - {issue.description}{" "}
                    {issue.type.map(type => {
                      return <i className={getIssueTypeIcon(type)} />;
                    })}
                  </h6>
                  <small>{issue.assigneeIDs}</small>
                </div>
                <div className="d-flex w-100 justify-content-between">
                  <small className="mb-1">
                    Reported by: {issue.author} on: {issue.reportDate}
                  </small>
                  <small
                    className="badge badge-secondary"
                    style={{
                      backgroundColor: setPriorityColour(issue.priority)
                    }}
                  >
                    {issue.priority}
                  </small>
                </div>
              </a>
            ))}
          </div>
        ))}
      </div>
      <small>
        <i className="far fa-copyright"></i> Created by 2 jacked brothers
      </small>
    </div>
  );
};

export default Issues;
