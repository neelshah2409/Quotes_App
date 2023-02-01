const newQuote = document.getElementById("newQuote");
const quote = document.getElementById("quote");
const author = document.getElementById("author");
const share = document.getElementById("share");
let quoteData, currentQuote, currentAuthor;

const fetchData = async() => {
    try {
        let data = await fetch("quotes.json");
        data = await data.json()
        return data;
    } catch (err) {
        alert("Can't Load API");
    }
}

fetchData().then((result) => {
    quoteData = result;
    random = Math.random();
    random = random * 1000;
    random = Math.floor(random);
    random %= 1644;
    currentQuote = quoteData[random].text;
    currentAuthor = "By " + quoteData[random].author;
    quote.innerHTML = currentQuote;
    author.innerHTML = currentAuthor;
});
const reloadQuote = () => {
    random = Math.random();
    random = random * 1000;
    random = Math.floor(random);
    random %= 1644;
    currentQuote = quoteData[random].text;
    currentAuthor = (quoteData[random].author == null) ? "Unknown" : "By " + quoteData[random].author;
    quote.innerHTML = currentQuote;
    author.innerHTML = currentAuthor;
}

newQuote.addEventListener("click", reloadQuote);
share.addEventListener("click", () => {
    window.open(`https://wa.me/?text=${currentQuote}     \n\n${currentAuthor}`);
})