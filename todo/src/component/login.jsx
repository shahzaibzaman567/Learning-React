import { useState } from "react"
import "./login.css"
import { Nav } from "./nabvbar"

export function Login() {

    let [saveData, setSavedata] = useState({
        name: "",
        email: "",
        password: "",

    })
    console.log(saveData)

    return (
        <>
            <Nav />
            <div className="login-head">
                <div className="container  col-xl-4 col-md-7 col-sm-10 col-12 d-flex justify-content-center align-items-center flex-column ">

                    <form className="card w-100 p-4 d-flex flex-column gap-2 " method="post" >
                        <h2 className="pb-3">Login</h2>
                        <div className="mb-1">
                            <label htmlFor="Name" className="form-label">Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="Name"
                                name="name"
                                value={saveData.name}
                                onChange={(e) => {
                                    setSavedata({ ...saveData, name: e.target.value })
                                }}
                            />
                        </div>

                        <div className="mb-1">

                            <label htmlFor="email" className="label">Email address</label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                name="eamil"
                                aria-describedby="emailHelp"
                                value={saveData.email}
                                onChange={(e) => {
                                    setSavedata({ ...saveData, email: e.target.value })
                                }}
                            />
                        </div>

                        <div className="mb-1">
                            <label htmlFor="password" className="orm-label">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                id="password"
                                name="da"
                                value={saveData.password}
                                onChange={(e) => {
                                    setSavedata({ ...saveData, password: e.target.value })
                                }}
                            />
                        </div>

                        <a href=""><button type="submit" className="btn btn-primary    w-100">Login</button></a>
                        <a href=""><button type="submit" className="btn btn-primary   mt-2 w-100">register</button></a>

                    </form>
                </div>

            </div>
        </>
    )

}