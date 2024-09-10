import React from 'react';
import ProjectCard from '../components/ProjectCard';
import { Navbar } from '../components/Navbar';
import { Link } from "react-router-dom";
import './Portfolio.css'

const Portfolio = () => {
  return (
    <div>
    <Navbar/>
      <h1 className='title-p'>Projects</h1>
      <div className="project-cards-container">
        <Link to='#'>
            <ProjectCard title="Blogging Web App" description="Full-stack CRUD Blogging Web App using .NET MVC and MSSQL" />
        </Link>
        <Link to='#'>
        <ProjectCard title="Learning Management System (LMS)" description="CRUD .NET Blazor Server App for a Learning Management System (LMS) using MudBlazor theme." />
        </Link> 
        <Link to='#'>
        <ProjectCard title="AirBnb Experience Clone" description="Developed a simple React.js AirBnb experience clone app." />
        </Link>
        <Link to='#'>
        <ProjectCard title="AirBnb Experience Clone" description="Developed a simple React.js AirBnb experience clone app." />
        </Link>
      </div>
    </div>
  );
};

export default Portfolio;
