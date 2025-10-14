import troli from "../images/Low-code-developer.jpg"
import "./navbar.css"
import { Itemsincrease } from "../contexts/itemscontext"
import { useContext } from "react"
import {Link} from "react-router-dom"

export default function Navbar() {

let increment=useContext(Itemsincrease)
console.log(increment)
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark position-fixed w-100">
        <div className="container-fluid">
          <a className="navbar-brand text-white" href="#">MyShop</a>
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
              <li className="nav-item text-white  "><a className="nav-link active" href="#">Home</a></li>
              <li className="nav-item text-white"><a className="nav-link" href="#">Products</a></li>
              <li className="nav-item text-white"><a className="nav-link" href="#">About</a></li>
              <li className="nav-item text-white"><a className="nav-link" href="#">Contact</a></li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" />
              <button className="btn btn-outline-success text-white border-white" type="submit">Search</button>
            </form>
        <Link className="btn   text-white  ms-2 " to={"/productlist"}  > <span className="troli-span ">{increment.count}</span> <i className="bi bi-cart-fill troli-icon "></i></Link> 
          </div>
        </div>
      </nav>
    </>
  )
}

