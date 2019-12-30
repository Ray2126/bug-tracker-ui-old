import React from "react";

const Issues = () => {
  return (
    <div class="list-group">
      <button
        type="button"
        class="list-group-item list-group-item-action active"
      >
        Cras justo odio
      </button>
      <button
        type="button"
        class="list-group-item list-group-item-action list-group-item-sm"
      >
        Dapibus ac facilisis in
      </button>
      <button type="button" class="list-group-item list-group-item-action">
        Morbi leo risus
      </button>
      <button type="button" class="list-group-item list-group-item-action">
        Porta ac consectetur ac
      </button>
      <button
        type="button"
        class="list-group-item list-group-item-action"
        disabled
      >
        Vestibulum at eros
      </button>
    </div>
  );
};

export default Issues;
