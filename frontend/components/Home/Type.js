import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Cyber Security Engineer",
          "Cloud Architect",
          "DevOps Orchestrator",
          "Vulnerability Strategist",
          "GRC Sentinel",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
