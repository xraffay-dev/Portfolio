import { useEffect, useState } from 'react';
import './HeroSection.css';

const tagline = "Full-Stack Developer  ·  Systems Architect  ·  Open Source Enthusiast";

const HeroSection = () => {
  const [typedText, setTypedText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    setShowContent(true);
    
    let index = 0;
    const typeInterval = setInterval(() => {
      if (index < tagline.length) {
        setTypedText(tagline.substring(0, index + 1));
        index++;
      } else {
        clearInterval(typeInterval);
      }
    }, 35);

    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);

    return () => {
      clearInterval(typeInterval);
      clearInterval(cursorInterval);
    };
  }, []);

  return (
    <section className="hero-section" id="hero">
      <div className="hero-container">
        <div className="hero-ascii-wrapper">
          <pre className={`hero-ascii ${showContent ? 'visible' : ''}`}>
            {asciiArt}
          </pre>
        </div>
        
        <div className={`hero-tagline ${showContent ? 'visible' : ''}`}>
          <span className="hero-prompt">$ echo "</span>
          <span className="hero-typed">{typedText}</span>
          <span className={`hero-cursor ${showCursor ? '' : 'hidden'}`}>█</span>
          <span className="hero-prompt">"</span>
        </div>

        <div className={`hero-info ${showContent ? 'visible' : ''}`}>
          <div className="hero-stats">
            <div className="hero-stat">
              <span className="stat-label">location</span>
              <span className="stat-value">San Francisco, CA</span>
            </div>
            <div className="hero-stat-divider">│</div>
            <div className="hero-stat">
              <span className="stat-label">status</span>
              <span className="stat-value stat-available">
                <span className="stat-dot" />
                open to work
              </span>
            </div>
            <div className="hero-stat-divider">│</div>
            <div className="hero-stat">
              <span className="stat-label">experience</span>
              <span className="stat-value">5+ years</span>
            </div>
          </div>
        </div>

        <div className={`hero-scroll-hint ${showContent ? 'visible' : ''}`}>
          <span className="scroll-text">scroll down</span>
          <span className="scroll-arrow">↓</span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
