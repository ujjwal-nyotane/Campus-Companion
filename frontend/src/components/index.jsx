
import { useState, } from "react";
import "./index.css";


function Index() {
  const [userId,setUserId]= useState("")
  const [invalid,setinvalid]=useState(false)
  const [password,setPassword]= useState("")
  const data = JSON.parse(localStorage.getItem("data"))
  const handleLoginButton = (e)=>{
    e.preventDefault();

    
    if(data[userId] && data[userId].password==password){
      setinvalid(false)
      localStorage.setItem("isLogedIn",JSON.stringify(true));
      localStorage.setItem("id",JSON.stringify(userId));
      setTimeout(()=>{
        window.location.pathname="/"
      },200) 
      console.log("Login Done")
      
    }
    else{
      console.log("error");
      setinvalid(true)
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
            
            
            <input type="text" placeholder="Enter email or user id" onChange={(e)=>{setUserId(e.target.value)}}></input>
            <input type="password" placeholder="Enter your password" onChange={(e)=>{setPassword(e.target.value)}}></input>
            
              {invalid && <h6 style={{"color":"red","marginTop":"0px"}}>Invalid UserId or Password</h6>}
            
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
                <img src="./src/assets/logo/full_logo.png"></img>
            </div>
      </div>
    </>
  );
}
export default Index;
