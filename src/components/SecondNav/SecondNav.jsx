import React from "react";
import {
  DropdownButton,
  Dropdown,
  Container,
  Row,
  Button,
  Col
} from "react-bootstrap";

import "./SecondNav.scss";

const renderSortButton = () => {
  return (
    <DropdownButton
      id="dropdown-basic-button dropdown-variants-Secondary"
      title="Sort"
    >
      <Dropdown.Item href="#/action-1">Newest</Dropdown.Item>
      <Dropdown.Item href="#/action-2">Oldest</Dropdown.Item>
      <Dropdown.Item href="#/action-3">Priority</Dropdown.Item>
    </DropdownButton>
  );
};

const renderFilterButton = () => {
  return (
    <DropdownButton
      id="dropdown-basic-button dropdown-variants-Secondary filterDropDown"
      title={<i className="fas fa-filter" />}
    >
      <Container>
        <Row id="filterOptions">
          <Col>
            <h4>Author</h4>
            <div className="checkbox">
              <input type="checkbox" value=".square" />
              <label>Square</label>
            </div>
            <div className="checkbox">
              <input type="checkbox" value=".circle" />
              <label>Circle</label>
            </div>
            <div className="checkbox">
              <input type="checkbox" value=".triangle" />
              <label>Triangle</label>
            </div>
          </Col>

          <div className="col">
            <h4>Date created</h4>
            <div className="checkbox">
              <input type="checkbox" value=".white" />
              <label>White</label>
            </div>
            <div className="checkbox">
              <input type="checkbox" value=".green" />
              <label>Green</label>
            </div>
            <div className="checkbox">
              <input type="checkbox" value=".blue" />
              <label>Blue</label>
            </div>
          </div>

          <div className="col">
            <h4>Type</h4>
            <div className="checkbox">
              <input type="checkbox" value=".sm" />
              <label>Small</label>
            </div>
            <div className="checkbox">
              <input type="checkbox" value=".lrg" />
              <label>Large</label>
            </div>
          </div>

          <div className="col">
            <h4>Priority</h4>
            <div className="checkbox">
              <input type="checkbox" value=".sm" />
              <label>Small</label>
            </div>
            <div className="checkbox">
              <input type="checkbox" value=".lrg" />
              <label>Large</label>
            </div>
            <div className="checkbox">
              <input type="checkbox" value=".lrg" />
              <label>Large</label>
            </div>
          </div>
        </Row>
        <div
          className="row align-items-end justify-content-end"
          id="filterButtons"
        >
          <button type="button" className="btn btn-primary">
            Apply filters
          </button>
          <button type="button" className="btn btn-primary">
            Clear filters
          </button>
        </div>
      </Container>
    </DropdownButton>
  );
};

const SecondNav = () => {
  return (
    <React.Fragment>
      {renderSortButton()}
      {renderFilterButton()}
      <Button variant="success">New Issue</Button>
    </React.Fragment>
  );
};

export default SecondNav;
