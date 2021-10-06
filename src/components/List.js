import React, { Component } from "react";
import { Container, Table } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
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
    this.getData();
  }
  getData() {
    fetch("http://localhost:3000/restaurant").then((resp) => {
      resp.json().then((result) => {
        this.setState({ list: result });
      });
    });
  }

  delete(id) {
    fetch("http://localhost:3000/restaurant/" + id, {
      method: "DELETE",
      // headers: {
      //   "Content-Type": "application/json",
      // },
      // body: JSON.stringify(this.state),
    }).then((resp) => {
      resp.json().then((result) => {
        alert("Deleted");
        this.getData();
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
                        <Link to={"/update/" + item.id}>
                          <FontAwesomeIcon icon={faEdit} />
                        </Link>
                        <span onClick={() => this.delete(item.id)}>
                          <FontAwesomeIcon icon={faTrash} />
                        </span>
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
