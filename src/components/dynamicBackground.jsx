import React from "react";
import "../styles/back.css";

function GlowingSquaresBackground() {
  const squaresCount = 50; 
  const squares_left = Array.from({ length: squaresCount });
  const squares_right = Array.from({ length: squaresCount });

  return (
    <div className="glowing-background">
     
      {squares_left.map((_, i) => {
        const size = Math.random() * 100 + 50; 
        const top = Math.random() * 200 + "%"; 

        const left = Math.random() * 50 + "%"; 
        const color = `rgba(${Math.floor(Math.random() * 255)}, 
                            ${Math.floor(Math.random() * 255)}, 
                            ${Math.floor(Math.random() * 255)}, 0.3)`;

        return (
          <div
            key={`left-${i}`}
            className="square"
            style={{
              width: `${size}px`,
              height: `${size / 2}px`,
              top,
              left,
              backgroundColor: color,
            }}
          ></div>
        );
      })}


       
     
    </div>
  );
}

export default GlowingSquaresBackground;
