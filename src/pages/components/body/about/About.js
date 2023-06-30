import React from "react";
import "./about.css";
import Portrait from "../../../../uploads/IMG_6245.jpg";
import { MdSchool } from "react-icons/md";
import { BsPinterest } from "react-icons/bs";
import { AiOutlineFileDone } from "react-icons/ai";
import Code from "../../../../uploads/code.jpg";
import { BiBriefcaseAlt2 } from "react-icons/bi";

export default function About() {
  return (
    <section id="about">
      <h3>About Me</h3>

      <div className="container about__container">
        <div className="about_me-image">
          <div className="about__cards">
            <div className="about_me-image">
              <img
                src={Portrait}
                alt="me"
                // style={{ marginLeft: "240px" }}
              ></img>
            </div>
            <div className="about_me-image">
              <img src={Code} alt="code" 
              // style={{ marginLeft: "318px" }}
              ></img>
            </div>
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <button className="about__card">
              <BiBriefcaseAlt2
                className="about__card-icon"
                style={{ marginTop: "20px" }}
              />
              <p style={{ marginTop: "20px", marginBottom: "0px" }}>
                Work Experience
              </p>
              <p
                class="work_header"
                style={{ marginTop: "0px", marginBottom: "0px" }}
              >
                <p class="title">Software Engineer Intern: May 2021 - Jan. 2023</p>
                {/* <p class="date"> May 2021 - Jan. 2023</p> */}
              </p>
              <div class="work_header" style={{ marginTop: "0px" }}>
                <p class="company"> Assure Global Group: Toronto, ON</p>
                {/* <p class="location">Toronto, ON</p> */}
              </div>
            </button>
            <button className="about__card">
              <MdSchool className="about__card-icon" />
              <p>Education</p>
              <p>Honours Bachelor's Degree in Computer Engineering</p>
              <p> York University: Sep 2019 - May 2023</p>
            </button>
            <button className="about__card">
              <BsPinterest className="about__card-icon" />
              <p>Interests</p>
              <p>
                Software Development, Android Development, Machine Learning,
               Computer Vision, Artificial Intelligence, Data Science, Embedded Systems, and more!</p>
            </button>
            <button className="about__card">
              <AiOutlineFileDone className="about__card-icon" />
              <p>Projects</p>
              <p>30+ completed</p>
              <p> Please check out my GitHub profile!</p>
            </button>
            <button className="about__card">
              <p>
                I do love coding a lot. I appreciate the fact that I cannot go
                to sleep without finishing debugging my code. During my free
                time, I usually work out, read mangas, or watch anime (rarely
                nowadays). I am always seeking for new opportunities to learn
                and grow as a person and as a professional. I also love to take
                risks. I am currently looking for a new graduate SWE positions.
              </p>
            </button>

            {/* <button href="#contact" className="btn btn-primary" style={{ marginLeft: "300px" }}>
              Let's Connect!
            </button> */}
          </div>
        </div>
      </div>
    </section>
  );
}