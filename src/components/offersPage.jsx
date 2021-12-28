import React, { Component } from "react";
import offersPageSVG from "../img/offersPage.svg";

// import OffersPage from "./offersPage";
const OffersPage = () => {
  return (
    <section className="container-section">
      <div className="container-shape">
        <img src={offersPageSVG} alt="" />
      </div>
      <div className="container-hover-2">
        <div className="container-row">
          <div className="container-column">
            <div className="container-column-wrap">
              <div className="widget-container">
                <h2 className="heading-title">Offers and stocks</h2>
              </div>
            </div>
          </div>
          <div className="container-column">
            <div className="elementor-column-wrap">
              <div className="elementor-widget-wrap">
                <div
                  className="elementor-element elementor-element-87a070a elementor-widget elementor-widget-text-editor"
                  data-id="87a070a"
                  data-element_type="widget"
                  data-widget_type="text-editor.default"
                >
                  <div className="elementor-widget-container">
                    <div className="elementor-text-editor-left elementor-clearfix">
                      <p>
                        There is immediately available (
                        <strong>August/September 2021</strong>) for export :
                      </p>
                      <ul>
                        <li>
                          1 stock of{" "}
                          <strong>
                            10 tons of Organic Acacia honey (Premium quality)
                          </strong>
                        </li>
                        <li>
                          2 stocks of <strong>5 tons of&nbsp;</strong>
                          <span>Organic Acacia honey (Premium quality)</span>
                        </li>
                        <li>
                          <span>1 stock of </span>
                          <strong>
                            20 tons of conventional Polyflora honey
                          </strong>
                        </li>
                      </ul>
                      <p>
                        <span>
                          Unadulterated, free of additive, free of pesticides
                          residues and antibiotics. Homogenised or Not
                          homogenised. Premium quality. Samples approved.
                        </span>
                        <br />
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="elementor-element elementor-element-c5f5ff7 elementor-align-right elementor-widget elementor-widget-button"
                  data-id="c5f5ff7"
                  data-element_type="widget"
                  data-widget_type="button.default"
                >
                  <div className="elementor-widget-container">
                    <div className="elementor-button-wrapper">
                      <a
                        href="#contact-us"
                        className="elementor-button-link elementor-button-2 elementor-size-sm"
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
                            REQUEST AN OFFER{" "}
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
      </div>
    </section>
  );
};

export default OffersPage;
