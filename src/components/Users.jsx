import { useEffect, useState } from "react";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import app from "../main";
import Entry from "./Entry";

export default function Users() {
  const db = getFirestore(app);
  const [holder, setHolder] = useState([]); // State to store the fetched data
  const [modifiedHolder, setModifiedHolder] = useState([]); // State to store the JSX

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "users"));
        const tempHolder = [];
        
        querySnapshot.forEach((doc) => {
          tempHolder.push({ id: doc.id, ...doc.data() }); // Collect data
        });

        console.log("Holder array:", tempHolder);
        setHolder(tempHolder); // Update the holder state

        // Create JSX for modifiedHolder
        const tempModifiedHolder = tempHolder.map((data) => (
          <Entry key={data.id} name={data.name} language={data.language} languageLearn={data.languageLearn}/>
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