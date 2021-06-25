import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { db } from "./Components/firebase";
import Navbar from "./Components/Navbar.jsx";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Components/Login.jsx";
import SignUp from "./Components/SignUp";
import { useAuth } from "./Context/AuthContext";
import PrivateRoute from "./Components/PrivateRoute";
import Home from "./Components/Home.jsx";
import AboutMe from "./Components/AboutMe.jsx";
import AboutAcademy from "./Components/AboutAcademy";
import Contents from "./Components/Contents";
import Javascript from "./Components/Javascript";
import ComponentNpm from "./Components/ComponentNpm.jsx";
import ComponentReact from "./Components/ComponentReact.jsx";
import Sass from "./Components/Sass";
import Babel from "./Components/Babel";
import Webpack from "./Components/Webpack";
import Lodash from "./Components/Lodash";
import Firebase from "./Components/Firebase.jsx";
import _ from "lodash";
const App = () => {
  const { hasFirebaseInitialized } = useAuth();
  const [users, setUsers] = useState([]);
  const [currentId, setCurrentId] = useState("");

  const addData = async (userData) => {
    const lowerEmail = _.toLower(userData.email);

    const usersTemp = [].concat(users);
    if (currentId === "") {
      const userRef = await db
        .collection("user")
        .add({ email: lowerEmail, password: userData.password });
      usersTemp.push({ id: userRef.id, ...userData });
      console.log(userRef.id);
      setUsers(usersTemp);
    } else {
      await db.collection("user").doc(currentId).update(userData);
      setUsers(
        users.map((user) => {
          if (currentId === user.id) {
            return {
              id: currentId,
              email: lowerEmail,
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
  const firebaseHasnotInitialized = !hasFirebaseInitialized;

  if (firebaseHasnotInitialized) {
    return (
      <div>
        <p>Loading</p>
      </div>
    );
  }
  return (
    <>
      <Navbar />
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}
      >
        <div className="w-100" style={{ maxWidth: "400px" }}>
          <Switch>
            <Route exact path="/" render={() => <Home />}></Route>
            <Route
              path="/login"
              render={() => (
                <Login addData={addData} currentId={currentId} users={users} />
              )}
            ></Route>
            <Route
              path="/signup"
              render={() => (
                <SignUp addData={addData} currentId={currentId} users={users} />
              )}
            ></Route>
            <Route
              path="/about-academy"
              render={() => <AboutAcademy />}
            ></Route>
            <Route path="/about-me" render={() => <AboutMe />}></Route>
            <PrivateRoute path="/javascript" render={() => <Javascript />} />
            <PrivateRoute path="/content" component={Contents} />
            <PrivateRoute path="/npm" component={ComponentNpm} />
            <PrivateRoute path="/react" component={ComponentReact} />
            <PrivateRoute path="/sass" component={Sass} />
            <PrivateRoute path="/babel" component={Babel} />
            <PrivateRoute path="/webpack" component={Webpack} />
            <PrivateRoute path="/firebase" component={Firebase} />
            <PrivateRoute path="/lodash" component={Lodash} />
          </Switch>
        </div>
      </Container>
    </>
  );
};
export default App;
