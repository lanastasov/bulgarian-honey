import React, { Component } from "react";

class RequestForm extends Component {
  state = {
    data: { username: "", password: "" },
    errors: {},
  };

  render() {
    const { data, errors } = this.state;

    return (
      <section className="container-section">
        <div className="elementor-container">
          <form className="row g-3">
            <h2 class="elementor-heading-title elementor-size-default">
              Request a quotation
            </h2>
            <div className="col-md-6">
              <label for="inputName" className="form-label">
                Name<b>*</b>
              </label>
              <input type="text" className="form-control" id="inputName" />
            </div>
            <div className="col-md-6">
              <label for="inputCompany4" className="form-label">
                Company
              </label>
              <input type="text" className="form-control" id="inputCompany4" />
            </div>
            <div className="col-md-6">
              <label for="inputPhone" className="form-label">
                Phone<b>*</b>
              </label>
              <input type="tel" className="form-control" id="inputPhone" />
            </div>
            <div className="col-md-6">
              <label for="inputEmail4" className="form-label">
                Email<b>*</b>
              </label>
              <input type="email" className="form-control" id="inputEmail4" />
            </div>
            <div className="col-md-12">
              <label for="inlineCheckbox1" className="form-label">
                Sort of interest
              </label>
              <br />
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="inlineCheckbox1"
                  value="option1"
                />
                <label className="form-check-label" for="inlineCheckbox1">
                  Acacia
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="inlineCheckbox2"
                  value="option2"
                />
                <label className="form-check-label" for="inlineCheckbox2">
                  Polyflora
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="inlineCheckbox3"
                  value="option3"
                />
                <label className="form-check-label" for="inlineCheckbox3">
                  Linden
                </label>
              </div>
            </div>
            <div className="col-md-6">
              <label for="inputQuantity" className="form-label">
                Quantity
                <br />
                <small>in MT (metric tons) or KG (please specify)</small>
              </label>
              <input type="text" className="form-control" id="inputQuantity" />
            </div>
            <div className="col-md-6">
              <label for="gridRadios1" className="form-label">
                Conventional or Organic Honey
              </label>
              <div className="col-sm-10">
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="gridRadios"
                    id="gridRadios1"
                    value="option1"
                    checked
                  />
                  <label className="form-check-label" for="gridRadios1">
                    Conventional
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="gridRadios"
                    id="gridRadios2"
                    value="option2"
                  />
                  <label className="form-check-label" for="gridRadios2">
                    Organic
                  </label>
                </div>
              </div>
            </div>

            <div className="mb-3">
              <label for="exampleFormControlTextarea1" className="form-label">
                Message
              </label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="8"
              ></textarea>
            </div>

            <div className="col-12">
              <div className="form-check">
                <label className="form-check-label" for="gridCheck">
                  GDPR Acceptance
                  <b>*</b>
                </label>
                <br />
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="gridCheck"
                />
                <label className="form-check-label" for="gridCheck">
                  <small>
                    I agree that this site maintains the information sent so
                    that they can respond to my request
                  </small>
                </label>
              </div>
            </div>
            <div className="col-12">
              <button type="submit" className="btn btn-primary">
                SEND
              </button>
            </div>
          </form>
        </div>
      </section>
    );
  }
}

export default RequestForm;
