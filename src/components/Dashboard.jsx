import React, { useEffect, useState } from "react";
import { getFirestore, collection, query, where, getDocs } from "firebase/firestore";
import { useLocation } from "react-router-dom";
import app from "../main"; // Ensure this is the correct import for Firebase initialization
import "../Dashboard.css";

export default function Dashboard() {
  const db = getFirestore(app);
  const location = useLocation();
  const userData = location.state || {}; // Safely handle undefined state
  const [userInfo, setUserInfo] = useState(null); // State to store user info

  async function updateUserLanguageByEmail(email) {
    try {
      const userQuery = query(collection(db, "users"), where("email", "==", email));
      const querySnapshot = await getDocs(userQuery);

      if (querySnapshot.empty) {
        console.log("No user found with this email");
        return null;
      }

      // Get the first matching user document (assuming email is unique)
      let userDoc = null;
      querySnapshot.forEach((doc) => {
        userDoc = doc.data(); // Extract the user's data
      });

      return userDoc; // Return the user data
    } catch (error) {
      console.error("Error updating user language:", error);
    }
  }

  useEffect(() => {
    const fetchUserData = async () => {
      if (userData.email) {
        const userInfo = await updateUserLanguageByEmail(userData.email);
        setUserInfo(userInfo);
      }
    };

    fetchUserData();
  }, [userData.email]);

  if (!userInfo) {
    return <div>Loading...</div>; // Show a loading state until data is fetched
  }

  return (
    <div>
      <h1>Hi, welcome back {userInfo.name}</h1>

      <div className="grid-container">
        <div className="grid-item">
          <img
            src="https://www.svgrepo.com/show/102841/coin.svg"
            alt="Coin Icon"
            className="icon"
          />
          Points<span className="num">{userInfo.Points}</span>
        </div>
        <div className="grid-item">
          <img
            src="https://www.svgrepo.com/show/6230/clock.svg"
            alt="Clock Icon"
            className="icon"
          />
          Meetings Completed<span className="num">{userInfo.meetingsCompleted || 0}</span>
        </div>
        <div className="grid-item">
          <img
            src="https://www.svgrepo.com/show/311063/person.svg"
            alt="Friend Icon"
            className="icon"
          />
          Friends Made<span className="num">{userInfo.friendsMade || 0}</span>
        </div>
        <div className="grid-item">
          <img
            src="https://cdn-icons-png.flaticon.com/512/118/118221.png"
            alt="Language Icon"
            className="icon"
          />
          Target Language <span className="num">{userInfo.languageLearn || "N/A"}</span>
        </div>
      </div>
    </div>
  );
}
