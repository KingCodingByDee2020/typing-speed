import { useEffect, useState } from "react";
import Info from "./Info";
import TimerForm from "./TimerForm";
import TypingArea from "./TypingArea";

function Main() {
  const [secsRemaining, setSecsRemaining] = useState(null);

  useEffect(() => {
    // Run the timer as long as there are secsRemaining
    if (secsRemaining) {
      // We are creating a new interval every second...
      const intervalID = setInterval(() => {
        setSecsRemaining((prev) => prev - 1);
      }, 1000);

      // Clean up the current interval to avoid memory leaks
      return () => clearInterval(intervalID);
    }
  });

  function handleSubmit(event) {
    event.preventDefault();
    setSecsRemaining(Number(event.target.elements[0].value));
  }

  return (
    <main className="flex flex-col gap-4 items-center mx-auto w-96">
      <TimerForm handler={handleSubmit} />
      {secsRemaining ? <Info msg={secsRemaining} /> : null}
      <TypingArea />
    </main>
  );
}

export default Main;
