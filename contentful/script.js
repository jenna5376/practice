var client = contentful.createClient({
    space: 'ao9xr0e62ul3',
    environment: 'master', // defaults to 'master' if not set
    accessToken: 'NmAFm5cG7k6xsDCIJfLYSCBi7sEWur1h-_OGjqg4LB0'
});

client.getEntries().then(function (entries) {
// log the title for all the entries that have it
entries.items.forEach(function (entry) {

    let blog = document.getElementById("blog")

    let html = 
        `<hr>
        <div class = "post-info"> 
            <p> ${entry.fields.date.slice(0,10)} </p>
            <p class = "body"> post number ${entry.fields.postNumber} </p>
        </div>
        <h2> ${entry.fields.title} </h2>
        <p class = "body"> ${entry.fields.body} </p>
        <img class = "image" src = "${entry.fields.image.fields.file.url}"/>`

    blog.innerHTML += html
});
});
