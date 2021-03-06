import React, { Component } from "react";
import Joi from "joi-browser";
import { send } from "emailjs-com";

// https://dev.to/daliboru/how-to-send-emails-from-a-form-in-react-emailjs-27d1

// validation of email and phone and name with joi
// navbar links to open the pages.
// set state of the other inputs
// on submit form sends email with the fields
// implement footer
class RequestForm extends Component {
  state = {
    data: {
      name: "",
      phone: "",
      email: "",
      gdpr: false,
      company: "",
      acacia: false,
      polyflora: false,
      linden: false,
      qty: "",
      message: "",
      conventional: false,
      organic: false,
    },
    errors: {},
    submitErr: "",
  };

  schema = {
    name: Joi.string().min(2).required(),
    phone: Joi.string()
      .length(13)
      .regex(/^\+[0-9]+$/),
    email: Joi.string().email({ tlds: { allow: false } }),
    gdpr: Joi.boolean().invalid("true"),
    company: Joi.string().allow(""),
    acacia: Joi.boolean(),
    polyflora: Joi.boolean(),
    linden: Joi.boolean(),
    qty: Joi.string().allow(""),
    message: Joi.string().allow(""),
    conventional: Joi.boolean(),
    organic: Joi.boolean(),
  };

  validate = () => {
    const options = { abortEarly: false };
    const result = Joi.validate(this.state.data, this.schema, options);
    if (!result.error) return null;
    const errors = {};

    for (let item of result.error.details) errors[item.path[0]] = item.message;
    return errors;
  };
  handleSubmit = (e) => {
    e.preventDefault();

    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;

    // Call the server
    console.log("submitted");
    send(
      "service_czbzquo",
      "template_atlx08p",
      this.state.data,
      "user_sYxYO2N1sElC2Qr7d3ida"
    )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        this.setState({ submitErr: "false" });
      })
      .catch((err) => {
        console.log("FAILED...", err);
        this.setState({ submitErr: "true" });
      });
  };
  validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, schema);
    return error ? error.details[0].message : null;
  };

  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    const data = { ...this.state.data };
    data[input.name] = input.value;
    // data.gdpr = input.checked;
    // if (input.name === "gdpr") {
    data["gdpr"] = input.checked;
    // }

    this.setState({ data, errors });
  };

  render() {
    const { data, errors } = this.state;

    return (
      <section id="contact-us" className="container-section">
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
                value={data.name || ""}
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
                  name="acacia"
                  type="checkbox"
                  id="inlineCheckbox1"
                  value={data.acacia}
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
              <input
                type="text"
                name="qty"
                className="form-control"
                id="inputQuantity"
                value={data.qty || ""}
                onChange={this.handleChange}
              />
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
                name="message"
                id="exampleFormControlTextarea1"
                rows="8"
                value={data.message || ""}
                onChange={this.handleChange}
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
                  value={data.gdpr}
                  className="form-check-input"
                  type="checkbox"
                  id="gridCheck"
                  onChange={this.handleChange}
                  checked={data.gdpr}
                  name="gdpr"
                />
                <label className="form-check-label" htmlFor="gridCheck">
                  <small>
                    I agree that this site maintains the information sent so
                    that they can respond to my request
                  </small>
                </label>
                {errors.gdpr && Object.keys(errors).length !== 0 && (
                  <div className="alert alert-danger">{errors.gdpr}</div>
                )}
              </div>
            </div>
            <div className="col-12">
              <button
                // disabled={this.validate()}
                type="submit"
                className="btn btn-primary message"
              >
                SEND
              </button>
              {this.state.submitErr === "true" && (
                <div className="alert alert-danger">
                  {"Message Was Not Send"}
                </div>
              )}
              {this.state.submitErr === "false" && (
                <div className="alert alert-success">
                  {"Message Submitted Successfully"}
                </div>
              )}
            </div>
          </form>
        </div>
      </section>
    );
  }
}

export default RequestForm;
