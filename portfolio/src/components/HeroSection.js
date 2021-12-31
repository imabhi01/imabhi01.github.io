import React from 'react'
import Typewriter from 'typewriter-effect';

export default function HeroSection() {
    return (
        <div>
            <section id="hero" className="d-flex flex-column justify-content-center align-items-center">
                <div className="hero-container" data-aos="fade-in">
                <h1>Hello, I'm Abhishek</h1>
                <span style={{ 'fontSize': '24px', 'color': '#fff', ' marginBottom': '50px','fontFamily': 'poppins,sans-serif' }}>
                    <Typewriter
                        options={{
                            strings: ['Coding Software', 'Freelancing', 'Designing'],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                    is my super power.
                   </span>
                </div>
            </section>
        </div>
    )
}
