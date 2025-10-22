import Navbar from "./navbar"
import { useState } from "react"
import { Link } from "react-router-dom"

export function Contact() {


  let [loading, isLoding] = useState(false);
  let [sent, setsent] = useState(false);
  let [err, setError] = useState(false);

  function handlerClick() {

    isLoding(true);
    setError(false);
    fetch("https://fakestoreapi.com/products")
      .then((r) => r.json())
      .then(r => {
        isLoding(false)
        setsent(true)
      })
      .catch(err => {
        isLoding(false)
        setError(true);
      })
  }



  return (
    <>
      <Navbar />
      <div className="container py-5">

        {/* <!-- Page Title --> */}
        <div className="text-center mb-5 mt-4">
          <h1 className="fw-bold">Contact Us</h1>
          <p className="text-secondary">We'd love to hear from you!</p>
        </div>

        <div className="row">

          {/* <!-- Contact Info --> */}
          <div className="col-md-5 mb-4">
            <div className="p-4 bg-light rounded shadow-sm">
              <h5 className="fw-bold mb-3">🛍️ Smart & Style Store</h5>
              <p><i className="bi bi-house-door-fill"></i> <Link>House #12, University Road, Peshawar, Pakistan</Link></p>
              <p><i className="bi bi-envelope-fill"></i> <Link href="mailto:info@smartstyle.com" className="text-decoration-none">info@SmartChoice Store.com</Link></p>
              <p><i className="bi bi-phone-fill"></i> <Link href="tel:+923001234567" className="text-decoration-none">+92 300 1234567</Link></p>
              <div className="mt-3">
                <Link href="#" className="text-dark me-2"><i className="bi bi-facebook fs-4"></i></Link>
                <Link href="#" className="text-dark me-2"><i className="bi bi-instagram fs-4"></i></Link>
                <Link href="#" className="text-dark"><i className="bi bi-twitter fs-4"></i></Link>
              </div>
            </div>
          </div>

          {
            loading && (
              < div className="col-md-7">

              <div className="d-flex justify-content-center align-items-center" style={{ height: "100vh", backgroundColor: "#f8f9fa" }}>
                <div className="spinner-border text-dark" role="status" style={{ width: "4rem", height: "4rem" }}>
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
              </div>
            )
          }
          {
            !loading && sent && (
              < div className="col-md-7">

              <h1 style={{textAlign:"center"}}> ✅Your Message has send successfuly !</h1>
              </div>
            )
          }

          {
            !loading && err && (
              < div className="col-md-7">

              <h1 style={{textAlign:"center"}}>❌ Network error! Please check your connection.</h1>
              </div>
            )
          }
          {
            !loading && !sent && !err && (

              
              < div className="col-md-7">
          <div className="p-4 bg-light rounded shadow-sm">
            <form  onSubmit={(e) => {
                e.preventDefault()
                handlerClick()
              }}>
              <div className="mb-3">
                <label className="form-label">Name</label>
                <input type="text" className="form-control" placeholder="Your Name"  required/>
              </div>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input type="email" className="form-control" placeholder="Your Email" required />
              </div>
              <div className="mb-3">
                <label className="form-label">Message</label>
                <textarea className="form-control" rows="5" placeholder="Your Message" required></textarea>
              </div>
              <button type="submit" className="btn btn-dark rounded-pill px-4 w-100 ">Send Message</button>
            </form>
          </div>
        </div>

        )
}


      </div>

    </div >

        </>
    )
}

