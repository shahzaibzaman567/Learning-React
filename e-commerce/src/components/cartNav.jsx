import { Link } from "react-router-dom"
// import { Itemsincrease } from "../contexts/itemscontext";
// using redux
// import { useContext, useState } from "react"
import { useSelector } from "react-redux";
export function Cartnav(props) {
  
  //  let increment
  let count = useSelector(state => state.counter );
  
  // let [state, setState] = useState({
  //   category: "",
  // });
  // let data = props.data;

  // const OnSubmit = () => {

  //   data.map((item, i) => {
  //     let Dslice = item.category.slice(0, 1);
  //     let Sslice = state.category.slice(0, 1);

  //     if (Dslice === Sslice) {

  //       console.log(Sslice)
  //     }
  //   })
  // }



  return <nav className="navbar navbar-expand-lg navbar-dark bg-dark position-fixed w-100 cart-navbar mt-0">
    <div className="container-fluid">
      <Link className="navbar-brand text-white" to={"/home"}>✨ SmartChoice Store </Link>
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
          <li className="nav-item text-white  "><Link className="nav-link active" to={"/home"}>Home</Link></li>
          <li className="nav-item text-white"><Link className="nav-link" to={"/Products"}>Products</Link></li>
          <li className="nav-item text-white"><Link className="nav-link" to={"/About"}>About</Link></li>
          <li className="nav-item text-white"><Link className="nav-link" to={"/contact"}>Contact</Link></li>
        </ul>
        <form className="d-flex" role="search" onSubmit={() => {
// OnSubmit()
        }} >
          <input
           className="form-control me-2 "
           type="search" 
           placeholder="Search" 
           name="category"
           required
          // value={state.category}
          // onChange={(e)=>{
          //   setState({...state , name:e.target.value })
          // }} 
           />
          <button className="btn btn-outline-success text-white border-white" type="submit">Search</button>
          <Link className="btn   text-white  ms-2 py-2" to={"/Cart"}  > <span className="troli-span ">{count}</span> <i className="bi bi-cart-fill troli-icon "></i></Link>
        </form>
      </div>
    </div>
  </nav>
}