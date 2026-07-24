import React from "react";

function Footer() {
  return (
    <footer className="border-top" style={{ backgroundColor: "#fbfbfb" }}>
      <div className="container mt-5">
        <div className="row mt-5">
          <div className="col" style={{ marginRight: "3%" }}>
            <img
              src="media/logo.svg"
              alt="Zerodha Logo"
              style={{ width: "50%" }}
            />
            <p>
              &copy; 2010 - 2024, Not Zerodha Broking Ltd. All rights reserved.
            </p>
          </div>

          <div className="col">
            <p>Company</p>

            <a href="/about" style={{ textDecoration: "none", color: "black" }}>
              About
            </a>
            <br />

            <a href="/product" style={{ textDecoration: "none", color: "black" }}>
              Products
            </a>
            <br />

            <a href="/pricing" style={{ textDecoration: "none", color: "black" }}>
              Pricing
            </a>
            <br />

            <a href="/" style={{ textDecoration: "none", color: "black" }}>
              Referral programme
            </a>
            <br />

            <a href="/" style={{ textDecoration: "none", color: "black" }}>
              Careers
            </a>
            <br />

            <a href="/" style={{ textDecoration: "none", color: "black" }}>
              Zerodha.tech
            </a>
            <br />

            <a href="/" style={{ textDecoration: "none", color: "black" }}>
              Press & media
            </a>
            <br />

            <a href="/" style={{ textDecoration: "none", color: "black" }}>
              Zerodha Cares (CSR)
            </a>
            <br />
          </div>

          <div className="col">
            <p>Support</p>

            <a href="/support" style={{ textDecoration: "none", color: "black" }}>
              Contact
            </a>
            <br />

            <a href="/support" style={{ textDecoration: "none", color: "black" }}>
              Support Portal
            </a>
            <br />

            <a href="/" style={{ textDecoration: "none", color: "black" }}>
              Z-Connect Blog
            </a>
            <br />

            <a href="/" style={{ textDecoration: "none", color: "black" }}>
              List of Charges
            </a>
            <br />

            <a href="/" style={{ textDecoration: "none", color: "black" }}>
              Downloads & Resources
            </a>
            <br />
          </div>

          <div className="col">
            <p>Account</p>

            <a href="/signup" style={{ textDecoration: "none", color: "black" }}>
              Open an Account
            </a>
            <br />

            <a href="/" style={{ textDecoration: "none", color: "black" }}>
              Fund Transfer
            </a>
            <br />

            <a href="/" style={{ textDecoration: "none", color: "black" }}>
              60 Day Challenge
            </a>
            <br />
          </div>
        </div>

        <div className="mt-5 text-muted" style={{ fontSize: "12px" }}>
          <p>
            Zerodha Broking Ltd.: Member of NSE &amp; BSE – SEBI Registration no.:
            INZ000031633. CDSL: Depository services through Zerodha Securities
            Pvt. Ltd. – SEBI Registration no.: IN-DP-100-2015. Commodity Trading
            through Zerodha Commodities Pvt. Ltd. MCX: 46025 – SEBI Registration
            no.: INZ000038238. Registered Address: Zerodha Broking Ltd.,
            #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School,
            J.P. Nagar 4th Phase, Bengaluru - 560078, Karnataka, India.
          </p>

          <p>
            Procedure to file a complaint on SEBI SCORES: Register on the SCORES
            portal. Mandatory details include Name, PAN, Address, Mobile Number,
            and Email ID.
          </p>

          <p>
            Investments in the securities market are subject to market risks.
            Read all related documents carefully before investing.
          </p>

          <p>
            Prevent unauthorised transactions in your account. Update your mobile
            number and email ID with your broker. Receive transaction alerts
            directly from the Exchange. KYC is a one-time process. If you are
            applying for an IPO, there is no need to issue a cheque. Zerodha
            never provides stock tips or authorises anyone to trade on behalf of
            clients. If someone claims otherwise, please create a support ticket.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;