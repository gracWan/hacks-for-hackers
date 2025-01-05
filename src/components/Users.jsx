import { useEffect, useState } from "react";
import { getFirestore, collection, getDocs, query, where, doc, updateDoc } from "firebase/firestore";
import app from "../main";
import Entry from "./Entry";

export default function Users(props) {
  const db = getFirestore(app);
  const [holder, setHolder] = useState([]); // State to store the fetched data
  const [modifiedHolder, setModifiedHolder] = useState([]); // State to store the JSX

  console.log(props.email)

  // Function to update user language by email
  async function updateUserLanguageByEmail(email) {
    try {
      // Query to fetch the user by email, but only get the 'language' field
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
  
      return userDoc.language; // Return the language field for comparison
    } catch (error) {
      console.error("Error updating user language:", error);
    }
  }

  useEffect(() => {
    const updateAndFetchData = async () => {
      // First, call updateUserLanguageByEmail before fetching the data
      const userLanguage = await updateUserLanguageByEmail(props.email);
  

      if (!userLanguage) {
        return;
      }

      // Then, fetch the data based on the fetched user language
      try {
        const q = query(collection(db, "users"), where("language", "==", userLanguage));
        const querySnapshot = await getDocs(q);
        const tempHolder = [];

        querySnapshot.forEach((doc) => {
          tempHolder.push({ id: doc.id, ...doc.data() }); // Collect data
        });

        setHolder(tempHolder); // Update the holder state

        // Create JSX for modifiedHolder, including the `languageLearn` field
        const tempModifiedHolder = tempHolder.map((data) => (
          <Entry
            key={data.id}
            name={data.name}
            language={data.language}
            languageLearn={data.languageLearn}
          />
        ));
        setModifiedHolder(tempModifiedHolder); // Update the modifiedHolder state
      } catch (error) {
        console.error("Error fetching collection:", error);
      }
    };

    updateAndFetchData(); // Call the combined function

  }, [props.email]); // Add props.email to the dependency array to trigger updates when it changes

  return (
    <div>
      {modifiedHolder}
    </div>
  );
}
