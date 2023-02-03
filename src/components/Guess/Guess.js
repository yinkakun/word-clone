import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

export const Guess = ({ answer, value }) => {
  const result = checkGuess(value, answer);

  return (
    <p className="guess">
      {range(5).map((index) => {
        return (
          <span
            key={index}
            className={`cell ${result ? result[index].status : ""}`}
          >
            {result ? result[index].letter : null}
          </span>
        );
      })}
    </p>
  );
};
