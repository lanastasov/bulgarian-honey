import React from "react";
import homepage from "../img/crackers-dates-delicious-1152276.jpg";
const HomePage = () => {
  return (
    <div id="container">
      <img src={homepage} alt="homepage" className="homepage" />
      <div className="container-hover">
        <div className="container-row">
          <div className="container-column container-column-1"></div>
          <div className="container-column container-column-2">
            <div className="container-element">
              <div className="container-widget">
                <h2 className="heading-title">A purity story</h2>
              </div>
              <div className="container-widget">
                <div className="container-divider">
                  <span className="divider-separator"></span>
                </div>
              </div>
              <div className="container-widget">
                <div className="container-text-editor">
                  <p>
                    <em>Natural, original, pure</em>.&nbsp; All of these mean{" "}
                    <strong>raw</strong>.
                  </p>
                  <p>
                    We are <em>raw-honey</em> addicts, dedicated exclusively to
                    honey and to products from beekeeping. We have been working
                    for years on the Bulgarian territory, selecting the highest
                    quality product for our customers. Bulgarian Raw Honey. Our
                    main institutional buyers are located in Italy and Germany.
                  </p>
                  <p>Do you want to know more ?</p>
                </div>
              </div>
              <div className="container-widget">
                <div className="container-button-wrapper">
                  <a
                    href="#contact-us"
                    className="elementor-button"
                    role="button"
                  >
                    <span className="elementor-button-content-wrapper">
                      <span className="elementor-button-icon elementor-align-icon-right">
                        <i
                          aria-hidden="true"
                          className="fas fa-long-arrow-alt-right"
                        ></i>{" "}
                      </span>
                      <span className="elementor-button-text">
                        Contact us now
                      </span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
