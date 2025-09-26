import React, { useState } from "react";

function Additem({ products, setProductList }) {
  const [state, setState] = useState({
    name: "",
    prise: "",
    quantity: 1,
  });

  function handleAdd(e) {
    e.preventDefault(); // page refresh نہ ہو
    let newitem = {
      name: state.name,
      prise: state.prise,
      quantity: state.quantity,
    };

    // پچھلی product list میں نیا item add کریں
    setProductList((prev) => [...prev, newitem]);

    // input reset کریں
    setState({ name: "", prise: "", quantity: 1 });
  }

  return (
    <div className="d-flex align-items-center justify-content-center p-5">
      <form className="card border-primary col-3 pt-5" onSubmit={handleAdd}>
        <div className="mb-3 w-100">
          <label htmlFor="Name" className="form-label">
            Name:
          </label>
          <input
            type="text"
            className="form-control"
            id="Name"
            name="name"
            onChange={(e) => setState({ ...state, name: e.target.value })}
            value={state.name}
          />
        </div>

        <div className="mb-6 w-100">
          <label htmlFor="prise" className="form-label">
            Price:
          </label>
          <input
            type="text"
            className="form-control"
            id="prise"
            name="prise"
            onChange={(e) => setState({ ...state, prise: e.target.value })}
            value={state.prise}
          />
        </div>

        <button type="submit" className="btn btn-primary w-100 mt-3">
          Add Item
        </button>
      </form>
    </div>
  );
}

export default Additem;
