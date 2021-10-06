import React, { Component } from "react";
import { Container, Form, Button, Card } from "react-bootstrap";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { userData: [], email: "", password: "" };
  }
  componentDidMount() {
    this.getData();
  }

  getData() {
    fetch("http://localhost:3000/restaurant").then((resp) => {
      resp.json().then((result) => {
        // var data = JSON.parse(result);
        this.setState({ userData: [...result] });
        console.log(this.state.userData);
      });
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.history.push("/list");
  }

  register(e) {
    e.preventDefault();
    this.props.history.push("/register");
  }

  handleEmailChange = (e) => {
    this.setState({ email: e.target.value });
  };

  handlePasswordChange = (e) => {
    this.setState({ password: e.target.value });
  };

  handleLogin = (e) => {
    e.preventDefault();
    var data = this.state.userData;
    console.log(data);
    const log = data.filter((user) => {
      return user.email === this.state.email;
    });
    if (log.length > 0) {
      this.props.history.push("/list");
    } else {
      console.log("error");
    }
  };
  render() {
    return (
      <>
        <Container className="mt-4">
          <Card className="p-4">
            <Form onSubmit={this.handleLogin}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  name="email"
                  onChange={this.handleEmailChange}
                />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  name="password"
                  onChange={this.handlePasswordChange}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
              <Button variant="primary" type="submit" style={{ margin: 20 }}>
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
