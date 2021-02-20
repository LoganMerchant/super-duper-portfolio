import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { validateEmail, capitalizeFirstLetter } from "../utils/helpers";

function Contact() {
  // Tracks any errors in contact form
  const [errorMessage, setErrorMessage] = useState("");

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
  }

  return (
    <Row>
      {/* Title */}
      <Col sm={12} md={6}>
        <h3>Contact Me</h3>
      </Col>

      {/* Form */}
      <Col sm={12} md={6}>
        <Form onSubmit={handleSubmit}>
          {/* Name Input */}
          <Form.Group controlId="name">
            <Form.Label>Name:</Form.Label>
            <Form.Control
              type="text"
              name="name"
              size="sm"
              defaultValue={name}
              onBlur={handleChange}
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
              onBlur={handleChange}
            />
          </Form.Group>

          {/* Shows an error message if there is one */}
          {errorMessage && <p>{errorMessage}</p>}

          {/* Displays the submit button only if all fields are filled */}
          {name && email && message ? (
            <Button variant="light" type="submit">
              Submit!
            </Button>
          ) : null}
        </Form>
      </Col>
    </Row>
  );
}

export default Contact;
