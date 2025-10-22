import Navbar from "./navbar"
import "./about.css"
import logo1 from "../images/logo-1.jpg"
import logo2 from "../images/logo2.png"
import logo3 from "../images/logo3.jpg"

export function About() {

  return (
    <>
      <Navbar />


      <div className=" about-div " style={{ margin: "0px" }}>
        <div className="logos-company col-xl-5 col-md-12">
          <div className="col-12  mt-5" >
            <h4 className="text-white">
              Our project team is led by Shahzaib, who serves
              as the owner and primary coordinator, ensuring
              that all tasks are organized and deadlines are met.
              Alongside him, there are three dedicated members who
              each contribute their unique skills: Ali, who specializes
              in front-end development and design; Sara, who manages the
              database and backend logic; and Usama, who focuses on testing,
              debugging, and quality assurance. Together, the team collaborates
              efficiently, combining their talents to deliver a well-structured
              and high-quality project.
            </h4>
          </div>

          <div className="logo-div ">

            <img src={logo2} alt="logo" className="logo logo2" />
            <img src={logo1}  alt="logo" className="logo logo1" />
            <img src={logo3} alt="logo" className="logo logo3" />

          </div>
        </div>

      </div>


    </>
  )
}