import { Link } from "react-router-dom";
import { LoginContext } from "./context/contextlogin";

export function Navbar({ userName }) {
  const slice = LoginContext().name ? LoginContext().name.slice(0, 1).toUpperCase() : "U";

    return (
    <>
      {/* NAVBAR */}
      <nav
        className="navbar navbar-dark position-fixed w-100"
        style={{ background: "linear-gradient(135deg, #00a69dff 0%, #0066ff 100%)", zIndex: 1030 ,marginTop:"-56px"  }}
      >
        <div className="container-fluid">
          <Link className="navbar-brand text-white" to={"/"}>
            ✨YourTodos
          </Link>

          {/* Toggle button for SM */}
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#sidebar-sm"
            aria-controls="sidebar-sm"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>

      {/* ===== Sidebar for LG (always visible) ===== */}
      <div
        className="d-none d-lg-block"
        style={{
          width: "260px",
          background: "linear-gradient(135deg, #a8edea 0%, #0066ff 100%)",
          height: "93vh",
          position: "fixed",
        }}
      >
        <div className="d-flex justify-content-center text-white mt-3 mb-4">
          <div
            className="rounded-circle d-flex align-items-center justify-content-center "
            style={{ width: "60px", height: "60px",color:"white", background: "#0066ff", fontSize: "24px" }}
          >
            {slice}
          </div>
        </div>

        <div className="px-3">
          <Link className="d-block my-2" to="/home"><h5> Home</h5></Link>
          <hr />
           <Link className="d-block my-2" to="/history"><h5><i className="bi bi-clock-history"></i> History</h5></Link>
          <hr />
          <Link className="d-block my-2" to="/complete"><h5><i className="bi bi-check-circle-fill"></i> Completed</h5></Link>
          <hr />
          <Link className="d-block my-2" to="/delet"><h5><i className="bi bi-trash"></i> Deleted</h5></Link>
          <hr />
          <Link className="d-block my-2" to="/signin"><h5><i className="bi bi-arrow-left-circle"></i> Logout</h5></Link>
          
        </div>
      </div>

      {/* ===== Sidebar for SM (offcanvas) ===== */}
      <div
        className="offcanvas offcanvas-start d-lg-none"
        tabIndex="-1"
        id="sidebar-sm"
        data-bs-scroll="true"
        data-bs-backdrop="false"
        style={{ width: "260px", background: "linear-gradient(135deg, #a8edea 0%, #0066ff 100%)" }}
      >
        <div className="offcanvas-header text-white">
          <h5 className="offcanvas-title">YourTodos</h5>
          <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas"></button>
        </div>

        <div className="d-flex justify-content-center mb-4">
          <div
            className="rounded-circle d-flex align-items-center justify-content-center"
            style={{ width: "60px", height: "60px", background: "#0066ff", fontSize: "24px" }}
          >
            {slice}
          </div>
        </div>

        <div className="px-3">
          <Link className="d-block my-2" to={"/history"}><h5><i className="bi bi-clock-history"></i> History</h5></Link>
          <hr />
          <Link className="d-block my-2" to="/Complete"><h5><i className="bi bi-check-circle-fill"></i> Completed</h5></Link>
          <hr />
          <Link className="d-block my-2" to="/delet"><h5><i className="bi bi-trash"></i> Deleted</h5></Link>
          <hr />
          <Link className="d-block my-2" to="/signin"><h5><i className="bi bi-arrow-left-circle"></i> Logout</h5></Link>
        </div>
      </div>

      {/* ===== MAIN CONTENT ===== */}
      <div
        className="main-content"
        style={{
          marginLeft: "0",
          marginTop: "56px",
          padding: "20px",
        }}
      >
        {/* Shift content for LG */}
        <div className="d-none d-lg-block" style={{ marginLeft: "260px" }}></div>

        {/* <h2>Your Todos Page Content Here</h2> */}
      </div>
    </>
  );
}
