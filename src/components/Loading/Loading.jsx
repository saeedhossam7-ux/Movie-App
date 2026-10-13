import './Loading.css';

export default function Loading() {
  return (
    <div className="loading-container">
      {/* Background Film Reels */}
      <div className="loading-bg-icons">
        <i className="bi bi-film loading-bg-icon icon-1"></i>
        <i className="bi bi-camera-reels loading-bg-icon icon-2"></i>
        <i className="bi bi-film loading-bg-icon icon-3"></i>
      </div>

      {/* Main Loading Content */}
      <div className="loading-content">
        {/* Animated Logo */}
        <div className="loading-logo">
          <div className="logo-circle">
            <i className="bi bi-film"></i>
          </div>
          <div className="logo-ring ring-1"></div>
          <div className="logo-ring ring-2"></div>
          <div className="logo-ring ring-3"></div>
        </div>

        {/* Brand Name */}
        <h2 className="loading-brand">
          <span className="brand-letter">M</span>
          <span className="brand-letter">o</span>
          <span className="brand-letter">v</span>
          <span className="brand-letter">i</span>
          <span className="brand-letter">e</span>
          <span className="brand-letter">H</span>
          <span className="brand-letter">u</span>
          <span className="brand-letter">b</span>
        </h2>

        {/* Loading Text */}
        <div className="loading-text">
          <span>Loading</span>
          <span className="loading-dots">
            <span className="dot">.</span>
            <span className="dot">.</span>
            <span className="dot">.</span>
          </span>
        </div>

        {/* Progress Bar */}
        <div className="loading-progress">
          <div className="progress-bar"></div>
        </div>
      </div>
    </div>
  );
}
