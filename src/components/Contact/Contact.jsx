import React, { useState } from "react";
import "./Contact.css";
import { Form, Button } from "react-bootstrap";
import emailjs from "emailjs-com";

export default function Contact() {
  const [emailState, setEmailState] = useState({
    from_name: "",
    email: "",
    message: "",
  });

  const [emailSend, setEmailSend] = useState(false);

  const handleChange = (e) => {
    setEmailState({ ...emailState, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_lpeyrff",
        "template_hpmfkld",
        e.target,
        "user_b5v4X1H8mOtjAGvXslimO"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    setEmailSend(true);
  };

  return (
    <>
    <div className="contact" id="contact" style={{ minHeight: "100vh" }}>
      <div className="contact-container">
        <span className="contact-me">Contact Me</span>
        <div className="form-contact-me">
          {emailSend ? (
            <h4 style={{ textAlign: "center" }} className="mt-5">
              Thank you for you message!
            </h4>
          ) : (
            <Form onSubmit={sendEmail}>
              <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  name="from_name"
                  placeholder="name"
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="example@domain.com"
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  name="message"
                  rows={5}
                  onChange={handleChange}
                />
              </Form.Group>

              <Button
                variant="primary"
                type="submit"
                className="mt-5 btn-block"
              >
                Send me an email
              </Button>
            </Form>
          )}
        </div>
      </div>
    </div>

    </>
  );
}
