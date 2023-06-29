import React from "react";
import "./contacts.css";
import { MdEmail } from "react-icons/md";
import { BsLinkedin } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";

export default function Contacts() {
  return (
    <section id="contacts">
      <h2>Contact Me</h2>

      <div className="parent_container">
        <div className="container contacts_container">
          <div className="contacts_options">
            <article className="option">
              <MdEmail className="email_icon" />
              <h4 className="text">My Email</h4>
              <h5 className="text">long26800@gmail.com</h5>
              <a className="text" href="mailto:long26800@gmail.com">Send me an email!</a>
            </article>

            <article className="option">
              <BsLinkedin className="linkedin_icon" />
              <h4 className="text" >My LinkedIn Profile</h4>
              <h5 className="text">long-nguyen-2608</h5>
              <a className="text" href="https://www.linkedin.com/in/long-nguyen-2608/">
                Checkout my profile
              </a>
            </article>

            <article className="option">
              <BsInstagram className="ig_icon" />
              <h4 className="text">My Instagram</h4>
              <h5 className="text" >@tenlalong</h5>
              <a className="text" href="https://www.instagram.com/tenlalong/">
                Checkout my profile
              </a>
            </article>

            <article className="option">
              <BsGithub className="ig_icon" />
              <h4 className="text">My GitHub profile</h4>
              <h5 className="text">@tenlalong</h5>
              <a className="text" href="https://www.github.com/tenlalong/">
                Checkout my projects!
              </a>
            </article>
          </div>
        </div>
      </div>

      <h2>Hope you have a great day!</h2>
    </section>
  );
}
