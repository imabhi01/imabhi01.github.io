import React from 'react'

export default function SkillBars() {
    const leftSkills = [
        {type: "HTML", level: 100},
        {type: "CSS", level: 99},
        {type: "JavaScript", level: 85},
        {type: "PHP", level: 95}
    ];
    const rightSkills = [
        {type: "Vue.js", level: 85},
        {type: "React.js", level: 85},
        {type: "BootStrap", level: 90},
        {type: "Photoshop", level: 50},
    ];

    return (
        <div className="container">
            <div className="section-title">
            <h2>Skills</h2>
            </div>

            <div className="row skills-content">

            <div className="col-lg-6" data-aos="fade-up">
                {
                    leftSkills.map((skill, index) => (
                        <div className="progress" key={index}>
                            <span className="skill">{skill.type} <i className="val">{skill.level}%</i></span>
                            <div className="progress-bar-wrap">
                                <div className="progress-bar" role="progressbar" style={{width:`${skill.level}%`}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                    ))
                }
               

            </div>

            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                {
                    rightSkills.map((skill, index) => (
                        <div className="progress" key={index}>
                            <span className="skill">{skill.type} <i className="val">{skill.level}%</i></span>
                            <div className="progress-bar-wrap">
                                <div className="progress-bar" style={{width:`${skill.level}%`}} role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                    ))
                }
            </div>
            </div>
        </div>
    )
}
