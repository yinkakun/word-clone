import React from "react";
import { GuessInput } from "../GuessInput/GuessInput";
import { GuessResults } from "../GuessResults/GuessResults";
import { sample } from "../../utils";
import { WORDS } from "../../data";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { GameOver } from "../GameOver/GameOver";
// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);

  const isGameOver = () => {
    const maxGuess = guesses.length === NUM_OF_GUESSES_ALLOWED;
    const lastGuess = guesses.length ? guesses[guesses.length - 1] : "";
    const isCorrect = lastGuess === answer;

    if (maxGuess || isCorrect) return true;

    return false;
  };

  return (
    <React.Fragment>
      <GuessResults guesses={guesses} answer={answer} />
      <GuessInput
        guesses={guesses}
        setGuesses={setGuesses}
        isGameOver={isGameOver()}
      />
      {<GameOver guesses={guesses} answer={answer} />}
    </React.Fragment>
  );
}

export default Game;
