// Remember, we're gonna use strict mode in all scripts now!
'use strict';
//Problem 1`
/*const temperature=[
    3,-2,-6,-1,'error',9,13,17,15,14,9,5
]

    function calctemp(temp) {
        let max = temp[0]
        let min= temp[0]

        for (let i = 0; i < temp.length; i++) {
            if (temp[i]>max) {
                max = temp[i]
            }
            if (temp[i]<min) {
                min=temp[i]
            }
        }

        console.log(max,min)
        return max-min;
    }



    
const amplitude=  calctemp(temperature);
console.log(amplitude);






//problem 2
//function should now receive two arrays of tempreature
//merge arrays */







//1) understanding the problem

//- what is temperature amplitude? answer is differene between hightest and lowest temperaure in the array;

// - how to compute the max and mini?
//- whats a sensor error and what to do when one occurs;

//2) breaking problems into sub-problems;
// how to ignore error
//find max value in temperature array
//find mini value in temp array
//subtracr mini from max and return it








const measureKelvin= function (params) {
    const measurement={
        type:'temp',
        unit:'celcius',
        value:10//Number(prompt('degree celcius')),
    }

    console.log(measurement)

    const kelvin= measurement.value + 234;
    return kelvin;
}

console.log(measureKelvin())








