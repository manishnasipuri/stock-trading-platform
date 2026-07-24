import React from "react";

function Universe() {
  return (
    <div className="container text-center mt-5">
      <div className="row">
        <h1 className="text-center">The Zerodha Universe</h1>
        <p className="text-center">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        <div className="col-4 p-3 mt-5">
          <img
            src="media/smallcaseLogo.png"
            alt="Smallcase Logo"
          />
          <p className="text-small text-muted"></p>
        </div>

        <div className="col-4 p-3 mt-5">
          <img
            src="media/streakLogo.png"
            alt="Streak Logo"
            style={{ width: "150px" }}
          />
          <p className="text-small text-muted"></p>
        </div>

        <div className="col-4 p-3 mt-5">
          <img
            src="media/sensibullLogo.svg"
            alt="Sensibull Logo"
            style={{ width: "200px" }}
          />
          <p className="text-small text-muted"></p>
        </div>

        <div className="col-4 p-3 mt-5">
          <img
            src="media/zerodhaFundhouse.png"
            alt="Zerodha Fund House Logo"
            style={{ width: "200px" }}
          />
          <p className="text-small text-muted"></p>
        </div>

        <div className="col-4 p-3 mt-5">
          <img
            src="media/goldenpiLogo.png"
            alt="GoldenPi Logo"
            style={{ width: "150px" }}
          />
          <p className="text-small text-muted"></p>
        </div>

        <div className="col-4 p-3 mt-5">
          <img
            src="media/dittoLogo.png"
            alt="Ditto Logo"
            style={{ width: "100px" }}
          />
          <p className="text-small text-muted"></p>
        </div>

        <button
          className="p-2 btn btn-primary fs-5 mb-5 mt-5"
          style={{ width: "20%", margin: "0 auto" }}
        >
          Sign Up Now
        </button>
      </div>
    </div>
  );
}

export default Universe;