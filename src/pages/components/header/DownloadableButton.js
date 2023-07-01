import React from "react";
import Resume from "../../../uploads/Long_Nguyen_Resume_Dev_NEW_Jun30.pdf";
import WorkExample from "../../../uploads/Work Example June 20.pdf";
import "./header.css";

export default function DownloadableButton({handleContactClick}) {
  const handleResumeDownload = () => {
    const link = document.createElement("a");
    link.href = Resume;
    link.download = "Long_Nguyen_Resume.pdf";
    link.click();
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = WorkExample;
    link.download = "Work Examples.pdf";
    link.click();
  };

  const handleClick = () => {
    handleContactClick();
  }

  return (
    <div className="headButtons">
      <div className="buttons_container">
        <button className="left-button" onClick={handleResumeDownload}>
          My Resume
        </button>
        <button className="mid-button" onClick={handleDownload}>
          Work Examples
        </button>
        {/* <button className="right-button" onClick={handleClick}>
          Contact Me
        </button> */}
      </div>
    </div>
  );
}
