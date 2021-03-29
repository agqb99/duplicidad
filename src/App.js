import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import Login from "./Components/Login.jsx";
import { Container } from "react-bootstrap";
import Navbar from "./Components/Navbar.jsx";
import { db } from "./Components/firebase";
function App() {
  const [users, setUsers] = useState([]);
  const [currentId, setCurrentId] = useState("");

  const addData = async (userData) => {
    const usersTemp = [].concat(users);
    if(currentId === "") {
  const userRef = await db.collection("user").add(userData);
  usersTemp.push({id:userRef.id,...userData } )
  setUsers(usersTemp)
 // console.log(userRef);
  } else {
    await db.collection("user").doc(currentId).update(userData);
    console.log("user actualizado");
    }  setCurrentId("");
  }

   const getData = async () => {
    const docs = [];
      db.collection("user").where('genero', '==','femenino').onSnapshot((querySnapshot) => {
      querySnapshot.forEach(doc => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      //   db.collection("user").where('genero', '==','femenino').get().then((snapshot) => {
      // snapshot.docs.forEach(doc => {
      //   docs.push({ ...doc.data(), id: doc.id });
      // });
      //console.log(docs)
      setUsers(docs);
    });
  };
  const deleteData = async (id) => {
    const usersTemp = [].concat(users);
    if (window.confirm("Eliminar usuario?")) { //console.log(id)
      await db.collection("user").doc(id).delete();
      console.log("user eliminado");
      setUsers(usersTemp.filter(user=>{
        return user.id !== id;
      }
      )
      )
    }
  };
  useEffect(() => {
    getData()
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
        <div className="w-100" style={{ maxWidth: "400px" }}>
          {users.map((user) => (
            <div className="card mb-1 ml-4 mt-2" key={user.id}>
              <h3></h3>
              <div className="card-body">
                <div className=""> <h4>email: {user.email}</h4>
                  <h4>password: {user.password}</h4> <h4>genero: {user.genero}</h4></div>
                <Button variant="danger" size="lg" block type="submit" onClick={() => deleteData(user.id)}>
                  Delete
            </Button>
                <Button variant="warning" size="lg" block type="submit" onClick={() => setCurrentId(user.id)}>
                  Edit
            </Button>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </>
  );
}
export default App;

const sum = (a,b) => a<b
sum(1,2);