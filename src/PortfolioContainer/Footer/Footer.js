import React from 'react'
import './Footer.css'

export default function Footer() {
    return (
        <section className='footer'>
            <div className="footer-container">
                <div className="footer-contact">
                    <h3 className='cont-head'>Contact Here</h3>
                    <div className="social">
                        <a href="https://www.linkedin.com/in/sankar-kulandaivel/" target='_blank'>
                            <i className='fa fa-linkedin'></i>
                        </a>
                        <a href="tel:+917668474174">
                            <i className='fa fa-phone'></i>
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
