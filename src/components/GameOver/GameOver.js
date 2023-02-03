import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

export const GameOver = ({ guesses, answer }) => {
  const maxGuess = guesses.length === NUM_OF_GUESSES_ALLOWED;
  const lastGuess = guesses.length ? guesses[guesses.length - 1] : "";

  if (maxGuess) {
    return <LoseBanner answer={answer} />;
  }

  if (lastGuess === answer) {
    return <WinBanner guessesCount={guesses.length} />;
  }

  return null;
};

const LoseBanner = ({ answer }) => {
  return (
    <div className="sad banner">
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
    </div>
  );
};

const WinBanner = ({ guessesCount }) => {
  return (
    <div className="happy banner">
      <p>
        <strong>Congratulations!</strong> Got it in
        <strong>
          {"  "} {guessesCount} guesses
        </strong>
        .
      </p>
    </div>
  );
};
