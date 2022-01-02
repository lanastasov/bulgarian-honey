import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faMapPin } from "@fortawesome/free-solid-svg-icons";

// https://fontawesome.com/v5.15/how-to-use/on-the-web/advanced/css-pseudo-elements
// .oceanwp-custom-links li a:before {} - font-family is not recognizes

const FooterPage = () => {
  return (
    <footer
      id="footer"
      className="site-footer"
      itemScope="itemscope"
      itemType="http://schema.org/WPFooter"
    >
      <div id="footer-inner" className="clr">
        <div id="footer-widgets" className="oceanwp-row clr">
          <div className="footer-widgets-inner container">
            <div className="footer-box span_1_of_2 col col-1">
              <div
                id="ocean_custom_links-1"
                className="footer-widget widget-oceanwp-custom-links custom-links-widget clr"
              >
                <h4 className="widget-title">Raw honey specialties we sell</h4>
                <ul className="oceanwp-custom-links">
                  <li>
                    <a href="/#" target="_self">
                      Acacia honey
                    </a>
                  </li>
                  <li>
                    <a href="/#" target="_self">
                      Polyfloral honey
                    </a>
                  </li>
                  <li>
                    <a href="/#" target="_self">
                      Linden honey
                    </a>
                  </li>
                  <li>
                    <a href="/#" target="_self">
                      Rape honey
                    </a>
                  </li>
                  <li>
                    <a href="/#" target="_self">
                      Mint honey
                    </a>
                  </li>
                  <li>
                    <a href="/#" target="_self">
                      Coriander honey
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="footer-box span_1_of_2 col col-2">
              <div
                id="ocean_contact_info-1"
                className="footer-widget widget-oceanwp-contact-info clr"
              >
                <h4 className="widget-title">Contact Info</h4>
                <ul className="contact-info-widget default">
                  <li className="address">
                    <i className="icon-location-pin"></i>
                    <FontAwesomeIcon icon={faMapPin} color="#cca876" />
                    <div className="oceanwp-info-wrap">
                      <span className="oceanwp-contact-title">Address:</span>
                      <span className="oceanwp-contact-text">
                        Str. Kalina, Blagoevgrad, Bulgaria
                      </span>
                    </div>
                  </li>
                  <li className="email">
                    {/* <i className="icon-envelope"></i> */}
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      color="#cca876"
                      size="lg"
                    />
                    <div className="oceanwp-info-wrap">
                      <span className="oceanwp-contact-title">Email:</span>
                      <span className="oceanwp-contact-text">
                        <a href="mailto:bulgarian-honey@gmail.com">
                          bulgarian-honey@gmail.com
                        </a>
                      </span>
                    </div>
                  </li>
                </ul>
              </div>{" "}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterPage;
