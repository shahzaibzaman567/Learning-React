import { useEffect, useState } from "react"
import "./signup.css"
import { Link,useNavigate } from "react-router-dom"


export function Signup() {

    let [localdata, setlocalData] = useState(JSON.parse(localStorage.getItem("users")) || []);
    let navigate=useNavigate();      

    let [Err, setErr] = useState(false);

    let [state, setstate] = useState({
        name: "",
        email: "",
        password: "",

    })
    function User(name, email, password) {
        
        let localUser = JSON.parse(localStorage.getItem("users")) || []
        
        let founder = localUser.find((user) => user.email === state.email)

        if (founder) {
            console.log("email ya password same ha")

            return setErr(true);
        }

        console.log("bahi sab koch sahi ha !")
        let user = [...localdata]
        user.push({
            name: name,
            email: email,
            password: password,
        })
        
        setErr(false)
        setlocalData(user)
        navigate("/signin")

    }
    useEffect(() => {
        localStorage.setItem("users", JSON.stringify(localdata))
    }, [localdata])



    return (
        <>
            <div className="login-head">
                <div className="container   col-xl-3 col-md-5 col-sm-6 col-9  d-flex justify-content-center align-items-center flex-column ">

                    <form className="card w-100 p-4 d-flex flex-column gap-2 " onSubmit={(e) => {
                        e.preventDefault()
                        User(state.name, state.email, state.password)

                    }}>
                        <h2 className="pb-3 text-center">Signup</h2>
                        <div className="mb-1">
                            <label htmlFor="Name" className="form-label">Name</label>
                            <input
                                type="text"
                                className={`form-control ${Err.email ? "is-invalid" : ""
                                    }`}
                                id="Name"
                                name="name"
                                required
                                value={state.name}
                                onChange={(e) => {
                                    setstate({ ...state, name: e.target.value })
                                }}
                            />
                        </div>

                        <div className="mb-1">

                            <label htmlFor="email" className="label">Email address</label>
                            <input
                                type="email"
                                className={`form-control ${Err ? " is-invalid" : ""
                                    }`}
                                id="email"
                                name="email"
                                aria-describedby="emailHelp"
                                value={state.email}
                                required
                                onChange={(e) => {
                                    setstate({ ...state, email: e.target.value })
                                }}
                            />
                        </div>

                        <div className="mb-1">
                            <label htmlFor="password" className="orm-label">Password</label>
                            <input
                                type="password"
                                className={`form-control `}
                                id="password"
                                name="da"
                                value={state.password}
                                required
                                onChange={(e) => {
                                    setstate({ ...state, password: e.target.value })
                                }}
                            />
                        </div>

                        <button type="submit" className="btn btn-primary    w-100">register</button>
                        <Link to="/signin"><button className="btn btn-primary bg-primary  mt-2 w-100">signin</button></Link>

                    </form>
                </div>

            </div>
        </>
    )

}