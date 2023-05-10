import React, { useState } from "react";
import "./styles.css";
var emojiDictionary = {
  "🐧": "Penguin",
  "🐈": "Cat",
  "🐘": "Elephant",
  "🦥": "Sloth",
  "🦒": "Giraffe",
  "🐕": "Dog",
  "🦍": "Gorilla",
  "🐎": "Horse",
  "🐫": "Camel",
  "🐅": "Tiger"
};
var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");
  function emojiInputHandler(event) {
    var userinput = event.target.value;
    var meaning = emojiDictionary[userinput];
    if (meaning === undefined) {
      meaning = "we dont have this in our database ";
    }
    setMeaning(meaning);
  }
  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>INSIDE OUT !</h1>
      <input
        style={{
          padding: "1rem",
          minWidth: "80%"
        }}
        placeholder={"put an emoji here to know the meaning"}
        onChange={emojiInputHandler}
      />
      <h2>{meaning}</h2>
      <h3>Emoji's we know</h3>
      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            key={emoji}
            onClick={() => emojiClickHandler(emoji)}
            style={{ padding: "1rem", fontSize: "2rem", cursor: "pointer" }}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
