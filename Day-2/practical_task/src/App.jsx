import { Routes, Route, Link } from "react-router-dom";

import Empsalary from "./components/Empsalary";
import FormValidation from "./components/FormValidation";
import Markgrade from "./components/Markgrade";
import ProductCalc from "./components/ProductCalc";
import Todo from "./components/Todo";
import UserFetch from "./components/UserFetch";

function App() {
  const navStyle = {
    display: "flex",
    gap: "15px",
    alignItems: "center",
    padding: "12px 20px",
    backgroundColor: "#f9fafb",
    boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
    fontFamily: "Arial, sans-serif",
    fontSize: "15px",
  };

  const linkStyle = {
    textDecoration: "none",
    color: "#333",
    padding: "6px 10px",
    borderRadius: "6px",
    transition: "0.3s",
  };

  const hoverStyle = {
    backgroundColor: "#4f46e5",
    color: "white",
  };

  return (
    <div>

      <nav style={navStyle}>
        <Link to="/salary" style={linkStyle}>Salary</Link>
        <Link to="/form" style={linkStyle}>Form</Link>
        <Link to="/grade" style={linkStyle}>Grade</Link>
        <Link to="/product" style={linkStyle}>Product</Link>
        <Link to="/todo" style={linkStyle}>Todo</Link>
        <Link to="/users" style={linkStyle}>Users</Link>
      </nav>

      <hr />

      <Routes>
        <Route path="/salary" element={<Empsalary />} />
        <Route path="/form" element={<FormValidation />} />
        <Route path="/grade" element={<Markgrade />} />
        <Route path="/product" element={<ProductCalc />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/users" element={<UserFetch />} />
      </Routes>

    </div>
  );
}

export default App;