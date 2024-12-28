@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&family=Roboto:wght@300;400;700&display=swap');

:root {
  --primary-color: #00ffff;
  --secondary-color: #ff00ff;
  --background-color: #0a0a0a;
  --text-color: #ffffff;
  --card-background: rgba(255, 255, 255, 0.1);
  --neon-glow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px var(--primary-color), 0 0 35px var(--primary-color), 0 0 40px var(--primary-color);
}

body, html {
  height: 100%;
  margin: 0;
  font-family: 'Roboto', sans-serif;
  background-color: var(--background-color);
  color: var(--text-color);
  overflow-x: hidden;
}

.cyberpunk-background {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    linear-gradient(to bottom, rgba(10, 10, 10, 0.8) 0%, rgba(10, 10, 10, 0.2) 100%),
    url('https://i.imgur.com/JbmRntZ.jpg') no-repeat center center fixed;
  background-size: cover;
  z-index: -1;
  filter: hue-rotate(180deg);
}

header {
  background-color: rgba(0, 0, 0, 0.7);
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  z-index: 1;
}

h1 {
  margin: 0;
  font-family: 'Orbitron', sans-serif;
  font-size: 2.5rem;
  text-shadow: var(--neon-glow);
  animation: textGlow 1.5s ease-in-out infinite alternate;
}

@keyframes textGlow {
  from {
    text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px var(--primary-color), 0 0 35px var(--primary-color);
  }
  to {
    text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px var(--secondary-color), 0 0 70px var(--secondary-color);
  }
}

nav {
  display: flex;
  gap: 1rem;
}

.nav-button {
  background: none;
  border: 2px solid var(--primary-color);
  color: var(--primary-color);
  padding: 0.5rem 1rem;
  font-family: 'Orbitron', sans-serif;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s;
  position: relative;
  overflow: hidden;
}

.nav-button::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    120deg,
    transparent,
    rgba(255, 255, 255, 0.3),
    transparent
  );
  transition: all 0.6s;
}

.nav-button:hover::before {
  left: 100%;
}

.nav-button:hover {
  background-color: var(--primary-color);
  color: var(--background-color);
  box-shadow: 0 0 15px var(--primary-color);
}

.search-container {
  display: flex;
  justify-content: center;
  margin: 2rem 0;
  position: relative;
  z-index: 1;
}

input[type="text"] {
  width: 60%;
  padding: 1rem;
  font-size: 1rem;
  border: 2px solid var(--primary-color);
  border-radius: 25px 0 0 25px;
  outline: none;
  background-color: rgba(255, 255, 255, 0.1);
  color: var(--text-color);
  transition: all 0.3s;
}

input[type="text"]:focus {
  width: 65%;
  box-shadow: 0 0 15px var(--primary-color);
}

.search-button {
  padding: 1rem 2rem;
  font-size: 1rem;
  cursor: pointer;
  background-color: var(--primary-color);
  color: var(--background-color);
  border: none;
  border-radius: 0 25px 25px 0;
  transition: all 0.3s;
}

.search-button:hover {
  background-color: var(--secondary-color);
  box-shadow: 0 0 15px var(--secondary-color);
}

.section-title {
  font-family: 'Orbitron', sans-serif;
  text-align: center;
  margin: 2rem 0;
  font-size: 2rem;
  text-shadow: 0 0 10px var(--primary-color);
}

.featured-videos, .results {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 2rem;
  position: relative;
  z-index: 1;
}

.video {
  background-color: var(--card-background);
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 255, 255, 0.3);
  transition: transform 0.3s, box-shadow 0.3s;
  backdrop-filter: blur(10px);
  position: relative;
}

.video::before {
  content: '';
  position: absolute;
  top: -2px;
  left: -2px;
  right: -2px;
  bottom: -2px;
  background: linear-gradient(45deg, var(--primary-color), var(--secondary-color));
  z-index: -1;
  filter: blur(10px);
  opacity: 0;
  transition: opacity 0.3s;
}

.video:hover {
  transform: translateY(-10px) scale(1.02);
  box-shadow: 0 6px 20px rgba(0, 255, 255, 0.5);
}

.video:hover::before {
  opacity: 1;
}

.video img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.video-info {
  padding: 1.5rem;
}

.video h3 {
  margin: 0 0 1rem 0;
  font-size: 1.3rem;
  color: var(--primary-color);
  font-family: 'Orbitron', sans-serif;
}

.video a {
  color: var(--primary-color);
  text-decoration: none;
  transition: color 0.3s;
}

.video a:hover {
  color: var(--secondary-color);
  text-shadow: 0 0 5px var(--secondary-color);
}

.video p {
  margin: 0.5rem 0;
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
}

.play-button {
  background-color: var(--secondary-color);
  color: var(--text-color);
  border: none;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 25px;
  transition: all 0.3s;
  margin-top: 1rem;
  position: relative;
  overflow: hidden;
}

.play-button::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: conic-gradient(
    from 0deg,
    transparent 0deg 90deg,
    rgba(255, 255, 255, 0.2) 90deg 180deg,
    transparent 180deg 360deg
  );
  transition: transform 0.4s linear;
}

.play-button:hover::before {
  transform: rotate(360deg);
}

.play-button:hover {
  background-color: var(--primary-color);
  box-shadow: 0 0 15px var(--primary-color);
}

footer {
  background-color: rgba(0, 0, 0, 0.7);
  color: var(--text-color);
  text-align: center;
  padding: 1rem;
  margin-top: 2rem;
  position: relative;
  z-index: 1;
}

@media (max-width: 768px) {
  .featured-videos, .results {
    grid-template-columns: 1fr;
  }

  input[type="text"], input[type="text"]:focus {
    width: 70%;
  }

  h1 {
    font-size: 2rem;
  }

  nav {
    flex-direction: column;
    gap: 0.5rem;
  }
}

