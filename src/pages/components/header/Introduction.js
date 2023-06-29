import React from "react";
import DownloadableButton from "./DownloadableButton";
import NameAnimation from "./NameAmimation";

export default function Introduction() {
  return (
    <div className="test-intro">
      <header className="header">
        <div className="header-left">
          <NameAnimation />
        </div>
        <div className="header-right">
          <DownloadableButton />
        </div>
      </header>
    </div>
  );
}
