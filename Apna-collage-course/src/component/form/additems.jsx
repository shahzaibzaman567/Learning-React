import React from "react";
// import "";



function Additem({p}){

    // console.log(incrnt())
    
    return(
        <>
<div className=" d-flex align-items-center justify-content-center p-5">
  <form className="card border-primary col-3 pt-5">
  <div className=" mb-3  w-100">
    <label htmlFor="Name" className="form-label">
      Name:
          </label>
    <input
      type="text"
      className="form-control"
      id="Name"
      aria-describedby="emailHelp"
    />
    
  </div>
  <div className="mb-6 w-100">
    <label htmlFor="exampleInputPassword1" className="form-label">
      Password
    </label>
    <input
      type="password"
      className="form-control"
      id="exampleInputPassword1"
    />
  </div>
  <button type="submit" className="btn btn-primary w-100 mt-3">
    Submit
  </button>
</form>

    </div>
        </>
    )


}
export default Additem;
