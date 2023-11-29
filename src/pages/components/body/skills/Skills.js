import React from "react";
import "./skills.css";
import { BsPatchCheckFill } from "react-icons/bs";

export default function Skills() {
  return (
    <section id="skills">
      <h2 className="title-skill">My Skills</h2>
      <div className="parent__container">
        <div className="container skill_container">
          <div className="skill_front">
            <h3 className="title">Front-End Development</h3>

            <div className="front_content">
              <article className="front_skill_details">
                <BsPatchCheckFill className="skill_details_icon" />
                <div>
                  <h4 className="title">React</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>
              <article className="front_skill_details">
                <BsPatchCheckFill className="skill_details_icon" />
                <div>
                  <h4 className="title">Angular</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>
              <article className="front_skill_details">
                <BsPatchCheckFill className="skill_details_icon" />
                <div>
                  <h4 className="title">HTML</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>
              <article className="front_skill_details">
                <BsPatchCheckFill className="skill_details_icon" />
                <div>
                  <h4 className="title">CSS</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>
              <article className="front_skill_details">
                <BsPatchCheckFill className="skill_details_icon" />
                <div>
                  <h4 className="title">JavaScript</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>
              <article className="front_skill_details">
                <BsPatchCheckFill className="skill_details_icon" />
                <div>
                  <h4 className="title">Flutter</h4>
                  <small className="text-light">Intermediate</small>
                </div>
              </article>
            </div>
          </div>

          <div className="skill_back">
            <h3 className="title">Back-End Development</h3>
            <div className="front_content">
              <article className="front_skill_details">
                <BsPatchCheckFill className="skill_details_icon" />
                <div>
                  <h4 className="title" >NodeJS</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>
              <article className="front_skill_details">
                <BsPatchCheckFill className="skill_details_icon" />
                <div>
                  <h4 className="title">Python</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>
              <article className="front_skill_details">
                <BsPatchCheckFill className="skill_details_icon" />
                <div>
                  <h4 className="title">Java</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>
              <article className="front_skill_details">
                <BsPatchCheckFill className="skill_details_icon" />
                <div>
                  <h4 className="title">MySQL</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>
              <article className="front_skill_details">
                <BsPatchCheckFill className="skill_details_icon" />
                <div>
                  <h4 className="title">C/C++</h4>
                  <small className="text-light">Intermediate</small>
                </div>
              </article>
              <article className="front_skill_details">
                <BsPatchCheckFill className="skill_details_icon" />
                <div>
                  <h4 className="title">MongoDB</h4>
                  <small className="text-light">Intermediate</small>
                </div>
              </article>
            </div>
          </div>

          <div className="skill_py">
            <h3 className="title">Frameworks/Libraries</h3>
            <div className="front_content">
              <article className="front_skill_details">
                <BsPatchCheckFill className="skill_details_icon" />
                <div>
                  <h4 className="title">OpenCV</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>
              <article className="front_skill_details">
                <BsPatchCheckFill className="skill_details_icon" />
                <div>
                  <h4 className="title">Pandas</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>
              <article className="front_skill_details">
                <BsPatchCheckFill className="skill_details_icon" />
                <div>
                  <h4 className="title">NumPy</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>
              <article className="front_skill_details">
                <BsPatchCheckFill className="skill_details_icon" />
                <div>
                  <h4 className="title">PyTorch</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>
              <article className="front_skill_details">
                <BsPatchCheckFill className="skill_details_icon" />
                <div>
                  <h4 className="title">TensorFlow</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>
              <article className="front_skill_details">
                <BsPatchCheckFill className="skill_details_icon" />
                <div>
                  <h4 className="title">Scikit-Learn</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
