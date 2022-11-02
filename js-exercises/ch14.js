//counting elements
function countElements(cssSelector){
    return document.querySelectorAll(cssSelector).length
}

console.log(countElements("p"));              // Should show 4
console.log(countElements(".adjective"));     // Should show 3
console.log(countElements("p .adjective"));   // Should show 3
console.log(countElements("p > .adjective")); // Should show 2

//handing attributes
function linkInfo(){
    links = document.querySelectorAll("a");
    console.log(links.length);
    console.log(links[0].getAttribute("href"));
    console.log(links[links.length-1].getAttribute("href"));
}

//handing classes
const has = (id, someClass) => {
    console.log(document.getElementById(id).classList.contains(someClass));
}

linkInfo();
has("saxophone", "woodwind");     // Should show true
has("saxophone", "brass");        // Should show false
has("trumpet", "brass");          // Should show true
has("contrabass", "chordophone"); // Should show an error message