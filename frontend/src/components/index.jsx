
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";
import students from "../data/data.js";

function Index() {
  const savedData = JSON.parse(
    localStorage.getItem("data") || "{}"
  );

const updatedData = { ...students };

Object.keys(savedData).forEach((key) => {
  updatedData[key] = {
    ...(students[key] || {}),
    ...savedData[key]
  };
});

localStorage.setItem("data", JSON.stringify(updatedData));

  localStorage.setItem("data", JSON.stringify(updatedData));
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [invalid, setInvalid] = useState(false);
  
  const navigate = useNavigate();

  const handleLoginButton = (e) => {
    e.preventDefault();
    const user = students[userId];

    if (user && user.password === password) {
      setInvalid(false);

      localStorage.setItem("isLogedIn", "true");
      localStorage.setItem("id", userId);

      console.log("Login Done");

      navigate("/home");
    } else {
      setInvalid(true);
      console.log("Invalid UserId or Password");
    }
  };

  return (
    <>
      <h2 className="head">LOGIN</h2>

      <div className="indexhero">
        <div className="welcomemsg">
          <h1>Welcome to Campus Companion</h1>

          <p>
            Campus-Companion is a smart student portal designed to
            simplify campus life. It provides attendance tracking,
            timetables, academic results, notices, assignments,
            event updates, fee information and others in one place.
            The platform helps students stay organized, connected,
            and informed through an intuitive and user-friendly
            interface.
          </p>
        </div>

        <div className="loginbutton">
          <h2>Login</h2>

          <form onSubmit={handleLoginButton}>
            <input
              type="text"
              placeholder="Enter your roll number"
              value={userId}
              onChange={(e) => {
                setUserId(e.target.value);
                setInvalid(false);
              }}
              required
            />

            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setInvalid(false);
              }}
              required
            />

            {invalid && (
              <h6
                style={{
                  color: "red",
                  marginTop: "0px"
                }}
              >
                Invalid UserId or Password
              </h6>
            )}

            <button type="submit">Login</button>
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
          <img
            src="/src/assets/logo/full_logo.png"
            alt="Campus Companion Logo"
          />
        </div>
      </div>
    </>
  );
}

export default Index;
