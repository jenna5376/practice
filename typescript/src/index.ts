/*
as best practice enable
- noUnusedLocals
- noUnusedParameters
- noImplicitReturns
*/

type Customer = {
    birthday: Date
}
function getCustomer(id: number): Customer | null | undefined {
    return id === 0 ? null : {birthday: new Date()}
}
let customer = getCustomer(1)
console.log(customer?.birthday?.getFullYear())
//customers?.[0]


function greet(name: string | null | undefined){
    if (name)
        console.log(name.toUpperCase())
    else 
        console.log('Hola!')
}
greet(undefined)


type Quantity = 50 | 100
let quantity: Quantity = 100
type Metric = 'cm' | 'inch'


type Draggable = {
    drag: () => void
}
type Resizable = {
    resize: () => void
}
type UIWidget = Draggable & Resizable
let textBox: UIWidget = {
    drag: () => {},
    resize: () => {}
}


function kgToLbs(weight: number | string) {
    if (typeof weight === 'number'){
        return weight * 2.2
    }
    else {
        return parseInt(weight) * 2.2
    }
}
kgToLbs(10)
kgToLbs('10kg')


type Employee = {
    readonly id: number,
    name: string,
    phone?: number,
    retire: (date: Date) => void
}
let employee : Employee = {
    id: 1, 
    name: 'Mosh',
    retire: (date: Date) => {
        console.log(date)
    }
};


function calculateTax(income: number, taxYear = 2022): number {    
    if (taxYear < 2022)
        return income * 1.2
    return income * 1.3
}
calculateTax(10000, 2022)