import React, { useState, useEffect } from "react";
// import { Button } from "react-bootstrap";
import { Container } from "react-bootstrap";
 import { db } from "./Components/firebase";
import Navbar from "./Components/Navbar.jsx";
// import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
 import Inicio from "./Components/Inicio.jsx";
import Login from "./Components/Login.jsx";
// import Registro from "./Components/Registro.jsx";
import Users from "./Components/Users.js"

const App = () => {
    const [users, setUsers] = useState([]);
  const [currentId, setCurrentId] = useState("");

    const addData = async (userData) => {
    const usersTemp = [].concat(users);
    if (currentId === "") {
      const userRef = await db.collection("user").add(userData);
      usersTemp.push({ id: userRef.id, ...userData });
      setUsers(usersTemp);
    } else {
      await db.collection("user").doc(currentId).update(userData);
      // console.log("user actualizado");
      setUsers(
        users.map((user) => {
          if (currentId == user.id) {
            // return user
            return {
              id: currentId,
              email: userData.email,
              password: userData.password,
              genero: userData.genero,
            };
          } else {
            return user;
          }
        })
      );
    }
    setCurrentId("");
  };
const deleteData = async (id) => {
    const usersTemp = [].concat(users);
    if (window.confirm("Eliminar usuario?")) {
      //console.log(id)
      await db.collection("user").doc(id).delete();
      console.log("user eliminado");
      setUsers(
        usersTemp.filter((user) => {
          return user.id !== id;
        })
      );
    }
  };
  const getData = async () => {
    const docs = [];
    await db
      .collection("user")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          docs.push({ ...doc.data(), id: doc.id });
        });
        setUsers(docs);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
       <Navbar />
      <br></br>
      <br></br>
      <br></br>
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}
      >
        <div className="w-100" style={{ maxWidth: "400px" }}>
          <Login addData={addData} currentId={currentId} users={users} /> 
        </div>
           <Users addData={addData} users={users} currentId={currentId} deleteData={deleteData} setCurrentId={setCurrentId}  />
        <div className="" style={{ maxWidth: "400px" }}>
           <Inicio/>
</div>

      </Container>
    </>
  );
}
export default  App;