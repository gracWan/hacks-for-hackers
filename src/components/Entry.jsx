import DefaultImg from "../images/DefaultImg.jpg";

export default function Entry(props) {
  return (
    <article className="UserEntry">
      <img 
        src={DefaultImg} 
        alt="User Profile" 
        className="UserProfile" 
      />
      <div className="UserDetails">
        <span>Username: {props.name}</span>
        <span>Languages: {props.language || "Not Specified"}</span>
      </div>
    </article>
  );
}
