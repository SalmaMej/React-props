import React from 'react';
import './App.css';
import Profile from './profile/Profile.js';
import HandleName from './profile/handleName.js';


function App() {
  return (
    <>
    <HandleName fullName ='Salma Ben Mejdouba'/>
    <div className = 'App'>
      <Profile fullName = 'Salma Ben Mejdouba' bio = 'An ambitious, curious, and hard-working girl who studied interior design because she liked everything related to creativity. Even if her family financial situation was good, she chose to be independent. She decided to have her master’s degree while freelancing at the same time. After graduating with a research master’s degree in Theories of creation, she started working at a startup to gain experience and was assigned as a project manager in 2 months. Working 8 hours a day while maintaining the freelance job wasn’t easy, but she didn’t give up. After 1 year of hard work, she chose to change her career path. She was interested in the web development field and decided to dive into that world.' profession ='Interior designer, JS Full Stack Developer, Freelance Designer'>
        <img src ={'avatar-2.png'} alt='profile'></img>
        </Profile>
    </div>
    
    
    </>
  );
}

export default App;
