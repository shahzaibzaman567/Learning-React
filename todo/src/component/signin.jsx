import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import {LoginContext} from "./context/contextlogin.jsx"
import "./signin.css"

export function Signin() {

    let navigate = useNavigate();
    let login = LoginContext() ;
    console.log(login)
    let [Err, setErr] = useState(false);

    let [state, setstate] = useState({

        email: "",
        password: "",
    })
    function handlerSubmit() {

        let saveUser = JSON.parse(localStorage.getItem("users"));
        //incomplete function 
        let findP = saveUser.find((user) => state.password === user.password);
        let findE = saveUser.find((user) => state.email === user.email);

        console.log(findE, findP)
        if (findP && findE) {
            
            login.setLogin(true)
            login.setName(findE.name)
            
            navigate("/home")

        } else {
            console.log("bay");
            setErr(true);
        }


    }

    return (
        <>
            <div className="login-head">
                <div className="container  col-xl-3 col-md-5 col-sm-6 col-9 d-flex justify-content-center align-items-center flex-column ">

                    <form className="card w-100 p-4 d-flex flex-column gap-2 login-form"  onSubmit={(e) => {
                        e.preventDefault()
                        handlerSubmit();
                    }}>
                        <h2 className="pb-3 text-center text-white heading" >Login</h2>


                        <div className="mb-1">

                            <label htmlFor="email" className="label text-white  " >Email address</label>
                            <input
                                type="email"
                                className={`form-control ${Err ? "is-invalid" : ""}`}
                                id="email"
                                name="email"
                                required
                                aria-describedby="emailHelp"
                                value={state.email}
                                onChange={(e) => {
                                    setstate({ ...state, email: e.target.value })
                                }}
                            />
                        </div>

                        <div className="mb-1">
                            <label htmlFor="password" className="orm-label  text-white pasword">Password</label>
                            <input
                                type="password"
                                className={`form-control ${Err ? "is-invalid" : ""}`}
                                id="password"
                                name="da"
                                required
                                value={state.password}
                                onChange={(e) => {
                                    setstate({ ...state, password: e.target.value })
                                }}
                            />
                        </div>

                               
                        <button type="submit" className="btn  text-white  w-100 login">Login</button>
                        <Link to={"/"}><button type="submit" className="btn mt-2 w-100  text-white   registration"
                       >register</button></Link>

                    </form>
                </div>

            </div>

        </>
    )


}