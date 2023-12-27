
import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import "./App.css";
import Home from "./Home";
import StudentsView from "./component/student/StudentsView";
import NavBar from "./component/common/NavBar";
import LoginForm from "./component/student/LoginForm";
import Main from "./Main.js";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import AddStudent from "./component/student/AddStudent";
import EditStudent from "./component/student/EditStudent";
import StudentProfile from "./component/student/StudentPofile";

function App() {
  return (
    <main className="container mt-5">
      <Router>
        
        <Routes>
          {/* <Route exact path="/" element={<Home />} /> */}
          <Route exact path="/" element={<Main   />} />
          <Route exact path="/view-students" element={<StudentsView />} />
          <Route exact path="/add-students" element={<AddStudent />} />
          <Route exact path="/edit-student/:id" element={<EditStudent />} />
          <Route exact path="/student-profile/:id" element={<StudentProfile />} />
          <Route exact path="/Login" element={<LoginForm />} />
        </Routes>
      </Router>
    </main>
  );
}

export default App;
