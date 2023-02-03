import React from "react";
import { range } from "../../utils";
import { Guess } from "../Guess/Guess";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

export const GuessResults = ({ guesses, answer }) => {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((index) => {
        return <Guess answer={answer} key={index} value={guesses[index]} />;
      })}
    </div>
  );
};
