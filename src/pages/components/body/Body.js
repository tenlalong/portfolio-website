import React, { useEffect } from "react";
import About from "./about/About.js";
import Skills from "./skills/Skills.js";
import Contacts from "./contacts/Contacts.js";
import BottomBar from "../bottom-bar/BottomBar.js";
import "./Body.css";

export default function Body({ scrollToContacts, contactsRef }) {
  useEffect(() => {
    if (scrollToContacts) {
      contactsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [scrollToContacts, contactsRef]);

  return (
    <div className="body">
      <div className="container">
        <About />
      </div>
      <div className="container">
        <Skills />
      </div>
      <div className="container">
        <div ref={contactsRef}>
          <Contacts />
        </div>
      </div>
      <div>
        <p> </p>
      </div>
      <div className="container">
        <BottomBar />
      </div>
    </div>
  );
}
