import { Link } from "react-router-dom";
import { useState } from "react";
import LongLogo from "../images/long_logo.png";
import { getAuth } from "firebase/auth";
import { signInWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import app from "../main";
import { useNavigate } from "react-router-dom";

export default function Login(){
  const auth = getAuth(app);
  const navigate = useNavigate();
  const [email, setEmail] = useState(""); // State to store the email input value
  const [password, setPassword] = useState(""); // State to store the password input value
  const handleClick = async () => {  // Marked as async here
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log("User Info:", user);

      // If email is not verified, send verification email
      if (!user.emailVerified) {
        await sendEmailVerification(user);
        console.log("Verification email sent.");
      }

      const userData = {
        email,
      };

      // Navigate to the home page
      navigate("/hacks-for-hackers/Home/Dashboard", {state: userData});
    } catch (error) {
      console.error("Error signing in:", error.message);
      setError(error.message); // Set the error state to display error message
    }
  };
    return (
    <section className="h-100 gradient-form no-scrollbar" style={{ backgroundColor: "#eee" }}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-xl-10">
            <div className="card rounded-3 text-black">
              <div className="row g-0">
                <div className="col-lg-6">
                  <div className="card-body p-md-5 mx-md-4">
                    <div className="text-center">
                      
                      <h4 className="mt-1 mb-5 pb-1">We are  

                      <img
                        src={LongLogo}
                        style={{ width: "185px" }}
                        alt="logo"
                      />
                      </h4>
                    </div>

                    <form>
                      <p>Please login to your account</p>

                      <div data-mdb-input-init className="form-outline mb-4">
                        <input
                          type="email"
                          id="form2Example11"
                          className="form-control"
                          placeholder="email address"
                          value={email} onChange={(e) => setEmail(e.target.value)}
                        />
                        <label className="form-label" htmlFor="form2Example11">
                          
                        </label>
                      </div>

                      <div data-mdb-input-init className="form-outline mb-4">
                        <input
                          type="password"
                          id="form2Example22"
                          className="form-control"
                          placeholder="Password"
                          value={password} onChange={(e) => setPassword(e.target.value)}
                        />
                        <label className="form-label" htmlFor="form2Example22">
                        </label>
                      </div>

                      <div className="text-center pt-1 mb-5 pb-1">
                        <button
                          data-mdb-button-init
                          data-mdb-ripple-init
                          className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3"
                          type="button"
                          onClick = {handleClick}
                        >
                          Log in
                        </button>
                        <br></br>

                        <a className="text-muted" href="#!">
                          Forgot password?
                        </a>
                      </div>

                      <div className="d-flex align-items-center justify-content-center pb-4">
                        <p className="mb-0 me-2">Don't have an account?</p>
                         <Link to ="/hacks-for-hackers/Register">
                          Create new
                         </Link> 
                      </div>
                    </form>
                  </div>
                </div>
                <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
                  <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                    <h4 className="mb-4">Pitch title here</h4>
                    <p className="small mb-0">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    )
}
