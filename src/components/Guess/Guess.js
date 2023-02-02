import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";
export const Guess = ({ guesses, index, answer }) => {
  const guess = guesses[index];

  if (!guess) {
    return (
      <p className="guess">
        {range(0, 5).map((index) => {
          return <span key={index} className="cell"></span>;
        })}
      </p>
    );
  }

  const checkedGuess = checkGuess(guess, answer);

  return (
    <p className="guess">
      {checkedGuess.map(({ letter, status }, index) => {
        return (
          <span key={index} className={`cell ${status}`}>
            {letter}
          </span>
        );
      })}
    </p>
  );
};
