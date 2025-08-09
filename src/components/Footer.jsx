import { NavLink } from "react-router-dom";
import logo from "../assets/Logo.png";

export default function Footer() {
  return (
    <footer>
      <div className="footer-container d-flex flex-column align-items-center justify-content-center">
        <div className="footer-top d-flex align-items-start justify-content-between flex-wrap pb-5">
          <div className="company-details d-flex flex-column align-items-start col-12 col-lg-6 pb-4 pb-lg-0 pe-0 pe-md-5">
            <img
              className="pb-4"
              src={logo}
              alt="company logo"
            />
            <p className="company-description pe-0 pe-md-5">
              Your goal is our target. Not anything in between. We use online
              marketing platforms and tools to achieve single objective - your
              business results.
            </p>
          </div>
          <div className="company-links col-12 col-lg-6 px-0 px-md-1">
            <div className=" d-flex justify-content-between align-items-start flex-wrap">
              <div className="technology-stack d-flex flex-column align-items-start col-12 col-md-6 pb-4 pb-md-0">
                <h4 className="stack-title mb-3">Our Technologies</h4>
                <p className="stack-item">ReactJS</p>
                <p className="stack-item">Gatsby</p>
                <p className="stack-item">NextJS</p>
                <p className="stack-item">NodeJS</p>
              </div>
              <div className="services-stack d-flex flex-column align-items-start col-12 col-md-6">
                <h4 className="stack-title mb-3">Our Services</h4>
                <p className="stack-item">Social Media Marketing</p>
                <p className="stack-item">Web & Mobile App Development</p>
                <p className="stack-item">Data & Analytics</p>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom d-flex align-items-start justify-content-center w-100 border-top pt-3 mt-3">
          <NavLink className="stack-item" to="/">
            Privacy Policy
          </NavLink>
          <span className="mx-2">|</span>
          <NavLink className="stack-item" to="/">
            Terms and Conditions
          </NavLink>
        </div>
      </div>
    </footer>
  );
}
