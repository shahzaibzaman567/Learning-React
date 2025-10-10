import React, { useState } from "react";
import "./registration.css"
import { Routes, Route, useParams, NavLink, Link } from 'react-router-dom';

function Registration() {

    let [users, setUsers] = useState([])

    let [user, setUser] = useState({
        name: "",
        email: "",
        password: ""
    });

console.log(user);

    let Register = () => {


        let arrayOfstudent = users
             arrayOfstudent.push({ user })
        setUsers(arrayOfstudent);

        console.log("Aba chal");
return        localStorage.setItem("userData", JSON.stringify(users));
    }



    return (
        <>
            <div className="head_div">

                <div className="register_div">

    <form  method="get" className="register_form" onSubmit={(e) => {
                        e.preventDefault()
                        Register()

                    }}>

                        <label htmlFor="name">Name:</label>
                        <input type="text" required id="name"
                            value={user.name}
                            onChange={(e) => {
                                setUser({ ...user, name: e.target.value })
                            }}
                        />
                        {
                            console.log(user)
                        }

                        {/* {console.log(user)} */}
                        <label htmlFor="email">Email:</label>

                        <input type="email" required id="email"
                            value={user.email}
                            onChange={(e) => {
                                setUser({ ...user, email: e.target.value })
                            }}
                        />
                        <label htmlFor="password">Password:</label>

                        <input type="password" required id="password"
                            value={user.password}
                            onChange={(e) => {
                                setUser({ ...user, password: e.target.value })
                            }}
                        />

                      <input type="submit" id="btn" />
                    </form>                 
                
                </div>

            </div>

        </>
    )
}


export default Registration;




   