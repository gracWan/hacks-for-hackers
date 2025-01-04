import DefaultImg from "../images/DefaultImg.jpg";

export default function User() {
  return (
    <article className = "UserEntry">
      <img src={DefaultImg} alt="User Profile" className = "UserProfile"/>
      <span>Username:</span>
      <span>Languages:</span>
    </article>
  );
}
