import React from 'react'
import './Qualification.css';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

export default function Qualification() {
  return (
    <section id='qualification' className='qualifiaction'>
      <h2 className='qualification-title'>Qualifications</h2>
      <div className="qualification-container">
        <div className="qual-cont">
          <span className="qualification-year">
            <CalendarMonthIcon /> 2022 - 2023
          </span>
          <span className="qualification-name">
            Full Stack Developer
          </span>
          <span className='qualification-institute'>
            Guvi Institute
          </span>
        </div>
        <div className="qual-cont">
          <span className="qualification-year">
            <CalendarMonthIcon /> 2014 - 2018
          </span>
          <span className="qualification-name">
            Bachelore of Engineering
          </span>
          <span className='qualification-institute'>
            M Kumarasamy College Of Engineering
          </span>
        </div>
      </div>
    </section>
  )
}
