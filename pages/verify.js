import { useState } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../lib/firebase";

export default function VerifyVoter() {
  const [voterId, setVoterId] = useState("");
  const [voterData, setVoterData] = useState(null);

  const handleSearch = async () => {
    const q = query(collection(db, "voters"), where("nationalId", "==", voterId));
    const querySnapshot = await getDocs(q);
    const results = [];
    querySnapshot.forEach((doc) => results.push(doc.data()));
    setVoterData(results[0] || null);
  };

  return (
    <div>
      <h1>Voter Verification</h1>
      <input 
        type="text" 
        placeholder="Enter National ID" 
        onChange={(e) => setVoterId(e.target.value)} 
      />
      <button onClick={handleSearch}>Search</button>
      {voterData && (
        <div>
          <p>Name: {voterData.name}</p>
          <p>District: {voterData.district}</p>
          <p>Status: Registered</p>
        </div>
      )}
    </div>
  );
}
