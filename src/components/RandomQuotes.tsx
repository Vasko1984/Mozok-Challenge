import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { QuoteDataProps } from "./Quotes";
import { useNavigate } from "react-router-dom";

const RandomQuotes = () => {
  const [randomQuote, setRandomQuote] = useState<QuoteDataProps | null>(null);
  const navigate = useNavigate();

  function getRandomInt(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function fetchNewQuote() {
    fetch(
      "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
    )
      .then((res) => res.json())
      .then((data) => {
        const quotesNumber = data.quotes.length - 1;
        const quoteIndex = getRandomInt(0, quotesNumber);
        setRandomQuote(data.quotes[quoteIndex]);
      });
  }

  useEffect(() => {
    fetchNewQuote();
    console.log("fetch");
  }, []);

  return (
    <>
      <div>
        <h3>{randomQuote?.quote}</h3>
        <p>{randomQuote?.author}</p>
      </div>
      <div className="button1">
        <Button variant="contained" onClick={() => navigate("/quotes")}>
          Go Back
        </Button>
        <Button variant="contained" onClick={fetchNewQuote}>
          {" "}
          New Random Quote
        </Button>
      </div>
    </>
  );
};

export default RandomQuotes;
