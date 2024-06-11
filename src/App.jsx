import React, { useState, useEffect } from "react";

function TrafficLight() {
  const [color, setColor] = useState("red");

  useEffect(() => {
    const interval = setInterval(() => {
      switch (color) {
        case "red":
          setColor("green");
          setTimeout(() => setColor("yellow"), 3000);
          break;
        case "yellow":
          setColor("red");
          break;
        case "green":
          setColor("yellow");
          setTimeout(() => setColor("red"), 500);
          break;
        default:
          setColor("red");
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [color]);

  return (
    <div style={{ textAlign: "center" }}>
      <div
        style={{
          width: "100px",
          height: "300px",
          border: "1px solid black",
          borderRadius: "10px",
          margin: "50px auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            width: "80px",
            height: "80px",
            backgroundColor: color === "red" ? "red" : "grey",
            borderRadius: "50%",
          }}
        ></div>
        <div
          style={{
            width: "80px",
            height: "80px",
            backgroundColor: color === "yellow" ? "yellow" : "grey",
            borderRadius: "50%",
          }}
        ></div>
        <div
          style={{
            width: "80px",
            height: "80px",
            backgroundColor: color === "green" ? "green" : "grey",
            borderRadius: "50%",
          }}
        ></div>
      </div>
    </div>
  );
}

export default TrafficLight;
