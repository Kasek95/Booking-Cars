import React from "react";
import {Link} from "react-router-dom";
import "./footer.scss"



const Footer = () => {

    return (
       <footer>
           <section className={"footer container "}>
               <Link className={"footerLogo"} to={"/"}>Royal<span>Cars</span></Link>

               <div className={"mediaFooter"}>
                   <Link to={"/"}><i className="fa-brands fa-instagram"></i></Link>
                   <Link to={"/"}><i className="fa-brands fa-facebook"></i></Link>
                   <Link to={"/"}> <i className="fa-brands fa-twitter"></i></Link>
               </div>
           </section>
       </footer>


    )

}

export default Footer;