import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelopeSquare,
  faPhoneSquareAlt,
} from "@fortawesome/free-solid-svg-icons";

import { validateEmail, capitalizeFirstLetter } from "../utils/helpers";

function Contact() {
  // Tracks any errors/successful form submits in contact form
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState(false);

  // Tracks the values of the contact form
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { name, email, message } = formState;

  // Handles any changes made to the contact form inputs
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

  // Handles the form submission
  function handleSubmit(evt) {
    evt.preventDefault();
    console.log(formState);

    // Displays success message
    setSuccessMessage(true);
    setTimeout(function () {
      setSuccessMessage(false);
    }, 3000);

    // Clears the form data and form state
    document.querySelector(`input[name=name]`).value = "";
    document.querySelector("input[name=email]").value = "";
    document.querySelector("textarea[name=message]").value = "";

    setFormState({
      name: "",
      email: "",
      message: "",
    });
  }

  return (
    <Row>
      {/* Title */}
      <Col sm="12" md="4">
        <h3 className="title">Keep in Touch!</h3>
        <p>
          Got a question, comment, or concern? Fill out the accompanying form
          and I'll get back to you as soon as possible.
          <br />
          <br />
          If your business demands a more timely response, reach out via email
          or give me a call by clicking the icons below.
        </p>
        <div className="contact-icons">
          <a href="mailto:merchantclogan@gmail.com">
            <FontAwesomeIcon icon={faEnvelopeSquare} size="2x" />
          </a>{" "}
          <a href="tel:801-554-2378">
            <FontAwesomeIcon icon={faPhoneSquareAlt} size="2x" />
          </a>
        </div>
      </Col>

      {/* Form */}
      <Col sm="12" md="8">
        <Form onSubmit={handleSubmit}>
          {/* Name Input */}
          <Form.Group controlId="contact-form">
            <Form.Label>Name:</Form.Label>
            <Form.Control
              type="text"
              name="name"
              size="sm"
              defaultValue={name}
              onChange={handleChange}
            />
          </Form.Group>

          {/* Email Input */}
          <Form.Group>
            <Form.Label>Email:</Form.Label>
            <Form.Control
              type="email"
              name="email"
              size="sm"
              defaultValue={email}
              onChange={handleChange}
            />
          </Form.Group>

          {/* Message Input */}
          <Form.Group>
            <Form.Label>Message:</Form.Label>
            <Form.Control
              as="textarea"
              name="message"
              rows="8"
              size="sm"
              defaultValue={message}
              onChange={handleChange}
            />
          </Form.Group>

          <div className="submit-btn">
            {/* Shows an error message if there is one */}
            {errorMessage && <h4>{errorMessage}</h4>}

            {/* Displays the submit button only if all fields are filled */}
            {name && email && message && !errorMessage ? (
              <Button variant="light" type="submit">
                Submit!
              </Button>
            ) : null}

            {/* Shows a success message if there is one */}
            {successMessage && <h4>Submitted!</h4>}
          </div>
        </Form>
      </Col>
    </Row>
  );
}

export default Contact;
