const jokeContainer = document.querySelector("#joke");
const btn = document.querySelector("#btn");
const API =
  "https://hindi-jokes-api.onrender.com/jokes?api_key=578c747d7fac08b482e4625a0dd8";
const loader = document.querySelector(".spinner");
const creator = document.querySelector("#creator");

async function getJokes() {
  loader.classList.add("active");
  try {
    const response = await fetch(API);
    const data = await response.json();
    loader.classList.remove("active");
    jokeContainer.innerHTML = data.jokeContent;
    creator.innerHTML = "Comic : " + data.created_by;
  } catch (error) {
    console.log(error);
    loader.classList.remove("active");
    jokeContainer.textContent = "Something went wrong";
  }
}
btn.addEventListener("click", getJokes);
getJokes();
