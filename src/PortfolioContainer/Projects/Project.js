import React from 'react'
import './Project.css'
import loginpage from '../../assets/project/loginpage.jpg'
import foodapp from '../../assets/project/foodapp.jpg'
import blogapp from '../../assets/project/blogapp.jpg'
import weatherapp from '../../assets/project/weatherapp.jpg'
import movieapp from '../../assets/project/movieapp.jpg'

export default function Project() {

  const ProjectData = [
    {
      'name': 'Food App (MERN)',
      'image': foodapp,
      'link': 'https://sankar-redux-foodapp.netlify.app',
      'front': 'https://github.com/SANKAR2167/fe-React-Redux-foodApp.git',
      'back': 'https://github.com/SANKAR2167/be-Node-Redux-FoodApp'
    },
    {
      'name': 'Movie App (MERN)',
      'image': movieapp,
      'link': 'https://sankar-movieapp.netlify.app/',
      'front': 'https://github.com/SANKAR2167/fe-movieapp',
      'back': 'https://github.com/SANKAR2167/be-movieapp'
    },
    {
      'name': 'Blog App (MERN)',
      'image': blogapp,
      'link': 'https://sankar-blogapp.netlify.app',
      'front': 'https://github.com/SANKAR2167/fe-blogapp.git',
      'back': ''
    },
    {
      'name': 'Weather App (MERN)',
      'image': weatherapp,
      'link': 'https://master--sankar-weatherapp.netlify.app',
      'front': 'https://github.com/SANKAR2167/fe-Weatherapp.git',
      'back': 'https://github.com/SANKAR2167/be-Weatherapp'
    }
  ]

  return (
    <section id='project'>
      <h2 className='project-title'>Projects</h2>
      <div className='project-container'>
        {ProjectData.map(pjd => <ProjectList projectdata={pjd} />)}
      </div>
    </section>
  )
}

function ProjectList({ projectdata }) {
  return (
    <div>
      <div className="project-card">
        <img className='project-image' src={projectdata.image} alt={projectdata.name} />
        <h4 className='project-title'>{projectdata.name}</h4>
        <div className="link-nav">
          <a href={projectdata.link} target='_blank'>Live</a>
          <a href={projectdata.front} target='_blank'>Frontend</a>
          <a href={projectdata.back} target='_blank'>Backend</a>
        </div>
      </div>
    </div>
  )
}