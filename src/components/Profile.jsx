import Chat from "../images/chat-icon.png";
import { Link } from "react-router-dom";

export default function Profile(props) {
    return (
      <section className="vh-100" >
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-xl-10">
              <div className="card mb-5" style={{ borderRadius: '15px' }}>
                <div className="card-body p-4">
                  <h3 className="mb-3">{props.name}</h3>
                  <hr className="my-4" />
                  <div className="d-flex justify-content-start align-items-center">
                    <p className="mb-0 text-uppercase">
                      <i className="fas fa-cog me-2"></i> <span className="text-muted small">settings</span>
                    </p>
                    <Link to = "/hacks-for-hackers/Message">
                    <img src = {Chat} className="profileIcons"/>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }  

  /*<a href="#!">
                    
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-2.webp"
                        alt="avatar"
                        className="img-fluid rounded-circle me-3"
                        width="35"
                      />
                    </a>
                    <button
                      type="button"
                      data-mdb-button-init
                      data-mdb-ripple-init
                      className="btn btn-outline-dark btn-sm btn-floating"
                    >
                      <i className="fas fa-plus text-body"></i>
                    </button>*/