import React  from "react";
import { BrowserRouter as Router,Routes,Route} from "react-router-dom"
import  "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbar-component";
import ExercisesList from "./components/exercise-list-component";
import EditExercise from "./components/edit-exercise-component";
import CreateExercise from "./components/create-exercise-component";
import CreateUser from "./components/create-user-component";

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar/>
        <br/>
        <Routes>
          <Route path="/" exact Component={ExercisesList}/>
          <Route path="/edit/:id"  Component={EditExercise}/>
          <Route path="/create" Component={CreateExercise}/>
          <Route path="/user" Component={CreateUser}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
