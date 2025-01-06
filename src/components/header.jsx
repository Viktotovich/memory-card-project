export default function Header() {
  return (
    <header>
      <div className="rule-and-logo">
        <div>Image Here</div>
        <p>
          Get points by clicking unique cards, do not click on the same card
          twice!
        </p>
      </div>
      <div className="score">
        <p>Current Score:</p>
        <p>High Score:</p>
      </div>
    </header>
  );
}
