import React, { Component } from "react";
import { Container, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./style.css";
export default class List extends Component {
  constructor() {
    super();
    this.state = {
      list: null,
    };
  }
  componentDidMount() {
    fetch("http://localhost:3000/restaurant").then((resp) => {
      resp.json().then((result) => {
        this.setState({ list: result });
      });
    });
  }
  render() {
    console.warn(this.state);
    return (
      <div>
        <Container>
          <h1 style={{ textAlign: "center" }}>Restaurant list</h1>
          <Link to="/create">Add</Link>

          {this.state.list ? (
            <div>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Location</th>
                    <th>Rating</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.list.map((item, i) => (
                    <tr>
                      <td>{item.id}</td>
                      <td>{item.name}</td>
                      <td>{item.email}</td>
                      <td>{item.location}</td>
                      <td>{item.rating}</td>
                      <td>
                        <Link to="/edit">Edit</Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          ) : (
            <p>Please wait....</p>
          )}
        </Container>
      </div>
    );
  }
}
