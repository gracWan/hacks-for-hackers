import { useEffect, useState } from "react";
import { getFirestore, collection, getDocs, query, where } from "firebase/firestore";
import app from "../main";
import Entry from "./Entry";

export default function Users() {
  const db = getFirestore(app);
  const [holder, setHolder] = useState([]); // State to store the fetched data
  const [modifiedHolder, setModifiedHolder] = useState([]); // State to store the JSX

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Query to fetch only users where language is 'English'
        const q = query(collection(db, "users"), where("language", "==", "English"));
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
            languageLearn={data.languageLearn} // Include languageLearn in Entry component
          />
        ));
        setModifiedHolder(tempModifiedHolder); // Update the modifiedHolder state
      } catch (error) {
        console.error("Error fetching collection:", error);
      }
    };

    fetchData(); // Call the async function
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <div>
      {modifiedHolder}
    </div>
  );
}
