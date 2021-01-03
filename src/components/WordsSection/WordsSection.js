import React, { useState, useEffect } from "react";
import { rword } from "rword";
import "./WordsSection.scss";

import API from "../../services/api.js";

const WordsSection = (props) => {
  const [messageDefinitions, setMessageDefinitions] = useState([]);
  const [word, setWord] = useState("");

  useEffect(() => {
    API()
      .wordsApi(rword.generate())
      .then((res) => {
        setWord(res.word);
        setMessageDefinitions(res.definition || []);
      });
  }, []);

  return (
    <div className="word-section" key={props.id}>
      <h2>{word}</h2>
      {messageDefinitions.map((messageDefinition) => (
        <div key={props.id}>
          <ol className="word-definition">
            <li>{messageDefinition.definitions[0].definition}</li>
            {messageDefinition.definitions[1] ? (
              <li>{messageDefinition.definitions[1].definition}</li>
            ) : (
              ""
            )}
          </ol>
        </div>
      ))}
    </div>
  );
};

export default WordsSection;
