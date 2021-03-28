import React, { useRef, useState } from "react";
import {Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Components/firebase.js";
import "./Components/Login.jsx";
import  "./App";

const Users = () => {
  return (
    <>
     <div className="w-100" style={{ maxWidth: "400px" }}>  {users.map((user) => (
    <div className="card-body">

<h4>{user.email}</h4>
          <p>{user.password}</p>
        </div>
        ))}
        </div>
 
       </>
  );
};

export default Users;

