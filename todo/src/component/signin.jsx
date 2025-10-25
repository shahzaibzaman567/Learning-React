import { useState } from "react"
import { Link ,useNavigate} from "react-router-dom"

export function Signin() {

    let [User, setUser] = useState([])
    
    
    
    let [state, setstate] = useState({
        name: "",
        email: "",
        password: "",

    })


    return (
        <>
            <div className="login-head">
                <div className="container  col-xl-4 col-md-7 col-sm-10 col-12 d-flex justify-content-center align-items-center flex-column ">

                    <form className="card w-100 p-4 d-flex flex-column gap-2 " onSubmit={(e) => {
                        e.preventDefault()
                  
                    }}>
                        <h2 className="pb-3 text-center">Signin</h2>
                        <div className="mb-1">
                            <label htmlFor="Name" className="form-label">Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="Name"
                                name="name"

                            />
                        </div>

                        <div className="mb-1">

                            <label htmlFor="email" className="label">Email address</label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                name="email"
                                aria-describedby="emailHelp"
                                value={state.email}
                                onChange={(e) => {
                                    setstate({ ...state, email: e.target.value })
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
                                value={state.password}
                                onChange={(e) => {
                                    setstate({ ...state, password: e.target.value })
                                }}
                            />
                        </div>

                        <button type="submit" className="btn btn-primary    w-100">Login</button>
                        <Link to={"/signin"}><button type="submit" className="btn btn-primary   mt-2 w-100">register</button></Link>

                    </form>
                </div>

            </div>

        </>
    )


}