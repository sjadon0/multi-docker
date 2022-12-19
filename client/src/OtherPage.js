import React from "react";
import { Link } from "react-router-dom";

export default () => {
  return (
    <div>
      <div className="row">
        <div className="col-md-12">
          <h1>Im other page</h1>
          <Link to="/"> Go home!</Link>
        </div>
      </div>
    </div>
  );
};
