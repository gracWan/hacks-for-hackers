import { Link } from "react-router-dom";
import React, { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import app from "../main";

export default function Login(){
  const auth = getAuth(app);
  const [name, setName] = useState(""); // State to store the name input value
  const [email, setEmail] = useState(""); // State to store the email input value
  const [password, setPassword] = useState(""); // State to store the password input value
  const [ConfirmPass, setConfirmPass] = useState(""); // State to store the password input value
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission

    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("ConfirmPassword:", ConfirmPass);

    try {
      // Create a new user with email and password
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log("User registered:", user);
      navigate("/hacks-for-hackers")
    } catch (error) {
      //setError(error.message); // Handle errors (e.g., email already in use)
      console.error("Error registering user:", error.message);
    }

    setName("");
    setEmail("");
    setPassword("");
    setConfirmPass("");
  };
  
  return (
        <section
  className="vh-100 bg-image"
  style={{
    backgroundImage: "url('https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp')",
  }}
>
  <div className="mask d-flex align-items-center h-100 gradient-custom-3">
    <div className="container h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-12 col-md-9 col-lg-7 col-xl-6">
          <div className="card" style={{ borderRadius: "15px" }}>
            <div className="card-body p-5">
              <h2 className="text-uppercase text-center mb-5">Create an account</h2>

              <form onSubmit={handleSubmit}>
                <div data-mdb-input-init className="form-outline mb-4">
                  <input type="text" id="form3Example1cg" className="form-control form-control-lg" value ={name} onChange={(e) => setName(e.target.value)}/>
                  <label className="form-label" htmlFor="form3Example1cg">Your Name</label>
                </div>

                <div data-mdb-input-init className="form-outline mb-4">
                  <input type="email" id="form3Example3cg" className="form-control form-control-lg" value={email} onChange={(e) => setEmail(e.target.value)}/>
                  <label className="form-label" htmlFor="form3Example3cg">Your Email</label>
                </div>

                <div data-mdb-input-init className="form-outline mb-4">
                  <input type="password" id="form3Example4cg" className="form-control form-control-lg" value={password} onChange={(e) => setPassword(e.target.value)}/>
                  <label className="form-label" htmlFor="form3Example4cg">Password</label>
                </div>

                <div data-mdb-input-init className="form-outline mb-4">
                  <input type="password" id="form3Example4cdg" className="form-control form-control-lg" value={ConfirmPass} onChange={(e) => setConfirmPass(e.target.value)}/>
                  <label className="form-label" htmlFor="form3Example4cdg">Repeat your password</label>
                </div>

                <div className="d-flex justify-content-center">
                  <button
                    type="submit"
                    data-mdb-button-init
                    data-mdb-ripple-init
                    className="btn btn-success btn-block btn-lg gradient-custom-4 text-body"
                  >
                    Register
                  </button>
                </div>

                <p className="text-center text-muted mt-5 mb-0">
                  Have already an account? <Link to = "/hacks-for-hackers"className="fw-bold text-body"><u>Login here</u></Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    )
}