import "./button.jsx.css";
import { Link, Routes, Route, useNavigate } from "react-router-dom";
import Request from "../request";

const Button = () => {
  const navigate = useNavigate();
  const navtoRequest = () => {
    navigate("/request");
  };
  return (
    <>
      <button className="uni-button" onClick={navtoRequest}>
        Request Demo
      </button>

      <Routes>
        <Route path="/request" element={<Request />} />
      </Routes>
    </>
  );
};

export default Button;
