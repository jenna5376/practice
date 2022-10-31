//adding character experience
const aurora = {
    name: "Aurora",
    health: 150,
    strength: 25,
    xp: 0,
  
    describe() {
      return `${this.name} has ${this.health} health points, ${this
        .strength} as strength and ${this.xp} XP points`;
    }
};
  
//modeling a dog
const dog = {
    name: "Midory",
    species: "Shih-Tzu",
    size: 15,

    bark(){
        return "Woof! Woof!";
    }
};

//modeling a bank account
const account = {
    name: "Alex",
    balance: 0,
    
    credit(creditValue){
        this.balance += creditValue;
    },
    describe(){
        return `owner: ${this.name}, balance ${this.balance}`;
    }
}