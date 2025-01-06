/* eslint react/prop-types: 0 */
export default function Header({ cScore, highScore }) {
  return (
    <header>
      <div className="rule-and-logo">
        <p>
          Get points by clicking unique cards, do not click on the same card
          twice!
        </p>
      </div>
      <div className="score">
        <p>Current Score: {cScore}</p>
        <p>High Score: {highScore}</p>
      </div>
    </header>
  );
}
