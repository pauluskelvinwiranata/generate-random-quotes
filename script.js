const api_url = "https://api.quotable.io/random";
const quotes = document.getElementById("quotes");
const author = document.getElementById("author");

async function getquote(url) {
  const response = await fetch(url);
  var data = await response.json();

  quotes.innerHTML = data.content;
  author.innerHTML = data.author;
}

getquote(api_url);
