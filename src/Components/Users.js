import React from "react";
import { Button } from "react-bootstrap";
import { Container } from "react-bootstrap";

const Users = (props) => {
  return (
    <>
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}
      >
        <div className="w-100" style={{ maxWidth: "400px" }}>
          {props.users.map((user) => (
            <div className="card mb-1 ml-4 mt-2" key={user.id}>
              <h3></h3>
              <div className="card-body">
                <div className="">
                  {" "}
                  <h4>email: {user.email}</h4>
                  <h4>password: {user.password}</h4>{" "}
                </div>
                <Button
                  variant="danger"
                  size="lg"
                  block
                  type="submit"
                  onClick={() => props.deleteData(user.id)}
                >
                  Delete
                </Button>
                <Button
                  variant="warning"
                  size="lg"
                  block
                  type="submit"
                  onClick={() => props.setCurrentId(user.id)}
                >
                  Edit
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </>
  );
};
export default Users;
