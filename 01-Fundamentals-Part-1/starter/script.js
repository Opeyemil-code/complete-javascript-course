/*let js = "amazing";
console.log(40 + 9 + 10 + 80);
console.log("jonas");
console.log(23);


let firstName = "jonas"
console.log(firstName);
console.log(firstName);
console.log(firstName);
console.log(firstName);

//agba agba 
let threeyears = 3;
console.log(threeyears);
console.log(typeof threeyears)


let PI = 3.1415;

let myFirstJob = "programmer";
let myCurrentJob = "teacher";
console.log(myFirstJob + myCurrentJob);
console.log(typeof myFirstJob) */


//boolean



/*let javaScriptIsFun = true;
console.log(javaScriptIsFun);

console.log(typeof true);


javaScriptIsFun = 'yes!';
console.log(typeof 'yes!');


let year;
console.log(typeof year);

year = 1991;
console.log(typeof year)


let age = 30;
age =31;


const birthYear = 1991;*

const now = 2037
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);
console.log(ageSarah);


console.log(ageJonas * ageSarah, ageJonas/ageSarah, 2 ** 3)
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2


const firstName = 'jonas';
const lastName = 'opeyemi';
console.log(firstName + ' ' +lastName);

//assignment operators
//let x = 6 + 5;
//console.log(x);
//x += 10;//x = x + 10
//console.log(x);

/*x *= 4;// x = x * 4 ;
x ++ ;//x = x + 1;
x--;//x = x-1;
console.log(x); *


//comparison operator
console.log(ageJonas>ageSarah);//>, <, >=, <=
console.log(ageSarah >= 18);


let x, y;
x = y = 25 -10 - 5; // x=y=10, x =10, y =10;
console.log(x,y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);

const firstName = 'jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037

const jonas = "i'm " + firstName  + ' , ' + ' a ' +   (year - birthYear) + ' years old ' + ' my job is a ' + job;
console.log(jonas);

//template literals
const jonasNew = `I'm ${firstName}, i'm a ${job}, i'm ${year - birthYear} years old `;
console.log(jonasNew);


console.log(`jus regular strings`)

//multi line template strings
console.log(`strings
multiple
line`)


//multi line  strings
console.log(`strings with \n\
multile \n\
lines`); 

const age = 17;
const isOldEnough = age >= 18;
console.log(isOldEnough);

if (age>=18) {
    console.log('jonas can start driving')
} else {
    yearsLeft = 18 -age;
    console.log(`jonas will wait ${yearsLeft} year to start driving`)
}; 


const age = 18;
const goodEnough = age >= 19;

if (goodEnough) {
    console.log(`he will receive a very good price`)
    
}
else{
    console.log(`he will receive bastard cane`)
};


const birthYear = 1991;
if (birthYear <= 2000) {
    century = 20
} else {
     century = 21
}

console.log(century); 

const markWeight = 78;
const johnWeight = 92;

const markHeight = 1.69;
const johnHeight = 1.95


const bmiMark = markWeight / markHeight ** 2;
console.log(bmiMark);

const BmiJohn = johnWeight / johnHeight **2;
console.log(BmiJohn);

const MarkHigherBmi = bmiMark > BmiJohn;
console.log(MarkHigherBmi);


const tarkWEight = 95;
const tarkHeight = 1.88;

const tohnWeight = 85;
const tohnHeight = 1.76;
const tarkBMI = tarkWEight / tarkHeight ** 2;
const tohnBMI = tohnWeight / tohnHeight ** 2;


if (tarkBMI > tohnBMI) {
    console.log(`tark's BMI is greater than tohn's`)
} else {
    console.log(`tohn's BMI is greater than Tarks's`)
    
}

if (bmiMark > BmiJohn) {
    console.log(`mark's BMI is greater than john's`)
} else {
    console.log(`john's BMI is greater than mark's`)
} 

// type conversion
const inputYear = "1991"
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear)+ 18);


console.log(Number('jonas'));

console.log


const opeyemiAge = '2002'
console.log(Number(opeyemiAge));


//type coercion
console.log('i am ' + 23 + ' years old');
console.log('23' - '10' - 3);

console.log('23' + '10' + 3);

console.log('23' * '2');


let n = '1' + 1;
n = n - 1;
console.log(n);

const g = 2 + 4 + 6 + '6';
console.log(g);

const o = 10-4-3-'2';
console.log(o); 


// 5 falsy value : 0, '', undefined, NaN, null

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(NaN));
console.log(Boolean(null));
console.log(Boolean('jonas'));


const money = 0;
if (money) {
    console.log("don't spend at all ;");
} else {
    console.log('you should get a job!')
};


let height =1;
if (height) {
    console.log('man is tall')
} else {
    console.log('man is short asf')
}; 


const age = 18;
if (age == 18) console.log('you jus became an adult');
if (age === 18) console.log('you became an adult'); 


const favorite =Number(prompt("what is your favorite number?"));
console.log(favorite);

if(favorite === 23) {
    console.log("23 is an amazing number!")
} else if (favorite === 7) {
    console.log('7 is also a coolnumber')
} else {
    console.log('Number is not 23 or 7')
}; 


const lastName =prompt("what is your last name?")
console.log(lastName);

if (lastName === 'opeyemi') {
    console.log('opeyemi is a very nice name')
} else if (lastName === 'kafayat'){
    console.log('kafayat is also a very nice name')
}
else {
    console.log('name is not opeyemi or kafayat')
}


if (favorite !== 23) console.log('why not 23?') 


const hasDriverLicense = true;
const hasGoodVision = true;
const isTired = true;

console.log(hasDriverLicense && hasGoodVision);
console.log(hasDriverLicense || hasGoodVision);
console.log(!hasDriverLicense);


const shouldDrive = hasDriverLicense && hasGoodVision && !isTired;
if (shouldDrive) {
    console.log(`you can drive`)
} else  {
    console.log(`another person should drive`)
    
}; &*/



