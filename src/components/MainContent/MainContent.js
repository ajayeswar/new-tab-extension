import React from "react";
import WordsSection from "../WordsSection/WordsSection";

import "./MainContent.scss";

function MainContent() {
  return (
    <div className="main-content">
      <WordsSection id="1"></WordsSection>
      <WordsSection id="2"></WordsSection>
      <WordsSection id="3"></WordsSection>
    </div>
  );
}

export default MainContent;
