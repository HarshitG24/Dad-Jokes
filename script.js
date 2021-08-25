const jokeEl = document.getElementById("joke");
const jokeBtn = document.getElementById("jokeBtn");

fetchJoke();

jokeBtn.addEventListener("click", fetchJoke);

// Using async-await
async function fetchJoke() {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };
  const apiRespose = await fetch("https://icanhazdadjoke.com", config);
  const data = await apiRespose.json();
  jokeEl.innerHTML = data.joke;
}

//Using then

// function fetchJoke() {
//   const config = {
//     headers: {
//       Accept: "application/json",
//     },
//   };
//   fetch("https://icanhazdadjoke.com", config)
//     .then((res) => res.json())
//     .then((data) => {
//       if (data.status === 200) jokeEl.innerHTML = data.joke;
//     });
// }
