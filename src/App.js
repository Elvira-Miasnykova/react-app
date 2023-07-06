import { useEffect, useState } from 'react';
import './App.css';
import Button from "./components/Button.jsx";
import fetchJokes from './services/api';

function App() {
  const [jokeName, setJokeName] = useState(null);
  const [nextJoke, setNextJoke] = useState(1);

  useEffect(() => {
    // if (jokeName === null) {
    //   return;
    // }

    fetchJokes()
      .then(results => setJokeName(results.results.value))
  }, [nextJoke])
  return (
    <div className="App">
      {jokeName=== null ? <p>Loading...</p> : <p>{ jokeName}</p>}
           
      <Button onClick={ () => setNextJoke(nextJoke + 1)} />
      
    </div>
  );
}

export default App;
