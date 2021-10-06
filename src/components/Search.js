import React, { Component } from "react";
import { Container, Card, Form } from "react-bootstrap";
export default class Search extends Component {
  state = {
    searchData: null,
    noData: false,
  };
  search(e) {
    console.log(e);
    fetch("http://localhost:3000/restaurant?q=" + e).then((resp) => {
      resp.json().then((result) => {
        console.log(result);
        if (result.length > 0) {
          this.setState({ searchData: result, noData: false });
        } else {
          this.setState({ noData: true, searchData: null });
        }
      });
    });
  }
  render() {
    return (
      <div>
        <h1 style={{ textAlign: "center" }}>Restaurant Search</h1>
        <Container className="mt-4">
          <Card className="p-4">
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Restautant Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter name "
                  onChange={(e) => this.search(e.target.value)}
                />
              </Form.Group>
              {/* <Button>Search</Button> */}
            </Form>
          </Card>
        </Container>
        <div>
          {this.state.searchData ? (
            <div>
              {this.state.searchData.map((item, i) => (
                <div key={i}>{item.name}</div>
              ))}
            </div>
          ) : (
            ""
          )}
          {this.state.noData ? <h3>No Data Found</h3> : null}
        </div>
      </div>
    );
  }
}
