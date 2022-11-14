const key = "?query&api-key=myzlAQknanGuLmcsws9ASykMzozKqsbS";
const list = document.getElementById("list-group");

fetch(`https://api.nytimes.com/svc/movies/v2/reviews/picks.json${key}`)
.then(response => response.json())
.then(response => {
    let length = response.results.length;

    for (let i = 0; i< length; i++){
        let result = response.results[i];
        let by = result.byline;
        let date = result.date_updated;
        let headline = result.headline;
        let link = result.link.url;
        let summary = result.summary_short;

        const html = 
        `<ul class = "list-group">
            <a class = "link list-item" href = "${link}">
                <li>
                    <div class = "info">
                        <p class = "by">${by}</p>
                        <p class = "date">${date}</p>
                    </div>
                    <h2 class = "headline">${headline}</h2>
                    <p class = "summary">${summary}</p>
                </li>
            </a>
            <hr/>
        </ul>`;
    
        list.innerHTML += html;
    }
})
.catch(error => console.log(error));