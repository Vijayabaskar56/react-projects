import { useEffect, useState } from "react";
import "./App.css";
import { Button } from "./Button";

const randomQuote = (quotes) => {
  return quotes[Math.floor(Math.random() * quotes.length)];
};

const App = () => {
  const [quotes, setQuotes] = useState([]);
  const [quote, setQuote] = useState(null);

  useEffect(() => {
    fetch("https://type.fit/api/quotes")
      .then((res) => res.json())
      .then((json) => {
        setQuotes(json);
        setQuote(json[0]);
      });
  }, []);

  function getNewQuote() {
    setQuote(randomQuote(quotes));
  }

  return (
    <>
      <div className="quote-box">
        <div className="text">
          <span className="text-cont">"{quote?.text}"</span>
        </div>
        <div className="author">- {quote?.author}</div>
      <div className="button">
        <button
          className="new-quote"
          onClick={getNewQuote}>
          New Quote
        </button>
      </div>
      </div>
    </>
  );
};

export default App;
