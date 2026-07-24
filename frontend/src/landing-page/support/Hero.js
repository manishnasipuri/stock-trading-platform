import React from "react";

function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      <div className="p-5" id="supportWrapper">
        <h4>Support Portal</h4>
        <a href="/" style={{ textDecoration: "none" }}>
          Track Tickets
        </a>
      </div>

      <div className="row p-5 mx-5">
        <div className="col-6 p-5">
          <h1 className="fs-3">
            Search for an answer or browse help topics to create a ticket
          </h1>

          <input
            type="text"
            placeholder="Eg. How do I activate F&O?"
          />
          <br />

          <a href="/" style={{ color: "white" }}>
            Track Account Opening
          </a>
          <br />

          <a href="/" style={{ color: "white" }}>
            Track Segment Activation
          </a>
          <br />

          <a href="/" style={{ color: "white" }}>
            Intraday
          </a>
          <br />

          <a href="/" style={{ color: "white" }}>
            Margins
          </a>
          <br />

          <a href="/" style={{ color: "white" }}>
            Kite User Manual
          </a>
        </div>

        <div className="col-6 p-5 me-5">
          <h1 className="fs-3">Featured</h1>

          <a href="/" style={{ color: "white" }}>
            1. Current takeovers and Delisting
          </a>
          <br />

          <a href="/" style={{ color: "white" }}>
            2. Latest Intraday Leverages - MIS &amp; CO
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;