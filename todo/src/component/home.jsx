import { useState } from "react"
import { LoginContext } from "./context/contextlogin"
import "./home.css"
import { Navbar } from "./context/navbar";

export function Home() {

    let Todos = []
    let user = LoginContext().name;
    let [creating, setCreating] = useState(false);
    console.log(user)
    let [state, setState] = useState({
        id: 0,
        isEditing: false,
        text: "",
        completed: false,
        user: user

    });
    console.log(state)

    function handlerSubmit() {

        let oldTodo = JSON.parse(sessionStorage.getItem("todo")) || []
        oldTodo.push(state);

        sessionStorage.setItem("todo", JSON.stringify(oldTodo))
        setCreating(true)
    }
    return (
        <>
            <Navbar />

            <div className="home-div d-flex align-items-center justify-content-center">
                <div className="card w-50 h-75 p-3">
                    <form className=" pt-2 d-flex " onSubmit={(e) => {
                        e.preventDefault();
                        setState({ ...state, id: state.id + 1 });
                        handlerSubmit();
                    }}>



                        <div class="input-group mb-3">
                            <input type="text" class="form-control" 
                            placeholder="Recipient’s username" 
                            aria-label="Recipient’s username" 
                            aria-describedby="button-addon2" 
                            onChange={()=>{
                                setState({...state, text: e.target.value })

                            }}
                            />
                            <button class="btn btn-outline-secondary" type="button" id="button-addon2">Button</button>
                        </div>
                    </form>
                    {
                        creating === true ?
                            <div className="card">
                                hay
                            </div>
                            : <h1>bay</h1>
                    }
                </div>

            </div>
        </>
    )
} 
