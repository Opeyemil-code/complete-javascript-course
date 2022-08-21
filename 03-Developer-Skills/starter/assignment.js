'use strict';


const numbe=[
    17,21,23
];

function printForecast(arr) {
    let str ='';
   for (let i = 0; i < arr.length; i++) {
    //console.log(`${arr[i]} in ${+1} days`)
    str= str + `${arr[i]}C in ${i+1} days`
   }

   console.log(str)
}

printForecast(numbe)
console.log(printForecast(numbe));


























/*const numb=[
    17,21,23
];

function printForecast(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(`${arr[i]} in ${i + 1} days`)
        
    }
}

printForecast(numb)*/


