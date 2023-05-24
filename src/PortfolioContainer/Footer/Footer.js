import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'
import './Footer.css'
import MailOutlineIcon from '@mui/icons-material/MailOutline';

export default function Footer() {
    return (
        <section className='footer'>
            <div className="footer-container">
                <div className="footer-nav">
                    <ul>
                        <li>
                            <Link className='footer-link' smooth to="#home">Home</Link>
                            <Link className='footer-link' smooth to="#aboutme">About Me</Link>
                            <Link className='footer-link' smooth to="#skills">Skill</Link>
                            <Link className='footer-link' smooth to="#qualification">Qualifications</Link>
                            <Link className='footer-link' smooth to="#project">Project</Link>
                        </li>
                    </ul>
                </div>
                <div className="footer-contact">
                    <h3 className='cont-head'>Contact Here</h3>
                    <div className="social">
                        <a href="https://www.linkedin.com/in/sankar-kulandaivel/" target='_blank'>
                            <i className='fa fa-linkedin'></i>
                        </a>
                        <a href="mailto:snakarkulandaivel@gmail.com" className='mail-icon'>
                        <i className='fa fa-envelope-o'></i>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
