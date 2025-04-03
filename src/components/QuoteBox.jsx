import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setQuote } from "../redux/quoteSlice";

const QuoteBox = () => {
    const {quote, author} = useSelector((state) => state.quotes);
    const dispatch = useDispatch();

    const fetchQuote = async () => {
        const response = await fetch("https://api.quotable.io/random");
        const data = await  response.json();
        dispatch(setQuote({quote: data.content, author: data.author}));
    };

    return(
        <div id="quote-box">
            <p id="text">"{quote}"</p>
            <h5 id="author">- {author}</h5>
            <button id="new-quote" onClick={fetchQuote}>New Quote</button>
            <a
                id="tweet-quote"
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(`"${quote}" - ${author}`)}`}
                target="_blank"
                rel="noopener noreferrer"
             >
                Tweet
             </a>
        </div>
    );
};

export default QuoteBox



