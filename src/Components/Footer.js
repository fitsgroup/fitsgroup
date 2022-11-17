import React from "react";
import logo from "../Assets/logo.jpg";
import "../Styles/styles.css"
const Footer = () => {
  return (
    <div   >
   
      <div className="footer  ">
        <div className=" container p-5 ">
          <div className="row">
            <div className="col-md-4">
              <img src={logo} width="100px" className="pb-3" alt="logo" />
              <p>
                We are providing the entire infrastructure of the IT industry.
                You can get IT solutions for a more secure envoirement of your
                problems
              </p>
              <div className="    d-flex">
                <i className="bi bi-facebook text-primary  "> </i> 
                <i className="bi bi-youtube text-danger mx-2"></i> 
                <i className="bi bi-twitter text-primary mx-2"></i> 
                <i className="bi bi-instagram text-dark"></i>
              </div>
            </div>
            <div className="col-md-4   text-center  ">
              <h5>Services</h5>
              <div>
                <p>Mobile</p>
                <p>Web</p>
                <p> Windows</p>
                <p>Ux|UI</p>
              </div>
            </div>

            <div className="col-md-4">
              <h5>Address</h5>
              <p>
                58 Howard Street #2 San Francisco, CA 941 contact@aeroland.com
              </p>
              <p className="fw-bold">(+68)1221 09876</p>
              <p>www.mitech.xperts.com</p>
            </div>
          </div>
        </div>
      </div>
      <div className="  text-center p-3 bg-secondary text-white">
        Copyright © 2019-2022 | Friends IT solutions Ltd.
      </div>
    </div>
  );
};

export default Footer;
