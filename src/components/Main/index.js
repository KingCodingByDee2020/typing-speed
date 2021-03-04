import { useEffect, useRef, useState } from "react";
import Info from "./Info";
import TimerForm from "./TimerForm";

function Main() {
  const [secsRemaining, setSecsRemaining] = useState(null);

  // Keep a reference to the textarea in between the renders
  const textareaRef = useRef();

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

  useEffect(() => {
    if (!secsRemaining) {
      textareaRef.current.blur();
      textareaRef.current.disabled = true;
    }
  });

  function handleSubmit(event) {
    event.preventDefault();
    setSecsRemaining(Number(event.target.elements[0].value));
    textareaRef.current.disabled = false;
    textareaRef.current.focus();
  }

  return (
    <main className="flex flex-col gap-4 items-center mx-auto w-96">
      <TimerForm handler={handleSubmit} />
      {secsRemaining ? <Info msg={secsRemaining} /> : null}
      <textarea
        className="bg-gray-200 h-48 w-96 focus:bg-gray-900"
        disabled
        ref={textareaRef}
      />
    </main>
  );
}

export default Main;
