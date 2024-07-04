import React, { useEffect } from 'react';
import videoBg from './assets/bg.mp4';

const HomePage = () => {
  useEffect(() => {
    const swiftUpElements = document.querySelectorAll('.swift-up-text');

    swiftUpElements.forEach(elem => {
      const words = elem.textContent.split(' ');
      elem.innerHTML = '';

      words.forEach((el, index) => {
        words[index] = `<span><i>${words[index]}</i></span>`;
      });

      elem.innerHTML = words.join(' ');

      const children = elem.querySelectorAll('span > i');
      children.forEach((node, index) => {
        node.style.animationDelay = `${index * .2}s`;
      });
    });
  }, []);

  return (
    <div className="container">
      <video className="video-bg" src={videoBg} autoPlay loop muted />
      <h1 className="smartbot-title">
        <span className="smart">Smart</span>
        <span className="bot">Bot</span>
      </h1>
      <div className="welcome-message">
        Welcome to our ChatBot!
      </div>
      <div className="assist-message swift-up-text">
        How can we assist you today?
      </div>
      <button className="get-started-button" onClick={() => alert('Get Started Clicked!')}>Get Started</button>
    </div>
  );
}

export default HomePage;
