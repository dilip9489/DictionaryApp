import React, { useState } from "react";

const XDictionary = () => {
  
  const [dictionary] = useState([
    { word: "React", meaning: "A JavaScript library for building user interfaces." },
    { word: "Component", meaning: "A reusable building block in React." },
    { word: "State", meaning: "An object that stores data for a component." },
  ]);

   
  const [searchTerm, setSearchTerm] = useState("");
  const [result, setResult] = useState("");

   
  const handleSearch = () => {
    if (!searchTerm.trim()) {
        setResult("Word not found in the dictionary.");
        return;
      }
      const searchResult = dictionary.find(
        (entry) => entry.word.toLowerCase() === searchTerm.toLowerCase()
      );
      setResult(searchResult ? searchResult.meaning : "Word not found in the dictionary.");
    };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif", textAlign:"left"}}>
      <h1>Dictionary App</h1>
      <div style={{ marginBottom: "10px" }}>
        <input
          type="text"
          placeholder="Search for a word..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            padding: "10px",
            fontSize: "16px",
            width: "300px",
            marginRight: "10px",
            borderRadius:"5px",
             border:"1px solid gray"
          }}
        />
        <button
          onClick={handleSearch}
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            cursor: "pointer",
            borderRadius:"5px",
          }}
        >
          Search
        </button>
        {/* <h1 style={{fontSize:"16px", fontFamily: "Arial, sans-serif"}}>Definition:</h1> */}
      </div>
      <h1 style={{fontSize:"16px", fontFamily: "Arial, sans-serif"}}>Definition:</h1>
      {result && (   
         <p
          style={{
            marginTop: "20px",
            fontSize: "18px",
            color: result === "Word not found in the dictionary." ? "red" : "black",
          }}
        >
          {result}
        </p>
        
          
        
      )}
    </div>
  );
};

export default XDictionary;
