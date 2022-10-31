//musketeers
const musketeers = ["Athos", "Porthos", "Aramis"];
for (let i = 0; i < musketeers.length; i++){
    console.log(musketeers[i]);
}
musketeers.push("D'Artagnan");
musketeers.forEach(musketeer =>{
    console.log(musketeer);
});
musketeers.splice(2,1);
for (const musketeer of musketeers){
    console.log(musketeer);
}

//sum of values
const values = [3, 11, 7, 2, 9, 10];
let sum = 0;

for (let i = 0; i < values.length; i++){
    sum += values[i];
}