import React, { useState } from "react";
import axios from "axios";
import { Link, Navigate, useNavigate } from "react-router-dom";
import "./login.css";

function SignupPage() {
  const navigate = useNavigate();
  const [state, setState] = useState({
    name: "",
    email: "",

    password: "",
  });

  const [type, setType] = useState("volunteer");
  const [login, setLogin] = useState("");
  const [token, setToken] = useState("");
  const [loginorg, setLoginorg] = useState("");
  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit1 = (e) => {
    e.preventDefault();
     navigate("/home");
    console.log(type, state);
    axios
      .post(
        "https://bon-appetit-server.alapanoski.repl.co/api/auth/" +
          type +
          "/signup",
        state
      )
      .then((res) => {
        if (res.data.message) {
          setToken(res.data.token);
          console.log(res.data.token);
          window.localStorage.setItem("token", res.data.token);
          window.localStorage.setItem("auth", "true");
          window.localStorage.setItem("name", state.name);

         
          setLogin(res.data.message);
          window.location.reload();
        }

        console.log(res);
        // handle success
      })
      .catch((err) => {
        console.log(err);
        setLogin("User already Exists", err.message);

        // handle error
      });
  };

  const handleType = (e) => {
    setType(e.target.value);
  };
  //create a drop down with 2 options

  return (
    <div className="signupcontainer">
      <div className="Aboutcard">
        <img src="https://cdn.dribbble.com/userupload/3233940/file/original-1aebc3199e1fa1b0c5a5337a6424ea9f.png"></img>
      </div>
      <div className="signupcard">
        <form className="signupform" onSubmit={handleSubmit1}>
          <div className="featuredItem2-top-top1 ">
   
            <p color="#000">
              <span className="funky-font" color="#000">F3TCH</span>
            </p>
          </div>
          <br></br>
          <h5 className="signupheading funky-font1">Login </h5>
          <div className="asdf">
            <label className=""></label>
            <input
              type="name"
              name="name"
              placeholder="John Doe"
              value={state.name}
              onChange={handleChange}
              className=""
              required
            />
     

            <input
              type="password"
              name="password"
              placeholder="Password"
              value={state.password}
              onChange={handleChange}
              className=""
              required
            />

            <button type="submit" className="">
            Login
            </button>
         

            <p className="text-black">{login}</p>
          </div>
        </form>
      </div>

      <div>
        <p>{loginorg}</p>
      </div>
    </div>
  );
}

export default SignupPage;
