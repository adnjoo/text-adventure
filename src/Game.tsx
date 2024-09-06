'use client';

import Image from 'next/image';
import React, { useState } from 'react';

import image0 from '../public/0.webp';
import image1 from '../public/1.webp';
import image3 from '../public/3.webp';
import image6 from '../public/6.webp';
import image10 from '../public/10.webp';
import image11 from '../public/11.webp';
import image13 from '../public/13.webp';

const Game = () => {
  const [storyIndex, setStoryIndex] = useState(0);

  const story = [
    {
      text: 'You are Ember Calloway, standing alone in the old, abandoned observatory as a storm rages outside. A strange, glowing comet appears in the sky, responding to your emotions.',
      image: image0,
      choices: [
        { text: 'Reach out to the comet', next: 1 },
        { text: 'Ignore it and head back home', next: 2 },
      ],
    },
    {
      text: 'As you reach out, the comet pulses with light. You feel a surge of energy within you, awakening something deep inside. Shadows begin to move at your command.',
      image: image1,
      choices: [
        { text: 'Explore your new powers', next: 3 },
        { text: 'Seek help from a reclusive astronomer in town', next: 4 },
      ],
    },
    {
      text: "You return home, but the comet's presence lingers in your mind. The shadows in your room start to behave strangely, and you can't shake the feeling that something is watching you.",
      choices: [
        { text: 'Return to the observatory', next: 0 },
        { text: 'Tell your best friend about the comet', next: 5 },
      ],
    },
    {
      text: 'As you explore your powers, you find that you can control the shadows around you and sense emotions as vividly as colors. But with this power comes a feeling of isolation.',
      image: image3,
      choices: [
        { text: 'Embrace the isolation and train alone', next: 6 },
        {
          text: 'Seek guidance from the mysterious boy who just moved to town',
          next: 7,
        },
      ],
    },
    {
      text: 'The astronomer reveals that you are part of a lineage of star-born warriors, destined to guard the balance of the cosmos. He offers to help you unlock your full potential.',
      choices: [
        { text: 'Accept his help and begin training', next: 8 },
        { text: 'Refuse and try to live a normal life', next: 2 },
      ],
    },
    {
      text: "Your best friend is skeptical but agrees to help you figure out what's going on. Together, you return to the observatory.",
      choices: [
        { text: 'Investigate the comet together', next: 1 },
        { text: 'Explore the town for more clues', next: 9 },
      ],
    },
    {
      text: 'The isolation becomes unbearable, and you feel the weight of your powers. But in the silence, you discover a deeper connection to the stars and your true purpose.',
      image: image6,
      choices: [
        { text: 'Seek out others who might share your destiny', next: 10 },
        { text: 'Embrace the solitude and confront the comet alone', next: 11 },
      ],
    },
    {
      text: 'The mysterious boy reveals that he, too, has a connection to the comet. He offers to train with you, and together, you begin to unlock the secrets of your powers.',
      choices: [
        { text: 'Continue training with him', next: 8 },
        { text: 'Confront the comet alone', next: 11 },
      ],
    },
    {
      text: "Under the astronomer's guidance, you begin to unlock the full potential of your powers. The training is intense, but you feel stronger and more connected to the cosmos.",
      choices: [
        { text: 'Prepare to confront the dark forces', next: 11 },
        { text: 'Search for other star-born warriors', next: 10 },
      ],
    },
    {
      text: 'You uncover clues that lead you to believe the comet is not just a celestial body but a key to another world. The mystery deepens, and you feel drawn to uncover the truth.',
      choices: [
        { text: 'Investigate further', next: 12 },
        { text: 'Return to the observatory', next: 0 },
      ],
    },
    {
      text: 'You find others who share your destiny. Together, you form a bond that strengthens your resolve. You are not alone in this battle.',
      image: image10,
      choices: [
        { text: 'Prepare to face the coming war', next: 11 },
        { text: 'Seek out more allies', next: 12 },
      ],
    },
    {
      text: 'You confront the comet, and it reveals the truth: you are the key to a cosmic battle that will determine the fate of many worlds. The choice is yours—will you fight, or will you flee?',
      image: image11,
      choices: [
        { text: 'Fight to protect the balance of the cosmos', next: 13 },
        { text: 'Flee and try to live a normal life', next: 2 },
      ],
    },
    {
      text: 'You uncover the final pieces of the puzzle and prepare for the ultimate confrontation. The fate of the cosmos rests on your shoulders.',
      choices: [
        { text: 'Face your destiny', next: 13 },
        { text: 'Try to find another way', next: 14 },
      ],
    },
    {
      text: 'You embrace your role as a star-born warrior and lead the battle to protect the balance of the cosmos. The war is fierce, but with the help of your friends, you prevail.',
      image: image13,
      choices: [],
    },
    {
      text: "You discover an alternative path that could end the conflict without bloodshed. It's a risky plan, but you decide to take the chance.",
      choices: [
        { text: 'Attempt the alternative path', next: 13 },
        { text: 'Prepare for battle instead', next: 13 },
      ],
    },
  ];

  const handleChoiceClick = (nextIndex: number) => {
    setStoryIndex(nextIndex);
  };

  const currentStory = story[storyIndex];

  return (
    <div style={{ padding: '20px' }}>
      <h1>Starlight&apos;s Edge: Text Adventure Game</h1>
      {currentStory.image && (
        <Image
          src={currentStory.image}
          alt='Story scene'
          className='w-[12rem] h-[12rem] rounded-md my-4 sm:my-8 border-2 border-gray-600 sm:w-[18rem] sm:h-[18rem]'
        />
      )}
      <p>{currentStory.text}</p>
      <div>
        {currentStory.choices.map((choice, index) => (
          <button
            key={index}
            onClick={() => handleChoiceClick(choice.next)}
            className='m-2 p-2 hover:underline'
          >
            {choice.text}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Game;
