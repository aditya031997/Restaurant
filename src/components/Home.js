import React, { Component } from "react";
import { Container, Form, Button, Card } from "react-bootstrap";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.history.push("/list");
  }

  register(e) {
    e.preventDefault();
    this.props.history.push("/register");
  }
  render() {
    return (
      <>
        <Container className="mt-4">
          <Card className="p-4">
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
              <Button
                variant="primary"
                type="submit"
                style={{ margin: 20 }}
                onClick={this.handleSubmit.bind(this)}
              >
                Login
              </Button>
              <Button variant="primary" type="submit" onClick={this.register.bind(this)}>
                Register
              </Button>
            </Form>
          </Card>
        </Container>
      </>
    );
  }
}
