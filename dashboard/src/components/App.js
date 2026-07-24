import React from "react";
import { Link } from "react-router-dom";

const AppsPage = () => {
  return (
    <div className="orders">
      <div className="no-orders">
        <p>No apps installed yet</p>
        <Link to={"/"} className="btn">
          Get started
        </Link>
      </div>
    </div>
  );
};

export default AppsPage;