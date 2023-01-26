'use strict';

function calcAge(birthYear) {
    const age = 2037 - birthYear

    function printAge(params) {
        const output = `you are the ${age}, born in ${birthYear}` 
        console.log(output)
        if (birthYear >= 1981 && birthYear < 1996) {
            const str = `Oh! and you are a mil ${firstName}` 
             console.log(str)  
             function add(a,b) {
                const addTogether = a + b
                console.log(addTogether)
                return addTogether;
             }  
             add(5,6)
        }
    }

    printAge();
    return age;
}

const firstName = 'jonas'
calcAge(1991)


