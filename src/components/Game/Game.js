import React from "react";
import { GuessInput } from "../GuessInput/GuessInput";
import { GuessResults } from "../GuessResults/GuessResults";
import { sample } from "../../utils";
import { WORDS } from "../../data";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]); // ['words', 'word2', 'word3']
  return (
    <React.Fragment>
      <GuessResults guesses={guesses} answer={answer} />
      <GuessInput setGuesses={setGuesses} guesses={guesses} />
    </React.Fragment>
  );
}

export default Game;
