const addForm = document.querySelector('.add');
const list = document.querySelector(".list-group")

addForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const todo = addForm.task.value.trim();
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

list.addEventListener("click", (e) => {
    if (e.target.classList.contains("delete")){
        e.target.parentElement.remove();
    }
})