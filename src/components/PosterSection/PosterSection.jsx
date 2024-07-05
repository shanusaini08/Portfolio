import React, { useEffect, useRef } from 'react';
import './PosterSection.css';
import backgroundVideo from '../../assets/posters/background-video-2.mp4';

const PosterSection = () => {
  const textLines = [
    "Arcoiris Logics: Innovating with cutting-edge technologies.",
    "Your Ideas + Our Knowledge = Highest Levels of Client Success."
  ];

  const textRef = useRef(null);
  let currentLineIndex = 0;
  let currentCharacter = 0;
  let isDeleting = false;

  useEffect(() => {
    const typeWriter = () => {
      const currentText = textLines[currentLineIndex];
      if (!isDeleting && currentCharacter <= currentText.length) {
        textRef.current.innerHTML = currentText.substring(0, currentCharacter);
        currentCharacter++;
      } else if (isDeleting && currentCharacter >= 0) {
        textRef.current.innerHTML = currentText.substring(0, currentCharacter);
        currentCharacter--;
      }

      if (!isDeleting && currentCharacter > currentText.length) {
        isDeleting = true;
        setTimeout(() => {
          typeWriter();
        }, 500);
      } else if (isDeleting && currentCharacter === 0) {
        isDeleting = false;
        currentLineIndex = (currentLineIndex + 1) % textLines.length;
        setTimeout(() => {
          typeWriter();
        }, 500);
      } else {
        setTimeout(typeWriter, 100);
      }
    };

    typeWriter();
  }, []);

  return (
    <div id="home" className="poster">
      <video autoPlay loop muted>
        <source src={backgroundVideo} type="video/mp4" />
      </video>
      <div className="poster-section">
        <div className="poster-slide">
          <div className="poster-text-overlay">
            <p ref={textRef} className="typewriter-text"></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PosterSection;
