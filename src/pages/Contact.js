import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { validateEmail, capitalizeFirstLetter } from "../utils/helpers";

function Contact() {
  const [errorMessage, setErrorMessage] = useState("");

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { name, email, message } = formState;

  function handleChange(evt) {
    if (evt.target.name === "email") {
      const isValid = validateEmail(evt.target.value);

      if (!isValid) {
        setErrorMessage("Please enter a valid email.");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!evt.target.value.length) {
        setErrorMessage(
          `${capitalizeFirstLetter(evt.target.name)} is required.`
        );
      } else {
        setErrorMessage("");
      }
    }

    if (!errorMessage) {
      setFormState({ ...formState, [evt.target.name]: evt.target.value });
    }
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    console.log(formState);
  }

  return (
    <Row>
      <Col sm={12} md={6}>
        <h1>Contact Me</h1>
      </Col>
      <Col sm={12} md={6}>
        <form id="contact-form" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="name"
              size="52"
              defaultValue={name}
              onBlur={handleChange}
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              size="52"
              defaultValue={email}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="message">Message:</label>
            <textarea
              name="message"
              cols="50"
              rows="10"
              defaultValue={message}
              onBlur={handleChange}
            />
          </div>
          {errorMessage && (
            <div>
              <p>{errorMessage}</p>
            </div>
          )}
          <button data-testid="submit-button" type="submit">
            Submit
          </button>
        </form>
      </Col>
    </Row>
  );
}

export default Contact;
