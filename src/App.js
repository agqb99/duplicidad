import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { db } from "./Components/firebase";
import Navbar from "./Components/Navbar.jsx";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Components/Login.jsx";
import SignUp from "./Components/SignUp";
import { AuthProvider } from "./Context/AuthContext";
import Prueba from "./Components/Prueba";
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
      setUsers(
        users.map((user) => {
          if (currentId === user.id) {
            return {
              id: currentId,
              email: userData.email,
              password: userData.password,
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
      <AuthProvider>
        <Container
          className="d-flex align-items-center justify-content-center"
          style={{ minHeight: "100vh" }}
        >
          <div className="w-100" style={{ maxWidth: "400px" }}>
            <Router>
              <Switch>
                <Route
                  exact
                  path="/"
                  render={() => (
                    <Login
                      addData={addData}
                      currentId={currentId}
                      users={users}
                    />
                  )}
                ></Route>
                <Route
                  path="/signup"
                  render={() => (
                    <SignUp
                      addData={addData}
                      currentId={currentId}
                      users={users}
                    />
                  )}
                ></Route>
                <Route path="/prueba" render={() => <Prueba />}></Route>
              </Switch>
            </Router>
          </div>
        </Container>
      </AuthProvider>
    </>
  );
};
export default App;
