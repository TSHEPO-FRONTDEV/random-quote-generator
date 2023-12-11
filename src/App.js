import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  const fetchQuote = async () => {
    const response = await fetch('https://api.quotable.io/random');
    const data = await response.json();
    setQuote(data.content);
    setAuthor(data.author);
  }
  useEffect(() => {
    fetchQuote();
  }, []);
  return (
    <div className='App'>
        <div id="quote-box">
          <p id="text">{quote}</p>
          <p id="author">{author}</p>
          <button id="new-quote" onClick={fetchQuote}>New quote</button>
          <a id="tweet-quote" href={`https://twitter.com/intent/tweet?text=${quote} - ${author}`}>Tweet quote</a>

        </div>
      </div>
  )
}

export default App;
