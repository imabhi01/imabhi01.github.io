import React from 'react'
import Typewriter from 'typewriter-effect';

export default function HeroSection() {
    return (
        <div>
            {/* <!-- ======= Hero Section ======= --> */}
            <section id="hero" className="d-flex flex-column justify-content-center align-items-center">
                <div className="hero-container" data-aos="fade-in">
                <h1>Hello, I'm Abhishek</h1>
                <p>
                        My super powers?
                        <Typewriter
                            options={{
                                strings: ['Freelancing', 'Coding Softwares', 'Desigining'],
                                autoStart: true,
                                loop: true,
                            }} 
                        />
                    
                   </p>
                </div>
            </section>
            {/* <!-- End Hero --> */}
        </div>
    )
}
