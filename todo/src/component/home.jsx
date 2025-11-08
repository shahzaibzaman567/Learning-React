import { useEffect, useState } from "react"
import { LoginContext } from "./context/contextlogin"
import "./home.css"
import { Navbar } from "./nabvbar.jsx";

export function Home() {

  let user = LoginContext().name;

  // come error solve the error 

  let slice = user ? user.slice(0, 1) : "U";
  let [creating, setCreating] = useState(false);

  let [todo, setTodo] = useState([]);
  let [state, setState] = useState({
    id: 1,
    isEditing: false,
    text: " ",
    completed: false,
    user: user

  });
console.log(state.text)
  useEffect(() => {
    let load = JSON.parse(sessionStorage.getItem("todo")) || [];
    setTodo(load);
  }, []);

  function handlerSubmit() {

    let oldTodo = JSON.parse(sessionStorage.getItem("todo")) || [];
    
    oldTodo.push(state);
    sessionStorage.setItem("todo", JSON.stringify(oldTodo));
    setTodo(oldTodo);
    setState({ ...state, text: "say",id : state.id + 1 });
    setCreating(true);
  }

  function handlerRemove(i) {

    let spliceData = JSON.parse(sessionStorage.getItem("todo"));
    spliceData.splice(i, 1);

    setTodo(spliceData);
    sessionStorage.setItem("todo", JSON.stringify(spliceData));

  }

  function handlerComplete(i) {

    let Complete = JSON.parse(sessionStorage.getItem("todo"));
    Complete[i].completed = true
    sessionStorage.setItem("todo", JSON.stringify(Complete));
    setTodo([...Complete]); //  ✅UI update
  }

  function handlerEdit(i) {

    let Editing = JSON.parse(sessionStorage.getItem("todo"));
    Editing[i].isEditing = true;
    sessionStorage.setItem("todo", JSON.stringify(Editing));
    setTodo([...Editing]);  // ✅ UI update
  }

  function handlerKeyDown(e,id) {

    if (e.key === "Enter") {

      let updateTodo = todo.map((todo)=>{

     if(todo.id == id){

       return {...todo, text:e.target.value,isEditing:false }
      }
      return todo
    })
      
    sessionStorage.setItem("todo", JSON.stringify(updateTodo));
    setTodo(updateTodo)
    }
  }

  return (
    <>

      <Navbar />
      <div className="home-div d-flex justify-content-center   ">

        <div className="card w-50 mt-3  p-3" style={{ height: "auto" }}>
          <form className=" pt-2 d-flex " onSubmit={(e) => {
            e.preventDefault();
            handlerSubmit();
          }}>



            <div className="input-group mb-3">
              <input type="text" className="form-control"
                placeholder="Enter Your todo"
                aria-label="Recipient’s username"
                aria-describedby="button-addon2"
                required
                onChange={(e) => {
                  setState({ ...state, text: e.target.value })

                }}
              />
              <button className="todo-btn" type="submit" id="button-addon2" >Add</button>
            </div>

          </form>
          {
             todo.length > 0 ?

              todo.map((item, i) => {


                return <div className="container mt-4 " key={i}>
                  <div className="row justify-content-center">
                    <div className="col-md-12 col-xl-12">

                      <div
                        className="d-flex align-items-center justify-content-between p-3 mb-3 border rounded shadow"
                        style={{ background: "#7b8fc7ff", borderLeft: "6px solid #4f46f4ff" }}
                      >
                        {
                          item.isEditing ?
                            <>  <h6 className={`m-0 ${item.completed ? "disabled" : ""} `} style={{ color: "#3347deff" }}>Task ID: #{item.id}</h6>

                              <input
                                type="text"
                                className="form-control  w-50"
                                defaultValue={item.text}
                                onKeyDown={(e) => { handlerKeyDown(e,item.id) }}
                              />
                            </>
                            :
                            <div>
                              <h6 className={`m-0 ${item.completed ? "disabled" : ""} `} style={{ color: "#3347deff" }}>Task ID: #{item.id}</h6>

                              {/* <!-- Long text → ellipsis only --> */}
                              <p className="m-0"
                                style={{ maxWidth: "250px", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                                {item.text}
                              </p>
                            </div>

                        }

                        <div className="d-flex gap-2">

                          {/* <!-- Edit --> */}
                          <button className={`btn btn-sm btn-primary ${item.completed ? "disabled" : ""}`} onClick={() => { handlerEdit(i) }}>
                            <i className="bi bi-pencil-square"></i>
                          </button>

                          {/* <!-- Delete --> */}
                          <button className={`btn btn-sm btn-danger`} onClick={() => { handlerRemove(i) }}>
                            <i className="bi bi-trash"></i>
                          </button>

                          {/* <!-- Complete --> */}
                          <button className={`btn btn-sm btn-success ${item.completed ? "disabled" : ""}`} onClick={() => { handlerComplete(i) }}>
                            <i className="bi bi-check2-circle"></i>
                          </button>

                        </div>

                      </div>

                    </div>
                  </div>
                </div>

              })


              : <h5 className="mt-3 text-center">No Todos📘  Yet</h5>

          }
        </div>

      </div>
    </>

  )
} 
