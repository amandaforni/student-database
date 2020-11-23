import React, { Component } from 'react';

function CreateStudent() {

        return(
            <div>
                <h1>Enter Student Details</h1>
                <br/>
                <form onSubmit={sendDataToExpress} classname="createform">
                <label htmlFor="name">Name:</label>
                <input type="name" name="name" autoComplete="off" value={name} id="name" className="formInput" onChange={handleChange}></input>

                <label htmlFor="email">Email:</label>
                <input type="email" name="email" autoComplete="off" value={email} id="email" className="formInput" onChange={handleChange}></input>

                <label htmlFor="course">Course:</label>
                <input type="course" name="course" autoComplete="off" value={course} id="course" className="formInput" onChange={handleChange}></input>

                <label htmlFor="birthYear">Birth year:</label>
                <input type="birthYear" name="birthYeah" autoComplete="off" value={birthYear} id="birthYear" className="formInput" onChange={handleChange}></input>

                <input type="submit" name="submit" className="formSubmit"></input>
                </form>
            </div>
        );
    }

export default CreateStudent;