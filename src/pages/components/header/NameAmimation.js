import React, { useEffect, useState } from "react";

export default function NameAnimation() {
  const [name, setName] = useState("");
  const fullName = `
Hi there! My name is Long Nguyen
Full Stack Engineer
Computer Engineering @ York University '23
Toronto, ON
Seeking for Software or Data Engineer opportunities.
I am willing to relocate.`;

  useEffect(() => {
    let index = 0;
    let intervalId;

    const animateName = () => {
      if (index < fullName.length - 1) {
        setName((prevName) => prevName + fullName[index]);
        index++;
      } else {
        clearInterval(intervalId);
      }
    };

    intervalId = setInterval(animateName, 70); // Adjust the interval duration for the desired speed

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const lines = name.split("\n").map((line, index) => {
    let fontSize = "30px"; // Default font size
    if (window.innerWidth <= 1024) {
      fontSize = "20px"; // Font size for medium devices
    }
    if (window.innerWidth <= 768) {
      fontSize = "15px"; // Font size for small devices
    }
    if (window.innerWidth <= 390) {
      fontSize = "10px"; // Font size for extra small devices
    }

    return (
      <div key={index} style={{ marginBottom: "50px", fontSize }}>
        {line}
      </div>
    );
  });

  return (
    <div className="name-animation-container">
      <div className="text" style={{ whiteSpace: "pre-wrap" }}>{lines}</div>
    </div>
  );
}
