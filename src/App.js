import { useEffect, useState } from "react";

export default function app() {
  const [getAdvice, setAdvice] = useState("");
  const [count, setCount] = useState(0);
  async function advice() {
    const resp = await fetch("https://api.adviceslip.com/advice");
    const data = await resp.json;
    console.log("nothing you get");
    setAdvice("nothing you get");
    setCount((c) => c + 1);
  }
  useEffect(function () {
    advice();
  }, []);
  return (
    <div>
      <h1>{getAdvice}</h1>
      <button onClick={advice}>Submit</button>
      <Message count={count} />
    </div>
  );
}

function Message(props) {
  return (
    <p>
      You have clicked <strong>{props.count}</strong> times
    </p>
  );
}
