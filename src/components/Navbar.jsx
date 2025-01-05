import { Link } from "react-router-dom";
import Camera from "../images/video-camera.png";
import LongLogo from "../images/long_logo.png";
import SideNav from "./SideNav";

export default function Navbar() {
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
          </div>
        </div>
      </nav>
    </>
  );
}
