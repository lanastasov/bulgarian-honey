import React from "react";
import offersPageSVG from "../img/offersPage.svg";

const LocationPage = () => {
  return (
    <section className="container-section location-page">
      <div className="container-shape">
        <img src={offersPageSVG} alt="" />
      </div>
      <div className="elementor-container elementor-column-gap-default">
        <div className="elementor-row">
          <div
            className="elementor-element elementor-element-1q3gbvs elementor-column elementor-col-100 elementor-top-column"
            data-id="1q3gbvs"
            data-element_type="column"
          >
            <div className="elementor-column-wrap-location-page">
              <div className="elementor-widget-wrap">
                <div
                  className="elementor-element elementor-element-wqud3ax elementor-widget elementor-widget-heading"
                  data-id="wqud3ax"
                  data-element_type="widget"
                  data-widget_type="heading.default"
                >
                  <div className="widget-container-location">
                    <h2 className="elementor-heading-title elementor-size-default">
                      Location
                    </h2>{" "}
                  </div>
                </div>
                <div
                  className="elementor-element elementor-element-pyz4xvo elementor-widget elementor-widget-text-editor"
                  data-id="pyz4xvo"
                  data-element_type="widget"
                  data-widget_type="text-editor.default"
                >
                  <div className="elementor-widget-container">
                    <div className="elementor-text-editor-left elementor-clearfix">
                      <div>
                        Our company is situated in the Romanian region of&nbsp;
                        <b>Wallachia</b>&nbsp;(Southern Romania), a place
                        traditionally devoted to the&nbsp;
                        <b>honey production</b>, thanks to the presence of
                        <b>&nbsp;high mountain lawns</b>&nbsp;and native&nbsp;
                        <b>acacia&nbsp;</b>trees.&nbsp;
                      </div>
                      <div>&nbsp;</div>
                      <div>
                        There are in fact acacia forests spread over large
                        areas. Because bees are flying for their collection at a
                        distance of no more than 5 km, that’s the reason why
                        there are areas so ample available to the bees,
                        generating a&nbsp;<b>special</b>,&nbsp;
                        <b>high purity</b>&nbsp;honey product.
                      </div>
                      <div>&nbsp;</div>
                      <div>
                        <div>
                          But there is not only the product of acacia to be of
                          great quality, and also&nbsp;<b>rape&nbsp;</b>
                          and&nbsp;<b>sunflower&nbsp;</b>are also over large
                          areas, so the collection made by bees typically
                          pastoral generates again a honey of great purity.
                        </div>
                        <div>&nbsp;</div>
                        <div>
                          Reaching us is very simple: we are located in{" "}
                          <a
                            href="https://maps.google.ro/maps?hl=it&amp;q=ploiesti&amp;ie=UTF-8&amp;hq=&amp;hnear=0x40b249f6a8d6eff7:0xb3fe6965e659119,Ploie%C8%99ti&amp;gl=ro&amp;ei=O0V2UJH5A5KHswby04C4AQ&amp;sqi=2&amp;ved=0CBwQ8gEwAA"
                            target="_blank"
                            rel="noopener"
                          >
                            Ploiesti
                          </a>
                          , not far from Bucharest, about 30 km away from the{" "}
                          <a
                            href="http://www.bucharestairports.ro/index.php?lang=en"
                            target="_blank"
                            rel="nofollow noopener"
                          >
                            Otopeni International Airport (Henri Coanda)
                          </a>
                          .
                        </div>
                      </div>
                      <div>&nbsp;</div>
                      <div>
                        All our references are found in the&nbsp;
                        <a href="#contact-us">contacts area</a>.
                      </div>
                      <div>&nbsp;</div>
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

export default LocationPage;