import {Link} from "react-router-dom"
import "./home.css"

export function Navbar(){

    return(
        <>
       <nav className="navbar navbar-expand-lg  position-fixed w-100" style={{  background: "linear-gradient(135deg, #a8edea 0%, #3284f8ff 100%"}}>
      <div className="container-fluid">
        <Link className="navbar-brand text-white" to={"/"}>
          ✨YourTodos
        </Link>

        <button
            className="navbar-toggler border-white navbar-expand-lg  navbar-dark white-toggler"
          style={{backgroundColor:""}}
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
          <button
            className="btn text-white border-white " id="button-addon2" 
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
        </>
    )
}