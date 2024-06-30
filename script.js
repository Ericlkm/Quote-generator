const ptag = document.getElementById("quote-text");
const author = document.querySelector(".author");
const copy = document.querySelector(".copy");
const confirmCopy = document.querySelector(".confirm");
const url = "https://api.quotable.io/random";
ptag.innerHTML = `
<span class="major-mono-display-regular" style="font-weight:bolder;" >
Follow me on <a class="text-decoration-none fa-beat-fade" href="http://github.com/ericlkm" target="_blank" title="my Github">github</a>!!
</span><hr/><br/>
Click below to generate quote!<br/><i class="fa-solid fa-arrow-down fa-bounce"></i>
`;

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
    author.innerHTML = "";
    fetchData();
  }, 100);
});

copy.addEventListener("click", () => {
  navigator.clipboard.writeText(ptag.innerHTML);
  confirmCopy.textContent = "Copied";
  setTimeout(() => {
    $(".confirm").fadeOut(1000);
  }, 1000);
});
