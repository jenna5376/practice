//parity
function parityUpToTen(){
    for (let i = 1; i <= 10; i++) {
        if (i % 2 === 0) {
          console.log(`${i} is even`);
        }
        else{
            console.log(`${i} is odd`);
        }
    }
}
function parityUserInput(){
    let input = String(prompt("Enter a number:"));
    let counter = 0;

    while (counter < 10){
        if (input % 2 === 0) {
            console.log(`${input} is even`);
          }
        else{
              console.log(`${input} is odd`);
          }
        input++;
        counter++;
    }
}