import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import "./navbar.jsx.css";
// import logo from "../images/logos/R3_Logo_Light.png";
import logo from "../../images/logos/R3_Logo_Light.png";
import Home from "../home";
import Team from "../team";
import About from "../about";
import Services from "../services";
import Blog from "../blog";
import Contact from "../contact";
import Request from "../request";
import Magneto from "../products/magneto";
import Cloud from "../products/cloud";
import ProcessForce from "../products/processforce";
import Byd from "../products/byd";
import BusinessOne from "../products/buisnessone";
import Crystal from "../products/crystal";
import COO from "../products/cco";
const Navbar = () => {
  return (
    <BrowserRouter>
      <div className="navibar">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="" height="50px" />
          </Link>
        </div>
        <div className="links">
          <ul>
            <li className="link">
              <Link to="/"> Home</Link>
            </li>
            <li className="link">
              <Link>About Us</Link>
              <div className="dropdowns">
                <Link to="about">Our Company</Link>
                <Link to="team">Our Team</Link>
              </div>
            </li>
            <li className="link">
              <Link to="services">Our Services</Link>
            </li>
            <li className="link">
              <a className="linka">Products</a>
              <div className="dropdowns">
                <Link to="products/magneto">Magento eCommerce</Link>
                <Link to="products/sap-cloud">SAP Analytics Cloud</Link>
                <Link to="products/byd">SAP Business ByDesign</Link>
                <Link to="products/b1">SAP Business One</Link>
                <Link to="products/crystal-report">SAP Crystal Report</Link>
                <Link to="products/cco">SAP Customer Checkout</Link>
                <Link to="products/process-force">Computec ProcessForce</Link>
              </div>
            </li>
            <li className="link">
              <Link to="blog">Blog</Link>
            </li>
          </ul>
        </div>
        <div className="actions">
          <Link to="contact">
            <button id="contact">Contact Us</button>
          </Link>
          <Link to="request">
            <button id="demo">Request Demo</button>
          </Link>
        </div>
      </div>

      <Routes>
        <Route path="/" element={<Navbar />} />
        <Route index element={<Home />} />
        <Route path="team" element={<Team />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="blog" element={<Blog />} />
        <Route path="contact" element={<Contact />} />
        <Route path="request" element={<Request />} />
        <Route path="products/magneto" element={<Magneto />} />
        <Route path="products/sap-cloud" element={<Cloud />} />
        <Route path="products/process-force" element={<ProcessForce />} />
        <Route path="products/byd" element={<Byd />} />
        <Route path="products/b1" element={<BusinessOne />} />
        <Route path="products/crystal-report" element={<Crystal />} />
        <Route path="products/cco" element={<COO />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Navbar;
