import React from "react";

export const GuessInput = ({ setGuesses, guesses, isGameOver }) => {
  const [guess, setGuess] = React.useState("");

  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(event) => {
        event.preventDefault();
        if (guess.length < 5) return;

        const newGuesses = [...guesses, guess];
        setGuesses(newGuesses);
        setGuess("");
      }}
    >
      <label htmlFor="guess-input">Enter Guess:</label>
      <input
        id="guess-input"
        type="text"
        value={guess}
        minLength="5"
        maxLength="5"
        required={true}
        disabled={isGameOver}
        onChange={(event) => {
          setGuess(event.target.value.toUpperCase());
        }}
      />
    </form>
  );
};
