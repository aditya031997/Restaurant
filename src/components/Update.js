import React, { Component } from "react";
import { Container, Form, Button, Card } from "react-bootstrap";
export default class Update extends Component {
  constructor() {
    super();
    this.state = {
      name: null,
      email: null,
      location: null,
      rating: null,
      id: null,
    };
  }
  componentDidMount() {
    fetch("http://localhost:3000/restaurant/" + this.props.match.params.id).then((resp) => {
      resp.json().then((result) => {
        console.warn(result);
        this.setState({
          name: result.name,
          email: result.email,
          location: result.location,
          rating: result.rating,
          id: result.id,
        });
      });
    });
  }
  update() {
    fetch("http://localhost:3000/restaurant/" + this.state.id, {
      method: "Put",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.state),
    }).then((resp) => {
      resp.json().then((result) => {
        // this.setState({ result });
        alert("updated");
      });
    });
  }
  render() {
    console.warn(this.state);
    return (
      <div>
        <h1>Restaurant Update</h1>
        <Container className="mt-4">
          <Card className="p-4">
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter name"
                  value={this.state.name}
                  onChange={(e) => {
                    this.setState({ name: e.target.value });
                  }}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Location</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Location"
                  value={this.state.location}
                  onChange={(e) => {
                    this.setState({ location: e.target.value });
                  }}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="enter email"
                  value={this.state.email}
                  onChange={(e) => {
                    this.setState({ email: e.target.value });
                  }}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Rating</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="enter rating"
                  value={this.state.rating}
                  onChange={(e) => {
                    this.setState({ rating: e.target.value });
                  }}
                />
              </Form.Group>
              <Button
                variant="primary"
                type="submit"
                onClick={() => {
                  this.update();
                }}
              >
                Update
              </Button>
            </Form>
          </Card>
        </Container>
      </div>
    );
  }
}
