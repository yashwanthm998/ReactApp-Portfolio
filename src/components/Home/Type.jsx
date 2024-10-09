import React from "react";
import Typewriter from "typewriter-effect";

const Type = () => {
    return (
        <Typewriter
          options={{
            strings: [
              "Python Full Stack Developer",
              "Programmer"
              
            ],
            autoStart: true,
            loop: true,
            deleteSpeed: 30,
          }}
        />
      )
}

export default Type