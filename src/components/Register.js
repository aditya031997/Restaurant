import React, { Component } from "react";
import { Container, Form, Button, Card } from "react-bootstrap";

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      email: null,
      location: null,
      rating: null,
      password: null,
    };
  }
  create() {
    fetch("http://localhost:3000/restaurant", {
      method: "Post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.state),
    }).then((resp) => {
      resp.json().then((result) => {
        // this.setState({ result });
        console.warn(result);
      });
    });
  }
  render() {
    return (
      <>
        <Container className="mt-4">
          <Card className="p-4">
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter name"
                  onChange={(e) => {
                    this.setState({ name: e.target.value });
                  }}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Location</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter email"
                  onChange={(e) => {
                    this.setState({ location: e.target.value });
                  }}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="enter location"
                  onChange={(e) => {
                    this.setState({ email: e.target.value });
                  }}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="enter password"
                  onChange={(e) => {
                    this.setState({ password: e.target.value });
                  }}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Rating</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="enter rating"
                  onChange={(e) => {
                    this.setState({ rating: e.target.value });
                  }}
                />
              </Form.Group>
              <Button
                variant="primary"
                type="submit"
                onClick={() => {
                  this.create();
                }}
              >
                Register
              </Button>
            </Form>
          </Card>
        </Container>
      </>
    );
  }
}
