//calculator
function calculate(x, operation, y){
    switch(operation){
        case "+":
            return x + y;
        case "-":
            return x-y;
        case "*":
            return x*y;
        case "/":
            return x/y;
    }
}