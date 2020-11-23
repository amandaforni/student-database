import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Navbar from './components/navbar';
import CreateStudent from './components/create-student';
import EditStudent from './components/edit-student';
import StudentList from './components/student-list';

function App(){
  return(
    <Router>
      <Navbar />

      <Switch>
          <Route exact path='/' component={CreateStudent} />
          <Route path='/createstudent' component={CreateStudent} />
          <Route path='/editstudent' component={EditStudent} />
          <Route path='/students' component={StudentList} />
      </Switch>

    </Router>
  )
}
