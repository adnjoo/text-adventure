'use client';

import React, { useState } from "react";

const Game = () => {
  const [storyIndex, setStoryIndex] = useState(0);

  const story = [
    {
      text: "You wake up in a dark forest. There's a path to the north and a cave to the east.",
      choices: [
        { text: "Go north", next: 1 },
        { text: "Enter the cave", next: 2 },
      ],
    },
    {
      text: "You find a peaceful village to the north. The villagers welcome you.",
      choices: [
        { text: "Stay in the village", next: 3 },
        { text: "Head back to the forest", next: 0 },
      ],
    },
    {
      text: "Inside the cave, you find a treasure chest.",
      choices: [
        { text: "Open the chest", next: 4 },
        { text: "Leave the cave", next: 0 },
      ],
    },
    {
      text: "You live happily in the village for the rest of your days.",
      choices: [],
    },
    {
      text: "The chest is empty, but you feel a sense of accomplishment.",
      choices: [{ text: "Leave the cave", next: 0 }],
    },
  ];

  const handleChoiceClick = (nextIndex: number) => {
    setStoryIndex(nextIndex);
  };

  const currentStory = story[storyIndex];

  return (
    <div style={{ padding: "20px" }}>
      <h1>Text Adventure Game</h1>
      <p>{currentStory.text}</p>
      <div>
        {currentStory.choices.map((choice, index) => (
          <button
            key={index}
            onClick={() => handleChoiceClick(choice.next)}
            style={{ margin: "10px", padding: "10px" }}
          >
            {choice.text}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Game;
