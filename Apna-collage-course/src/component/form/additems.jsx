import React, { useState } from "react";
import ProductPrint from "../Navbar/ProductList/printing";



function Additem({ pro, setProduct }) {

  let [state, setState] = useState({
    name: "",
    prise: 0,

  })

  function additem(name, prise) {

    let newitem = [...pro]

    newitem?.push({
      prise: prise,
      name: name,
      quantity: 0,

    })
    setProduct(newitem)
  }


  return (
    <>

      <div className=" d-flex align-items-center justify-content-center p-5">
        <form className="card border-primary col-3 pt-5" onSubmit={(e) => {
          e.preventDefault();
          additem(state.name, state.prise)
        }
        }>
          <div className=" mb-3  w-100">
            <label htmlFor="Name" className="form-label">
              Name:
            </label>
            <input
              type="text"
              className="form-control"
              id="Name"
              aria-describedby="emailHelp"
              name="name"
              value={state.name}
              onChange={(e) => {
                setState({ ...state,name: e.target.value })
              }}
            />

          </div>
          <div className="mb-6 w-100">
            <label htmlFor="prise" className="form-label">
              prise
            </label>
            <input
              type="text"
              className="form-control"
              id="prise"
              name="prise"
              value={state.prise.toString()}
              onChange={(e) => {
                setState({ ...state,prise: Number(e.target.value) })
              }}


            />
          </div>
          <button type="submit" className="btn btn-primary w-100 mt-3" >
            additem
          </button>
        </form>

      </div>
    </>
  )

}
export default Additem;
