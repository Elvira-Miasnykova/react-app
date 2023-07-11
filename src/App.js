import { useEffect, useState } from 'react';
import './App.css';
import Button from "./components/Button.jsx";
import fetchJokes from './services/api';

function App() {
  const [jokeName, setJokeName] = useState("");
  //const [nextJoke, setNextJoke] = useState(1);
  const [loading, setLoading] = useState(false);

  const getJokes = () => {
    fetchJokes()
      .then(setLoading(true))
      .then(response => setJokeName(response.value))
      .catch(error => console.log(error))
      .finally(setLoading(false))
    
  }

  useEffect(() => {
    getJokes();
  }, [])
  
  return (
    <div className="App">
      {jokeName=== "" ? <p>Loading...</p> : <p>{ jokeName}</p>}
           
      <Button onClick={() => getJokes()}/>
      
    </div>
  );
}

export default App;
