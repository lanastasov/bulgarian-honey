import React, { Component } from "react";

class RequestForm extends Component {
  state = {
    data: { name: "", phone: "", email: "", textarea: "" },
    errors: {},
  };
  validate = () => {
    const errors = {};
    const { data } = this.state;
    if (data.name.trim() === "") {
      errors.name = "name is required";
    }
    if (data.phone.trim() === "") {
      errors.phone = "phone is required";
    }
    if (data.email.trim() === "") {
      errors.email = "email is required";
    }
    return Object.keys(errors).length === 0 ? null : errors;
  };
  handleSubmit = (e) => {
    e.preventDefault();

    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;

    // Call the server
    console.log("submitted");
  };
  validateProperty = ({ name, value }) => {
    if (name === "name") {
      if (value.trim() === "") return "Name is required!";
    }
    if (name === "phone") {
      if (value.trim() === "") return "Phone is required!";
    }
    if (name === "email") {
      if (value.trim() === "") return "Email is required!";
    }
  };

  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    const data = { ...this.state.data };
    data[input.name] = input.value;
    this.setState({ data, errors });
  };

  render() {
    const { data, errors } = this.state;

    return (
      <section className="container-section">
        <div className="elementor-container">
          <form className="row g-3" onSubmit={this.handleSubmit}>
            <h2 className="elementor-heading-title elementor-size-default">
              Request a quotation
            </h2>
            <div className="col-md-6">
              <label htmlFor="inputName" className="form-label">
                Name<b>*</b>
              </label>
              <input
                value={data.name}
                type="text"
                className="form-control"
                id="inputName"
                name="name"
                onChange={this.handleChange}
              />
              {errors.name && Object.keys(errors).length !== 0 && (
                <div className="alert alert-danger">{errors.name}</div>
              )}
            </div>
            <div className="col-md-6">
              <label htmlFor="inputCompany4" className="form-label">
                Company
              </label>
              <input type="text" className="form-control" id="inputCompany4" />
            </div>
            <div className="col-md-6">
              <label htmlFor="inputPhone" className="form-label">
                Phone<b>*</b>
              </label>
              <input
                value={data.phone}
                name="phone"
                type="tel"
                className="form-control"
                id="inputPhone"
                onChange={this.handleChange}
              />
              {errors.phone && Object.keys(errors).length !== 0 && (
                <div className="alert alert-danger">{errors.phone}</div>
              )}
            </div>
            <div className="col-md-6">
              <label htmlFor="inputEmail4" className="form-label">
                Email<b>*</b>
              </label>
              <input
                value={data.email}
                name="email"
                type="email"
                className="form-control"
                id="inputEmail4"
                onChange={this.handleChange}
              />
              {errors.email && Object.keys(errors).length !== 0 && (
                <div className="alert alert-danger">{errors.email}</div>
              )}
            </div>
            <div className="col-md-12">
              <label htmlFor="inlineCheckbox1" className="form-label">
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
                <label className="form-check-label" htmlFor="inlineCheckbox1">
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
                <label className="form-check-label" htmlFor="inlineCheckbox2">
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
                <label className="form-check-label" htmlFor="inlineCheckbox3">
                  Linden
                </label>
              </div>
            </div>
            <div className="col-md-6">
              <label htmlFor="inputQuantity" className="form-label">
                Quantity
                <br />
                <small>in MT (metric tons) or KG (please specify)</small>
              </label>
              <input type="text" className="form-control" id="inputQuantity" />
            </div>
            <div className="col-md-6">
              <label htmlFor="gridRadios1" className="form-label">
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
                  />
                  <label className="form-check-label" htmlFor="gridRadios1">
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
                  <label className="form-check-label" htmlFor="gridRadios2">
                    Organic
                  </label>
                </div>
              </div>
            </div>

            <div className="mb-3">
              <label
                htmlFor="exampleFormControlTextarea1"
                className="form-label"
              >
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
                <label className="form-check-label" htmlFor="gridCheck">
                  GDPR Acceptance
                  <b>*</b>
                </label>
                <br />
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="gridCheck"
                />
                <label className="form-check-label" htmlFor="gridCheck">
                  <small>
                    I agree that this site maintains the information sent so
                    that they can respond to my request
                  </small>
                </label>
              </div>
            </div>
            <div className="col-12">
              <button type="submit" className="btn btn-primary message">
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