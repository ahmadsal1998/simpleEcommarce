import React from "react";
import { Link } from "react-router-dom";
import { BsLinkedin, BsGithub, BsYoutube, BsInstagram} from "react-icons/bs";
import newsletter from "../images/newsletter.png";

const Footer = () => {
  return (
    <>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-5">
              <div className="footer-top-data d-flex gap-30 align-items-center">
                <img src={newsletter} alt="newsletter" />
                <h2 className="mb-0 text-white">Sign Up For Newsletter</h2>
              </div>
            </div>
            <div className="col-7">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control py-1"
                  placeholder="Your Email Address"
                  aria-label="Your Email Address"
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-2" id="basic-addon2">
                  Subscribe
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-4">
              <h4 className="text-white mb-4">Contact Us</h4>
              <div>
                <address className="text-white fs-6">
                  Palestine <br /> jenin <br />
                  Abu Baker-st
                </address>
                <a
                  href="tel; +970 593202026"
                  className="mt-3 d-block mb-1 text-white"
                >
                  +970 593202026
                </a>
                <a
                  href="Email: Salamea015@gmail.com"
                  className="mt-2 d-block mb-0 text-white"
                >
                  Salamea015@gmail.com
                </a>
                <div className="social_icons d-flex align-items-center gap-30 mt-4">
                  <a className="text-white" href="_blank"><BsLinkedin className="fs-5" /></a>
                  <a className="text-white" href="_blank"><BsInstagram className="fs-5" /></a>
                  <a className="text-white" href="_blank"><BsGithub className="fs-5" /></a>
                  <a className="text-white" href="_blank"><BsYoutube className="fs-5" /></a>
                </div>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Information</h4>
              <div className="footer-link d-flex- flex-column">
                <Link to="/privacy-policy" className="text-white py-2 mb-1">Privacy Policy</Link>
                <br />
                <Link to="/refund-policy" className="text-white py-2 mb-1">Refund Policy</Link>
                <br />
                <Link to="/shipping-policy" className="text-white py-2 mb-1">Shipping Policy</Link>
                <br />
                <Link to="/term-condiotions" className="text-white py-2 mb-1">Terms & Conditions</Link>
                <br />
                <Link className="text-white py-2 mb-1">Blogs</Link>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Account</h4>
              <div className="footer-link d-flex- flex-column">
                <Link className="text-white py-2 mb-1">About</Link>
                <br />
                <Link className="text-white py-2 mb-1">Faq</Link>
                <br />
                <Link className="text-white py-2 mb-1">Contact</Link>
                <br />
              </div>
            </div>
            <div className="col-2">
              <h4 className="text-white mb-4">Quick Links</h4>
              <div className="footer-link d-flex- flex-column">
                <Link className="text-white py-2 mb-1">Laptops</Link>
                <br />
                <Link className="text-white py-2 mb-1">Headphones</Link>
                <br />
                <Link className="text-white py-2 mb-1">Tablets</Link>
                <br />
                <Link className="text-white py-2 mb-1">Watch</Link>
                <br />
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container xxl">
          <div className="row">
            <div className="col-12">
              <p className="text-center mb-0 text-white">
                &copy;{new Date().getFullYear()}; Powered by Developer's ME
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
