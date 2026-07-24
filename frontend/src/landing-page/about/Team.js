import React from "react";

function Team() {
  return (
    <div className="container mb-5">
      <div className="row p-5">
        <h1 className="fs-3 text-center">People</h1>
      </div>

      <div className="row p-5 text-muted">
        <div className="founder-image col-6 text-center">
          <img
            src="media/Manish.png"
            alt="Manish Nasipuri"
            style={{ borderRadius: "100%" }}
          />
          <h4 className="mt-3">Manish Nasipuri</h4>
          <h6>Developer</h6>
        </div>

        <div className="col-6">
          <p
            style={{
              lineHeight: "1.8",
              marginBottom: "15px",
              fontSize: "1rem",
            }}
          >
            Manish Nasipuri is an aspiring developer currently pursuing B.Tech in
            Information Technology at Government College of Engineering and
            Textile Technology, Serampore. Passionate about technology and
            financial platforms, he created this Zerodha-inspired project to
            learn and overcome challenges in building real-world web
            applications.
            <br />
            <br />
            Playing basketball is his zen.
            <br />
            <br />
            Connect on{" "}
            <a style={{ textDecoration: "none" }} href="/">
              Homepage
            </a>{" "}
            /{" "}
            <a style={{ textDecoration: "none" }} href="/">
              TradingQnA
            </a>{" "}
            /{" "}
            <a style={{ textDecoration: "none" }} href="/">
              Twitter
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;