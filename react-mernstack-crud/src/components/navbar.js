import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

function Navbar() {

    return(
        <nav>
            <div>
                <ul>
                    <li><Link to="/">Home</Link></li>    
                    <li><Link to="/createstudent">Create Student</Link></li>
                    <li><Link to="/editstudent">Edit Student</Link></li>
                    <li><Link to="/students">Students List</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;