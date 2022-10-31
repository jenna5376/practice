document.getElementById("submit").addEventListener('click', onSubmit);

function onSubmit(){
    let nameBox = document.getElementById("name-input");
    console.log(nameBox.value);
    let addressBox = document.getElementById("address-input");
    console.log(addressBox.value);
    let ageBox = document.getElementById("age-input");
    console.log(ageBox.value);
    let schoolBox = document.getElementById("school-input");
    console.log(schoolBox.value);

    setTimeout(() => {

    }, 2000)
}