import { Link } from "react-router-dom";
import "./index.css";
function Index() {
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
          <Link to="/f-dashboard">Faculty</Link>
          <Link to="/home">Student</Link>
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
                <img src="./src/assets/logo/full_logo.png"></img>
            </div>
      </div>
    </>
  );
}
export default Index;
