import TimerForm from "./TimerForm";
import TypingArea from "./TypingArea";

function Main() {
  function handleSubmit(event) {
    event.preventDefault();
    console.log(event.target.elements[0].value);
  }

  return (
    <main className="flex flex-col gap-4 items-center mx-auto w-96">
      <TimerForm handler={handleSubmit} />
      <TypingArea />
    </main>
  );
}

export default Main;
