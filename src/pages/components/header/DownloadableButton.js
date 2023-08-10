import React from "react";
import Resume from "../../../uploads/Long_Nguyen_Resume_Dev.pdf";
import DataResume from "../../../uploads/Long_Nguyen_Resume_Data.pdf";
import WorkExample from "../../../uploads/Works.pdf";
import "./header.css";

export default function DownloadableButton({handleContactClick}) {
  const handleResumeDownload = () => {
    const link = document.createElement("a");
    link.href = Resume;
    link.download = "Long_Nguyen_Resume.pdf";
    link.click();
  };

  const handleDataDownload = () => {
    const link = document.createElement("a");
    link.href = DataResume;
    link.download = "Long_Nguyen_Resume_Data.pdf";
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
          SWE Resume
        </button>
        <button className="left-button" onClick={handleDataDownload}>
          Data Resume
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
