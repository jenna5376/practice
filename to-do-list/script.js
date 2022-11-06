//https://www.youtube.com/watch?v=kzHmtmCMUwk&ab_channel=CodeCreative

const addForm = document.querySelector('.add');
const list = document.querySelector(".list-group")

console.log(addForm);

addForm.addEventListener("submit", (e) => {
    e.preventDefault();
    //add is the input name
    //trim to remove whitespace
    const todo = addForm.add.value.trim();

    //checks if there is input
    if (todo.length != 0){
        generateTemplate(todo);
        addForm.reset();
    }
    else{
        alert("Please input a task");
    }
})

const generateTemplate = (todo) => {
    const html = `<li class = "list-item">
        <span>${todo}</span>
        <i class="delete fa-solid fa-xmark"></i>            
    </li>`;
    list.innerHTML += html;
}

//if the element you are clicing says delete, delete it
list.addEventListener("click", (e) => {
    if (e.target.classList.contains("delete")){
        e.target.parentElement.remove();
    }
})