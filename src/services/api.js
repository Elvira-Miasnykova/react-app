// https://api.chucknorris.io/jokes/random

async function fetchJokes () {
  const response = await fetch('https://api.chucknorris.io/jokes/random');

  if (!response.ok) {
    const message = `An error has occured: ${response.status}`;
    throw new Error(message);
  }

  const results = await response.json();
    return { results };
}

fetchJokes().catch(error => {
  console.log(error.message); // 'An error has occurred: 404'
});

export default fetchJokes;