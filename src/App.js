import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [jokes, setJokes] = useState("");

  const fetchJokes = async () => {
    const res = await fetch("https://api.chucknorris.io/jokes/random");
    const data = await res.json();
    setJokes(data);
  };

  useEffect(() => {
    fetchJokes;
  }, []);
  return (
    <div className="App">
      <h1>Want some jokes 😂</h1>
      <p>{jokes.value}</p>
      <button className="btn" onClick={fetchJokes}>
        Get New Joke
      </button>
    </div>
  );
}
