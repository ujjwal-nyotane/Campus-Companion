
import { useEffect, useState, } from "react";
import "./css/index.css";
import Navbar from "./navbar";
import ProtectedRoute from "./ProtectedRoutes";
import { Navigate, useNavigate } from "react-router-dom";
import fulllogo from '../assets/logo/full_logo.png';

function Index() {

  const [userId, setUserId] = useState("")
  const [invalid, setinvalid] = useState(false)
  const [password, setPassword] = useState("")
  const data = JSON.parse(localStorage.getItem("data"))

  useEffect(() => {
    if (localStorage.getItem("isLogedIn") && JSON.parse(localStorage.getItem("isLogedIn"))) {
      if (localStorage.getItem("Role") == "Student")
        navigate("/dashboard");
      if (localStorage.getItem("Role") == "Faculty")
        navigate("/f-dashboard");
    }
  }, [])

  const navigate = useNavigate();
  const handleLoginButton = (e) => {
    e.preventDefault();


    if (data[userId] && data[userId].password == password) {
      setinvalid(false)
      localStorage.setItem("isLogedIn", JSON.stringify(true));
      localStorage.setItem("id", JSON.stringify(userId));
      const role = data[userId].Role;

      localStorage.setItem("Role", role);
      
      if (role == "Student") {
        console.log("switch")
        navigate("/dashboard")
      }
      if (role == "Faculty"){
        console.log("switch")
        navigate("/f-dashboard")
      }
      console.log("Login Done")

    }
    else {
      console.log("error");
      setinvalid(true);
    }
  }
  return (
    <>
      <h2 className="head">LOGIN</h2>
      <div className="indexhero">
        <div className="welcomemsg">
          <h1>Welcome to Campus Companion</h1>
          <p>
            Campus-Companion is a smart student portal designed to simplify
            campus life. It provides attendance tracking, timetables, academic
            results, notices, assignments, event updates, fee information and
            others in one place. The platform helps students stay organized,
            connected, and informed through an intuitive and user-friendly
            interface.
          </p>
        </div>
        <div className="loginbutton">
          <h2>Login</h2>
          <form>


            <input type="text" placeholder="Enter email or user id" onChange={(e) => { setUserId(e.target.value) }}></input>
            <input type="password" placeholder="Enter your password" onChange={(e) => { setPassword(e.target.value) }}></input>

            {invalid && <h6 style={{ "color": "red", "marginTop": "0px" }}>Invalid UserId or Password</h6>}

            <button onClick={handleLoginButton}> Login </button>
          </form>

        </div>
      </div>
      <div className="performance">
        <div>
          <div>
            <h2>99%</h2>
            <h3>Uptime</h3>
          </div>
          <div>
            <h2>2ms</h2>
            <h3>Response Time</h3>
          </div>
          <div>
            <h2>100%</h2>
            <h3>Secure</h3>
          </div>
        </div>
        <div>
          <img src={fulllogo}></img>
        </div>
      </div>
    </>
  );
}
export default Index;
