// https://api.chucknorris.io/jokes/random

async function fetchJoke() {
       const getChuck= await fetch("https://api.chucknorris.io/jokes/random").then(
    (response) => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    }
        )
        return getChuck
    
}
export default fetchJoke;