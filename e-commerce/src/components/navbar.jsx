import troli from "../images/Low-code-developer.jpg"
import { Link } from "react-router-dom"
import "./navbar.css"

export default function Navbar() {


  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark position-fixed w-100">
        <div className="container-fluid">
          <Link className="navbar-brand text-white" to={"/"}>✨ SmartChoice Store </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item text-white  "><Link className="nav-link " to={"/home"}>Home</Link></li>
              <li className="nav-item text-white"><Link className="nav-link" to={"/Products"}>Products</Link></li>
              <li className="nav-item text-white"><Link className="nav-link" to={"/About"}>About</Link></li>
              <li className="nav-item text-white"><Link className="nav-link" to={"/contact"}>Contact</Link></li>
            </ul>
           
          </div>
        </div>
      </nav>
    </>
  )
}

