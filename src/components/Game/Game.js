import React from "react";
import { GuessInput } from "../GuessInput/GuessInput";
import { GuessResults } from "../GuessResults/GuessResults";
import { sample } from "../../utils";
import { WORDS } from "../../data";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { GameOverBanner } from "../Banner/GameOverBanner";
// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [gameStatus, setGameStatus] = React.useState("running"); // win / lose / running

  const isGameOver = gameStatus !== "running";

  const onGuessSubmit = (guess) => {
    const newGuess = [...guesses, guess];
    const isMaxGuesses = newGuess.length === NUM_OF_GUESSES_ALLOWED;
    setGuesses(newGuess);

    if (isMaxGuesses) {
      setGameStatus("lose");
    }

    if (guess === answer) {
      setGameStatus("win");
    }
  };

  return (
    <React.Fragment>
      <GuessResults guesses={guesses} answer={answer} />
      <GuessInput onSubmit={onGuessSubmit} isGameOver={isGameOver} />
      <GameOverBanner
        answer={answer}
        gameStatus={gameStatus}
        guessesCount={guesses.length}
      />
    </React.Fragment>
  );
}

export default Game;
