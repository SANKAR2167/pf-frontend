import React from 'react';
import './CertificateCarousel.css';
import image1 from '../../assets/Certification/GuviCertification - 1x29771ZP6We94u7f6.png';

export default function CertificateCarousel() {
    return (
        <section id='certification' className='certification'>
            <h2 className="certification-title">Certifications</h2>
            <img src={image1} alt="Your Image" className="responsive-image" />
        </section>
    );
};
