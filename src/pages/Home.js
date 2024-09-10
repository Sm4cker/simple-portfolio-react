import React from 'react';
import { Link } from "react-router-dom";
import { Navbar } from '../components/Navbar';
import './Home.css';
const Home = () => {
  return (
    <div className='main'>
    <Navbar/>
        <h4 className='title'>HI, I'M UMER</h4>
      <h1 className='role'>I'M A WEB<br/>DEVELOPER</h1>
      <Link to="/portfolio">
        <button className='btn' >VIEW PROJECTS</button>
      </Link>
    </div>
  );
};

export default Home;
