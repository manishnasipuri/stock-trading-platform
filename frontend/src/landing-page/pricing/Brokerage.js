import React from "react";

function Brokerage() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 text-center border-top">
        <div className="col-8">
          <a href="/pricing" style={{ textDecoration: "none" }}>
            <h4>Brokerage calculator</h4>
          </a>

          <ul
            className="text-muted mt-4"
            style={{ textAlign: "left", lineHeight: "2.5" }}
          >
            <li>Securities/Commodities transaction tax</li>
            <li>Transaction/Turnover Charges</li>
            <li>Call &amp; trade</li>
            <li>Stamp charges</li>
            <li>NRI brokerage charges</li>
            <li>Margin Trading Facility (MTF)</li>
            <li>AMC (Account maintenance charges)</li>
          </ul>
        </div>

        <div className="col-4">
          <a href="/pricing" style={{ textDecoration: "none" }}>
            <h4>List of charges</h4>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Brokerage;