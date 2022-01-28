import React from 'react'

export default function Header() {
    return (
        <div>
            <header id="header">
                <div className="d-flex flex-column">
                <div className="profile">
                    <img src="assets/img/profile-img.jpg" alt="abhishek chaudhary" className="img-fluid rounded-circle" />
                    <h1 className="text-light"><a href="index.html">Abhishek Chaudhary</a></h1>
                    <div className="social-links mt-3 text-center">
                    <a title="twitter" href="https://twitter.com/abhi01chaudhary" target="_blank" className="twitter"><i className="bx bxl-twitter"></i></a>
                    <a title="facebook" href="https://www.facebook.com/abhishek.chaudhary.750" target="_blank" className="facebook"><i className="bx bxl-facebook"></i></a>
                    <a title="instagram" href="https://www.instagram.com/clone_w1zard/" target="_blank" className="instagram"><i className="bx bxl-instagram"></i></a>
                    <a title="github" href="https://github.com/imabhi01" target="_blank" className="google-plus"><i className="bx bxl-github"></i></a>
                    <a title="linkedin" href="https://www.linkedin.com/in/abhishek-chaudhary-504124105/" target="_blank" className="linkedin"><i className="bx bxl-linkedin"></i></a>
                    </div>
                </div>
                <nav id="navbar" className="nav-menu navbar">
                    <ul>
                    <li><a href="#hero" className="nav-link scrollto active"><i className="bx bx-home"></i> <span>Home</span></a></li>
                    <li><a href="#about" className="nav-link scrollto"><i className="bx bx-user"></i> <span>About</span></a></li>
                    <li><a href="#resume" className="nav-link scrollto"><i className="bx bx-file-blank"></i> <span>Resume</span></a></li>
                    <li><a href="#portfolio" className="nav-link scrollto"><i className="bx bx-book-content"></i> <span>Portfolio</span></a></li>
                    <li><a href="#services" className="nav-link scrollto"><i className="bx bx-server"></i> <span>Services</span></a></li>
                    <li><a href="#contact" className="nav-link scrollto"><i className="bx bx-envelope"></i> <span>Contact</span></a></li>
                    <li><a href="/resume.docx" className="nav-link"><i className="bx bx-download"></i> <span>Download Resume</span></a></li>
                    </ul>
                </nav>
                </div>
            </header>
        </div>
    )
}