/*const day = 'monday'

switch (day) {
    case "monday":
        console.log('plan course structure');
        console.log('go to coding camp');
        break;

    case 'tuesday':
        console.log('prepare theory videos');
        break;

    case 'wednesday':
    case 'thursday' :
        console.log('Write some code examples')
       break;

    case "friday":

      console.log('Record videos');
      break;
    
    case 'saturday':
    case 'sunday' :
        console.log('enjoy the weekend!');
        break;
    default:
        console.log('Not a valid day');
}; 


const day = 'thursday'
if (day === 'monday') {
    console.log('plan course structure');
    console.log('Go to coding camp');
} else if (day === 'tuesday'){
    console.log('prepare theory videos');
}else if (day === 'wednesday' || day ==='thursday'){
    console.log('write code examples');
}else if  (day === 'friday'){
    console.log('Record videos');
}else if (day === 'saturday' && 'sunday'){
    console.log('have fun!')
}else {
    console.log('not a valid day')
}; 


// an expression 

3 + 4 
1998
true && false && !false

//statement
if (23 > 10) {
    const str = "23 is bigger"
} 

console.log(`i'm ${2037 - 1991} years old`);
 



const age = 24;
const drink = age>= 18 ? 'wine' : 'water'
console.log(drink);

let drink2;
if (age >= 18) {
    drink2 = 'wine'
} else {
    drink2 = 'water'
};

console.log(drink2);

console.log(`i like to drink ${drink}`) 


const bill = 430
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
const total = bill + tip;
console.log(`your bill value is ${bill}, your tip value is ${tip},and the total value is ${total}`); */


/*const bill2 = 300;
const tip2 = bill2 >= 50 && bill2 <= 300 ? bill * 0.15 : bill * 20;
const total1= bill + tip

if (bill2 <=300 && bill >=50) {
    console.log(`you are to tip ${tip2}`)
} else{
    
}
console.log(`your bill value ${bill2}, your tip value ${tip2},your totalvalue is ${total1}`)*/
































 
    




































