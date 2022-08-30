import React from "react";
import './about.css'
import ME from '../../assets/me-about.jpg';
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc"

const About = () => {
    return (
        <section id="about">
            <h5>Get To Know</h5>
            <h2>About Me</h2>

            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={ME} alt="About Me" />
                    </div>
                </div>

                <div className="about__content">
                    <div className="about__cards">
                        <article className="about__card">
                            <FaAward className="about__icon" />
                            <h5>Experience</h5>
                            <small>1+ Years Working</small>
                        </article>

                        <article className="about__card">
                            <FiUsers className="about__icon" />
                            <h5>Clients</h5>
                            <small>200+ Worldwide</small>
                        </article>

                        <article className="about__card">
                            <VscFolderLibrary className="about__icon" />
                            <h5>Projects</h5>
                            <small>80+ Completed</small>
                        </article>
                    </div>

                    <p>
                        Hello, I am Mark Wang, a Fronted-End Web developer  in Chunghwa Telecom Co., Ltd. Taiwan.
                        In charge of redesigning the view of website, improving user experience and maintaining the features. 
                        Hold a bachelor’s degree with a major in Computer Science which was awarded to me by National Central University in Taoyuan in 2018. After graduated, studied in Network Learning Technology Institute.
                        In my major, I used eye tracking to analyze students’ learning behavior and discover how they collaborate with each other. It's interesting that we can find out  the behavior  between two co-learners and how they solved the problem. 
                        Based on the eye-tracking data and the discourse between learners, I analyzed the behavior with different collaborative modes  and tried enhance both learners' user experience and learning behavior. Thus, my thesis helps me a lot do my job  while developing  and redesigning the UI of website. 
                    </p>
                    

                    

                    <a href="#contact" className="btn btn-primary">Let's Talk</a>
                </div>
            </div>
        </section>
    )
}

export default About