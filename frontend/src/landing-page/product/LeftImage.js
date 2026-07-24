import React from "react";

function LeftImage({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnPlay,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6 p-5 mb-5">
          <img src={imageURL} alt={productName} />
        </div>

        <div className="col-6 p-5 mt-5">
          <h1>{productName}</h1>
          <p>{productDescription}</p>

          <div>
            <a href={tryDemo}>Try Demo</a>
            <a href={learnPlay} style={{ marginLeft: "120px" }}>
              Learn More
            </a>
          </div>

          <div className="mt-3">
            <a href={googlePlay}>
              <img
                src="media/googlePlayBadge.svg"
                alt="Get it on Google Play"
              />
            </a>

            <a href={appStore} style={{ marginLeft: "50px" }}>
              <img
                src="media/appStoreBadge.svg"
                alt="Download on the App Store"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftImage;