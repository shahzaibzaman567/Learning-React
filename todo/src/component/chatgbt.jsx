// from reportlab.lib.pagesizes import A4
// from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Preformatted
// from reportlab.lib.styles import getSampleStyleSheet

// # Define PDF path
// pdf_path_react = "/mnt/data/React_Todo_App_Code.pdf"

// # Create document
// doc = SimpleDocTemplate(pdf_path_react, pagesize=A4)
// styles = getSampleStyleSheet()

// # Title and description
// title = Paragraph("📘 React Todo App with Session Storage (Complete Code)", styles["Title"])
// desc = Paragraph(
//     "This is the full React component code for a Todo App that stores multiple todos persistently using sessionStorage.",
//     styles["BodyText"]
// )

// # React Code

// code_react = """import { useState, useEffect } from "react";
// import { LoginContext } from "./context/contextlogin";
// import "./home.css";
// import { Navbar } from "./context/navbar";

// export function Home() {

//   const user = LoginContext().name;
//   const [creating, setCreating] = useState(false);
//   const [todos, setTodos] = useState([]);
//   const [state, setState] = useState({
//     id: 0,
//     isEditing: false,
//     text: "",
//     completed: false,
//     user: user,
//   });

//   // 🟢 Load saved todos when component mounts
//   useEffect(() => {
//     const savedTodos = JSON.parse(sessionStorage.getItem("todo")) || [];
//     setTodos(savedTodos);
//   }, []);

//   function handlerSubmit(e) {
//     e.preventDefault();

//     // Create new todo
//     const newTodo = { ...state, id: Date.now() };

//     // Add to old todos
//     const updatedTodos = [...todos, newTodo];

//     // Save both to state and sessionStorage
//     setTodos(updatedTodos);
//     sessionStorage.setItem("todo", JSON.stringify(updatedTodos));

//     // Clear input and show list
//     setCreating(true);
//     setState({ ...state, text: "" });
//   }

//   return (
//     <>
//       <Navbar />

//       <div className="home-div d-flex align-items-center justify-content-center">
//         <div className="card w-50 h-75 p-3">
//           <form
//             className="pt-2 d-flex"
//             onSubmit={handlerSubmit}
//           >
//             <input
//               required
//               type="text"
//               className="form-control col-3"
//               placeholder="Enter Your Todo"
//               value={state.text}
//               onChange={(e) => setState({ ...state, text: e.target.value })}
//             />
//             <button
//               type="submit"
//               className="btn btn-lg btn-primary py-2 w-100 mt-3"
//             >
//               Add
//             </button>
//           </form>

//           {creating ? (
//             <div className="card mt-3 p-2">
//               <h5>Todos List:</h5>
//               {todos.map((t) => (
//                 <p key={t.id}>• {t.text}</p>
//               ))}
//             </div>
//           ) : (
//             <h5 className="mt-3 text-center">No Todos Yet</h5>
//           )}
//         </div>
//       </div>
//     </>
//   );
// }"""

// # Build the PDF
// story = [title, Spacer(1, 12), desc, Spacer(1, 12), Preformatted(code_react, styles["Code"])]
// doc.build(story)

// pdf_path_react
