//track submit button
let submitButton = document.getElementById("submit");
submitButton.addEventListener('click', onSubmit);

//track checkbox
let specialMessage;
document.getElementById("special-message").addEventListener("change", e => {
    specialMessage = e.target.checked;
});

//validate email
function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

//validate fields
function validateFields(inputs, email, checkbox){
    let isFilled = true;

    //check if input fields are empty
    inputs.forEach(input => {
        if (input.value == ""){
            input.classList.add("invalid-border")
            isFilled = false; 
        }
        else{
            input.classList.remove("invalid-border");
        }
    })  
    
    //validate email
    if (!validateEmail(email.value)){
        email.classList.add("invalid-border")
        isFilled = false;
    }
    else{
        email.classList.remove("invalid-outline");
    }

    //check checkbox
    if (!specialMessage){
        checkbox.classList.add("invalid-outline")
        isFilled = false;
    }
    else{
        checkbox.classList.remove("invalid-outline");   
    }

    return isFilled;
}

//when submit button is pressed
function onSubmit(){

    //save input values
    const inputs = document.querySelectorAll('#name-input, #email-input');
    let nameBox = document.getElementById("name-input");
    nameValue = nameBox.value;
    let emailBox = document.getElementById("email-input");
    emailValue = emailBox.value;
    let checkBox = document.getElementById("special-message");
    checkValue = checkBox.value;
    let messageBox = document.getElementById("message");

    //exit if there are invalid fields
    let validFields = validateFields(inputs, emailBox, checkBox);
    if (!validFields){
        return;
    }
    
    //log values
    console.log("Name: " + nameValue);
    console.log("Email: " + emailValue);
    console.log("Checkbox: " + checkBox.checked);

    //replace button with loader
    document.getElementById("submit").style.display = "none";
    document.getElementById("loader").style.display = "block"

    //show loader
    setTimeout(() => {
        document.getElementById("submit").style.display = "block";
        document.getElementById("loader").style.display = "none"

        //write message
        messageBox.innerText = `Thank you ${nameBox.value}`;
        var img = document.createElement("img");
        img.src = "./cat.png"
        messageBox.appendChild(img);

    //animate form
    document.getElementById("form").style.transform = "rotate(16deg)";
    document.getElementById("form").style.transition = "transform 0.5s ease-in";
    }, 3000)

    //clear form
    setTimeout(() => {
        const inputs = document.querySelectorAll('#name-input, #email-input');
        inputs.forEach(input => {
            input.value = "";
        })        
        checkBox.checked = false;

        messageBox.innerText = "";
        submitButton.style.backgroundColor = "white";
        document.getElementById("form").style.transform = "rotate(0deg)";
    }, 6000)
}