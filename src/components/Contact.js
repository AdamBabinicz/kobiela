import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./contact.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [inputvalue, setInputvalue] = useState({
    fname: "",
    lname: "",
    email: "",
    mobile: "",
    message: "",
  });

  const getvalue = (e) => {
    const { name, value } = e.target;
    setInputvalue(() => {
      return {
        ...inputvalue,
        [name]: value,
      };
    });
  };

  const sentUserdata = async (e) => {
    e.preventDefault();

    const { fname, lname, email, mobile, message } = inputvalue;
    if (fname == "") {
      toast.error("Imię jest wymagane");
    } else if (lname == "") {
      toast.error("Nazwisko jest wymagane");
    } else if (email == "") {
      toast.error("Email jest wymagany");
    } else if (!email.includes("@")) {
      toast.error("Niepoprawny email");
    } else if (mobile == "") {
      toast.error("Telefon jest wymagany");
    } else {
      const res = await fetch("http://localhost:6002/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fname,
          lname,
          email,
          mobile,
          message,
        }),
      });
      const data = await res.json();

      if (data.status == 201) {
        toast.success("Twoja wiadomość została przesłana");
        setInputvalue({
          ...inputvalue,
          fname: "",
          lname: "",
          email: "",
          mobile: "",
          message: "",
        });
      }
    }
  };

  return (
    <>
      <div className="container mb-3 contact">
        <h2 className="text-center">Kontakt</h2>
        <div className="container mt-2">
          <Form className="row mt-2">
            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
              <Form.Label>Imię</Form.Label>
              <Form.Control
                type="text"
                name="fname"
                value={inputvalue.fname}
                onChange={getvalue}
              />
            </Form.Group>
            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
              <Form.Label>Nazwisko</Form.Label>
              <Form.Control
                type="text"
                name="lname"
                value={inputvalue.lname}
                onChange={getvalue}
              />
            </Form.Group>
            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={inputvalue.email}
                onChange={getvalue}
              />
            </Form.Group>
            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
              <Form.Label>Telefon</Form.Label>
              <Form.Control
                type="text"
                name="mobile"
                value={inputvalue.mobile}
                onChange={getvalue}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Wiadomość</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                onChange={getvalue}
                value={inputvalue.message}
                name="message"
              />
            </Form.Group>
            <div className="d-flex justify-content-center">
              <Button
                variant="primary"
                className="col-lg-6"
                type="submit"
                onClick={sentUserdata}
              >
                Wyślij
              </Button>
            </div>
          </Form>
          <ToastContainer />
        </div>
      </div>
    </>
  );
};

export default Contact;
