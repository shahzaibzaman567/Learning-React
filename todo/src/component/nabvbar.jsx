import { Link } from "react-router-dom";
import { LoginContext } from "./context/contextlogin"
import "./home.css";

export function Navbar() {

  return (
    <>
      <nav className="navbar position-fixed w-100" style={{ background: "linear-gradient(135deg, #00a69dff 0%, #0066ff 100%)" }}>
        <div className="container-fluid">

          <Link className="navbar-brand text-white" to={"/"}>✨YourTodos</Link>

          {/* ✅ MOBILE TOGGLE BUTTON */}
          <button
            className="navbar-toggler  border-white navbar-expand-lg   "
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#sidebar"
            aria-controls="sidebar"
          // style={{  filter: "invert(1)" }}

          >
            <span className="navbar-toggler-icon"></span>
          </button>

        </div>
      </nav>

      {/* ✅ SIDEBAR – ONLY SHOWS WHEN TOGGLED */}
      <div className="head_name_div">
        <div className="User_Name_div1">{
          slice === "U" ?
            <abbr title="User"><h1 className="User_Name_h1">{slice}</h1></abbr>
            :
            <abbr title={LoginContext().name}><h1 className="User_Name_h1">
              {slice.toUpperCase()}</h1></abbr>} </div> </div>
      <div
        className="offcanvas offcanvas-start"
        tabIndex="-1"
        id="sidebar"
        data-bs-scroll="true"
        data-bs-backdrop="false"
      >
        <div className="offcanvas-header bg-dark text-white">
          <h5 className="offcanvas-title" id="sidebarLabel">YourTodos Menu</h5>
          <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas"></button>
        </div>

        <div className="offcanvas-body">
          <Link className="d-block my-2"><h3><i className="bi bi-clock-history"></i> History</h3></Link>
          <hr className="border border-1 border-dark" />
          <Link className="d-block my-2"><h3><i className="bi bi-check-circle-fill"></i> Completed </h3></Link>
          <hr className="border border-1 border-dark" />
          <Link className="d-block my-2"><h3><i className="bi bi-trash"></i> Deletedh </h3></Link>
          <hr className="border border-1 border-dark" />
          <Link className="d-block my-2" to="/signin"><h3><i className="bi bi-arrow-left-circle"></i> Logout</h3></Link>
          <hr className="border border-1 border-dark" />
        </div>
      </div>
    </>
  );
}
