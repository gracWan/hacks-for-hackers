import { useNavigate } from "react-router-dom";

export default function SideNav(props) {
    const navigate = useNavigate();

    const handleClickLearn = async () => {  // Marked as async here
        try {
          navigate("/hacks-for-hackers/Home/Learn", { state: { email: props.email, purpose: "learn" }});
        } catch (error) {
          console.error("Error signing in:", error.message);
          setError(error.message); // Set the error state to display error message
        }
      };

      const handleClickTeach = async () => {
        try {
          navigate("/hacks-for-hackers/Home/Teach", { state: { email: props.email, purpose: "teach" }});
        } catch (error) {
          console.error("Error signing in:", error.message);
          setError(error.message); // Set the error state to display error message
        }
      };
    return (
        <>
            <div className="sidenav">
                <div className="sidenavComponents" onClick = {handleClickLearn} style={{ writingMode: "sideways-lr" }}>Learn</div>
                <div className="sidenavComponents" onClick = {handleClickTeach} style={{ writingMode: "sideways-lr" }}>Teach</div>
            </div>
        </>
    );
}
