import React, { useState } from "react";
import "./SecondNav.scss";

const SecondNav = () => {
  return (
    <div>
      <nav>
        <div class="dropdown">
          <button
            class="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Sort
          </button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a class="dropdown-item" href="#">
              Newest
            </a>
            <a class="dropdown-item" href="#">
              Oldest
            </a>
            <a class="dropdown-item" href="#">
              Priority
            </a>
          </div>
        </div>

        <div class="dropdown">
          <button
            class="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <i class="fas fa-filter"></i>
          </button>
          <div
            class="dropdown-menu"
            aria-labelledby="dropdownMenuButton"
            id="filterDropDown"
          >
            <div className="container">
              <div className="row" id="filterOptions">
                <div className="col">
                  <h4>Author</h4>
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
                </div>

                <div className="col">
                  <h4>Date created</h4>
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
                </div>

                <div className="col">
                  <h4>Type</h4>
                  <div class="checkbox">
                    <input type="checkbox" value=".sm" />
                    <label>Small</label>
                  </div>
                  <div class="checkbox">
                    <input type="checkbox" value=".lrg" />
                    <label>Large</label>
                  </div>
                </div>

                <div className="col">
                  <h4>Priority</h4>
                  <div class="checkbox">
                    <input type="checkbox" value=".sm" />
                    <label>Small</label>
                  </div>
                  <div class="checkbox">
                    <input type="checkbox" value=".lrg" />
                    <label>Large</label>
                  </div>
                  <div class="checkbox">
                    <input type="checkbox" value=".lrg" />
                    <label>Large</label>
                  </div>
                </div>
              </div>
              <div
                className="row align-items-end justify-content-end"
                id="filterButtons"
              >
                <button type="button" class="btn btn-primary">
                  Apply filters
                </button>
                <button type="button" class="btn btn-primary">
                  Clear filters
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="newIssueBtn">
          <button type="button" class="btn btn-success">
            New Issue
          </button>
        </div>
      </nav>
    </div>
  );
};

export default SecondNav;
