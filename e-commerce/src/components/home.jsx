import Navbar from "./navbar"
import Banner from   "../images/Welcome to Our Store Sale.png"
import "./home.css"

export function Home(){

    return (
        <>
        <Navbar/>
        <div className="banner-div">
            <img src={Banner} alt="banner" className="banner" />
        </div>
        </>
    )

}