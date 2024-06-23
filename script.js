const ptag = document.getElementById("quote-text");
const author = document.querySelector(".author");
const copy = document.querySelector(".copy");
const confirmCopy = document.querySelector(".confirm");
const url = "https://api.quotable.io/random";

async function fetchData() {
  const data = await fetch(url);
  const response = await data.json();
  console.log(response);

  $("#quote-text").fadeIn(1000);
  ptag.innerHTML = response.content;
  author.innerHTML = `- ${response.author}`;
}

document.getElementById("new-quote").addEventListener("click", () => {
  setTimeout(() => {
    ptag.textContent = `Loading...`;
    fetchData();
  }, 100);
});

copy.addEventListener("click", () => {
  $(".confirm").fadeIn(500);
  navigator.clipboard.writeText(ptag.innerHTML);
  confirmCopy.textContent = "Copied";
  setTimeout(() => {
    $(".confirm").fadeOut(1000);
  }, 1000);
});
fetchData();
