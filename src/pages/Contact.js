// Package imports
import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import emailjs from "emailjs-com";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelopeSquare,
  faPhoneSquareAlt,
} from "@fortawesome/free-solid-svg-icons";

// Helper imports
import { validateEmail, capitalizeFirstLetter } from "../utils/helpers";

// Contact Page
function Contact() {
  // Sets up state for error and success messages
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
    setFormState({ ...formState, [evt.target.name]: evt.target.value });
  }

  // Validates the form inputs on blur
  function validateInput(evt) {
    // Validates email
    if (evt.target.name === "email") {
      const isValid = validateEmail(email);

      !isValid
        ? setErrorMessage("Please enter a valid email.")
        : setErrorMessage("");
    }

    // Validates name and message
    else {
      !evt.target.value.length
        ? setErrorMessage(
            `${capitalizeFirstLetter(evt.target.name)} is required.`
          )
        : setErrorMessage("");
    }
  }

  // Handles the form submission
  function handleSubmit(evt) {
    evt.preventDefault();

    emailjs
      .send(
        process.env.REACT_APP_EMAILJS_SERVICE,
        process.env.REACT_APP_EMAILJS_TEMPLATE,
        {
          from_name: name,
          from_email: email,
          message,
        },
        process.env.REACT_APP_EMAILJS_USER
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    // Displays success message for 3 seconds
    setSuccessMessage(true);

    setTimeout(function () {
      setSuccessMessage(false);
    }, 3000);

    // Clears the form data and form state
    document.querySelector("input[name=name]").value = "";
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
          Got a question, comment, concern, thought, or idea? Fill out the
          accompanying form and I'll get back to you as soon as possible.
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
              value={name}
              onChange={handleChange}
              onBlur={validateInput}
            />
          </Form.Group>

          {/* Email Input */}
          <Form.Group>
            <Form.Label>Email:</Form.Label>
            <Form.Control
              type="email"
              name="email"
              size="sm"
              value={email}
              onChange={handleChange}
              onBlur={validateInput}
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
              value={message}
              onChange={handleChange}
              onBlur={validateInput}
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
