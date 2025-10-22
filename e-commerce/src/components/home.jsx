import Navbar from "./navbar"
import Banner from "../images/new-banner.jpg"
import small from "../images/small-banner.png"
import man1 from "../images/young-businessman-happy-expression_1194-1588.jpg"
import man2 from "../images/3.jpg"
import man3 from "../images/2.jpg"
import "./home.css"
import { Link } from "react-router-dom"

export function Home() {

    return (
        <>
            <Navbar />
            <div className="banner-div">
                <div className="image-banner">
                    <img src={Banner} alt="banner" className="banner d-none d-sm-block col-12 " />
                    <img src={small} alt="banner" className="banner d-block d-sm-none col-12" style={{marginTop:"-12px"}} />
                    
                </div>

          <div className="container my-4">
  <div className=" row justify-content-center align-items-center ">

    {/* Carousel Section */}
    <div
      id="carouselExampleControls"
      className="card carousel slide ms-2  col-xl-5 col-12 col-md-4  col-sm-12 sm-border-0 mb-3 "
      data-bs-ride="carousel"
      style={{
        border: "2px solid black",
        borderRadius: "10px",
        overflow: "hidden",
        height: "436px",
        margin:"0px"
        
      }}
    >
      <div className="carousel-inner h-100">
        <div className="carousel-item active h-100">
          <img
            src={man1}
            alt="Marco"
            className="d-block w-100 h-100"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="carousel-item h-100">
          <img
            src={man2}
            alt="Josaf"
            className="d-block w-100 h-100"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="carousel-item h-100">
          <img
            src={man3}
            alt="shah-coder"
            className="d-block w-100 h-100"
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>

      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>

      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>

    {/* Text Section */}
    <div
      className="col-12 col-md-5 bg-light p-4 ms-3  mb-3 "
      style={{
        border: "2px solid black",
        borderRadius: "10px",
        height: "436px",
        overflowY: "auto",
        margin:"0px"
      }}
    >
      <h5 className="fw-normal text-dark">
        Our project team is led by <strong>Shahzaib</strong>, who serves as the
        owner and primary coordinator, ensuring that all tasks are organized and
        deadlines are met. Alongside him, there are three dedicated members who
        each contribute their unique skills: <strong>Ali</strong>, who
        specializes in front-end development and design; <strong>Sara</strong>,
        who manages the database and backend logic; and <strong>Usama</strong>,
        who focuses on testing, debugging, and quality assurance. Together, the
        team collaborates efficiently, combining their talents to deliver a
        well-structured and high-quality project.
      </h5>
    </div>
  </div>
</div>

                {/* <div classNameName="footer-div " style={{width:"134%"}}> */}
                {/* <!-- Footer : Full Web Footer with Columns --> */}

                <footer className="bg-dark text-light pt-5 pb-4" >
                    <div className="container text-center text-md-start">
                        <div className="row text-center text-md-start">

                            {/* <!-- Brand Section --> */}
                            <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                                <h5 className="text-uppercase mb-4 fw-bold text-warning">Smart & Style Store</h5>
                                <p>Your one-stop destination for fashion, electronics, and style essentials. Explore, shop, and stay trendy with us.</p>
                            </div>

                            {/* <!-- Links Section --> */}
                            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                                <h6 className="text-uppercase mb-4 fw-bold text-warning">Quick Links</h6>
                                <p><Link to={"/products"} className="text-light text-decoration-none">Products</Link></p>
                                <p><Link to={"/about"} className="text-light text-decoration-none">About</Link></p>
                                <p><Link to={"/contact"} className="text-light text-decoration-none">Contact</Link></p>
                            </div>

                            {/* <!-- Contact Section --> */}
                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                                <h6 className="text-uppercase mb-4 fw-bold text-warning">Contact</h6>
                                <p><i className="bi bi-house-door-fill"></i> Peshawar, Pakistan</p>
                                <p><i className="bi bi-envelope-fill"></i> info@smartstyle.com</p>
                                <p><i className="bi bi-phone-fill"></i> +92 300 1234567</p>
                            </div>


                        </div>

                        <hr className="mb-4 mt-4 border-light" />

                        {/* <!-- Bottom Line --> */}
                        <div className="row align-items-center">
                            <div className="col-md-7 col-lg-8">
                                <p className="mb-0">© 2025 <strong className="text-warning">Smart & Style Store</strong> | All Rights Reserved</p>
                            </div>
                            <div className="col-md-5 col-lg-4 text-md-end">
                                <a href="#" className="text-light me-3"><i className="bi bi-facebook"></i></a>
                                <a href="#" className="text-light me-3"><i className="bi bi-instagram"></i></a>
                                <a href="#" className="text-light"><i className="bi bi-twitter-x"></i></a>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
            {/* </div> */}

        </>
    )

}