import { Banner } from "./Banner";

export const GameOverBanner = ({ answer, guessesCount, gameStatus }) => {
  if (gameStatus === "lose") {
    return (
      <Banner status="sad">
        <p>
          Sorry, the correct answer is <strong>{answer}</strong>.
        </p>
      </Banner>
    );
  }

  if (gameStatus === "win") {
    return (
      <Banner status="happy">
        <p>
          <strong>Congratulations!</strong> Got it in
          <strong>
            {"  "} {guessesCount} {"  "}{" "}
            {guessesCount === 1 ? "guess" : "guesses"}
          </strong>
          .
        </p>
      </Banner>
    );
  }

  return null;
};
