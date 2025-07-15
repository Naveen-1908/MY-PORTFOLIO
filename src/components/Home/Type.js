import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <div
      style={{
        fontFamily: '"Segoe UI Emoji", "Noto Color Emoji", "Apple Color Emoji", sans-serif',
        fontSize: "24px", // optional
        fontWeight: "bold", // optional
        color: "white", // adjust for your theme
      }}
    >
      <Typewriter
        options={{
          strings: [
            " Software Developer",
            " Java Enthusiast",
            " Junior Web Developer",
            " Fast Learner",
            " Passionate Coder"
          ],
          autoStart: true,
          loop: true,
          deleteSpeed: 50,
        }}
      />
    </div>
  );
}



export default Type;
