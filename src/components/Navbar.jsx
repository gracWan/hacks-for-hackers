import { useState } from "react";
import { Link } from "react-router-dom";
import Camera from "../images/video-camera.png";
import LongLogo from "../images/long_logo.png";
import SideNav from "./SideNav";
import Entry from "./Entry";
import { getFirestore, collection, query, where, getDocs } from "firebase/firestore"; // Firebase imports
import app from "../main"; // Assuming the Firebase app is initialized in main.js

export default function Navbar() {
  const [language, setLanguage] = useState("");
  const [holder, setHolder] = useState([]); // To store fetched data

  const handleClick = async (e) => {
    e.preventDefault(); // Prevent the default form submission

    const db = getFirestore(app); // Initialize Firestore

    try {
      // Query to fetch users where the language matches the entered value
      const q = query(collection(db, "users"), where("language", "==", language));
      const querySnapshot = await getDocs(q);
      const tempHolder = [];

      querySnapshot.forEach((doc) => {
        tempHolder.push({ id: doc.id, ...doc.data() }); // Collect the data
      });

      setHolder(tempHolder); // Update the state with fetched data
    } catch (error) {
      console.error("Error fetching collection:", error);
    }
  };

  return (
    <>
      <SideNav />
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={LongLogo} alt="Logo" width="180" height="50" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/hacks-for-hackers/Meeting">
                  <img
                    src={Camera}
                    alt="camera icon by Kiranshastry"
                    className="icons"
                    aria-current="page"
                  />
                </Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Languages to learn..."
                aria-label="Search"
                value={language}
                onChange={(e) => setLanguage(e.target.value)} // Update the language state
              />
              <button className="btn btn-outline-success" type="submit" onClick={handleClick}>
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
      <div>
        {/* Render the fetched users here */}
        {holder.map((data) => (
          <Entry
            key={data.id}
            name={data.name}
            language={data.language}
            languageLearn={data.languageLearn} // Include languageLearn in Entry component
        />
        ))}
      </div>
    </>
  );
}
