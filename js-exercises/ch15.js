//newspaper
const newspapers = ["https://www.nytimes.com", "https://www.washingtonpost.com", "http://www.economist.com"];

for (newspaper of newspapers){
    document.getElementById("content").insertAdjacentHTML("afterBegin", `<a href = "${newspaper}">${newspaper}</a><br>`);
}