'use strict';
/*let hasDriversLicense = false;
const passTest = true;
if (passTest) hasDriversLicense = true; 
if (hasDriversLicense) console.log('i can drive');


const private = 'audio'; 
//functions declaration
function logger() {
    console.log('tunde is a very stupid boy')
}

logger();
logger();
logger(); */


/*function fruitProcessor(guava,mango) {
    const juice = `this juice is made with ${guava} guava and ${mango} mango`
    return juice
}

const guavaJuice= fruitProcessor(5,0);
console.log(guavaJuice);

const mangoJuice=fruitProcessor(0,5)
console.log(mangoJuice); 


const appleOrangeJuice = fruitProcessor(5,5);
console.log(appleOrangeJuice)





function makingPaint(blue,yellow) {
    const paint = `this paint has ${blue}blue paint and ${yellow} yellow paint`;
    return paint;  
}

const bluePaint=makingPaint(6,0)
console.log(bluePaint)

const yellowPaint=makingPaint(0,6)
console.log(yellowPaint)


const yellowBluePaint = makingPaint(3,3);
console.log(yellowBluePaint);*/


/*function iceCreamProductioon(chocolate,strawberry) {
    console.log(chocolate,strawberry);
    const iceCream= `this is a ${chocolate}chocolate ice cream,and this is a ${strawberry} strawberry ice cream`
    
};
const chocolateIceCream=iceCreamProductioon(1,0);
console.log(chocolateIceCream);

const strawberryiceCReam=iceCreamProductioon(0,1);
console.log(strawberryiceCReam); 




const iceCreamProduction=function (chocolate,strawberry) {
    return  `this is a ${chocolate}chocolate ice cream,and this is a ${strawberry} strawberry ice cream`
    
}
const chocolateIcecream=iceCreamProduction(1,0);
const strawberryIcecream=iceCreamProduction(0,1)
console.log(chocolateIcecream)
console.log(strawberryIcecream)




//function decalration


/*function calcAge(birthYear) {
     return 2037 - birthYear;
}

const age=calcAge(1991);
console.log(age);


//function expression

const calcAge1=function (birthYear) {
    return 2037 - birthYear;
}

const age2 = calcAge1(1991);
console.log(age,age2); 


function describeCountry(country,population,capitalCity) {
    return `${country} has ${population} million people and its capital city is ${capitalCity}`;
}


const finland=describeCountry('finland',60,'helsinki');

const spanish=describeCountry('spain',60,'madrid');

const nigeria=describeCountry('nigeria',80,'abuja')

console.log(finland,spanish,nigeria); 


const calcaAge =function (birthyear) {
    return 2037 - birthyear;
}   


//arrow function

const calcAge=birthyear => 2037 - birthyear;
const age=calcAge(1991)
console.log(age); 



const yearsLeftUntilRetirement=function (birthYear,firstName) {
    const age= 2006 - birthYear;
    const retirement = 65 - age
    return `${firstName} retires in ${retirement} years`
}
const age=yearsLeftUntilRetirement(1991,'opeyemi');
console.log(age); 

function cutFruitPieces(fruit) {
    return fruit * 4;
}


function fruitProcessor(guava,mango) {
   const guavaPieces= cutFruitPieces(guava)
   const mangoPieces= cutFruitPieces(mango)
   
    const juice = `this juice is made with ${guava} guava and ${mango} mango`
    return juice
}

const guavaPieces=fruitProcessor(2,3);
console.log(guavaPieces)


function paintdivider(params) {
    
}


function makingPaint(blue,yellow) {
    const paint = `this paint has ${blue}blue paint and ${yellow} yellow paint`;
    return paint;  
} 


//arrow function
const calcage2= birthyear => 2037 - birthyear;
calcage2(1995);


const calcAge3 = (birthyear, firstName)=> {
    const age3= 2037 - birthyear;
    const retirement = 65 - age3;
    return `${firstName} has ${retirement} years before his retirement`

} 
const age3 = calcAge3(1991,'opeyemi');
console.log(age3); 

function cutFruitPieces(fruit) {
    return fruit * 4
}


function fruitProcessor(apple,orange) {
   const applefruitpieces= cutFruitPieces(apple)
   const orangefruitPieces=cutFruitPieces(orange)
    return `juices is made with ${applefruitpieces} apple and ${orangefruitPieces} orange`
}

const applefruit=fruitProcessor(5,0);
const mangoFruit=fruitProcessor(0,5);
console.log(applefruit);
console.log(mangoFruit); *



const calcage=function (birthyear) {
    return 2037 - birthyear;
}

const yearsLeftUntilRetirement=function (birthYear,firstName) {
    const age = calcage(birthYear)
    const retirement = 65 - age

    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`)
        return retirement;

    } else {
        console.log(`${firstName} has already retired`)
        return -1;
    }
}
const toh=yearsLeftUntilRetirement(1991,'opeyemi');
console.log(toh);

const mike=yearsLeftUntilRetirement(1920, 'kafayat');
console.log(mike); 



//ARRAYS

const friends= ['pearlelee','philemon','lexxy','winner','deyprince','timmy','dimeji']

console.log(friends[0]);
console.log(friends[5]);

console.log(friends.length);

const number= [8,9,7,6,4];
console.log(number.length);
console.log(number[4]);


friends[2] ='jay'
console.log(friends);

const jonas= ['jonas', 'john', 46, 'teacher', friends];
console.log(jonas);
console.log(jonas.length); 


//exercise
function calcAge(birthyear) {
    return 2037 - birthyear;
}

const years = [1990,1967,2002,2010,2018];
const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[2]);

console.log(age1,age2,age3);

const friends= ['pearlelee','philemon','lexxy','winner','deyprince','timmy','dimeji'];
//add element
friends.push('jay');
console.log(friends);


friends.unshift('john');
console.log(friends);


//remove element
friends.pop() //last element will be removed
const popped=friends.pop();
console.log(friends);

friends.shift();
console.log(friends);
console.log(friends);
console.log(friends.indexOf('jay'));

friends.push(23)
console.log(friends.includes(23));

if (friends.includes('lexxy')) {
    console.log('you have a friend caled peter')
} 




const jonas = {
    firstname:'jonas',
    lastname:'paul',
    birthyear: 1991,
    job:'teacher',
    friends:['michael','peter','steven'],
    hasDriversLicense: true,
    currentyear: 2022,



    //calcAge: function (birthyear) {
      //  return 2037 - birthyear;
     // }

    //calcAge: function () {
      //  return 2037 - jonas.birthyear;
     // }
     calcAge: function () {
        this.age =  2037 - this.birthyear;
        this.newage =   this.currentyear - 1984
        return this.age;  
     },

    

}; 

 
  
  console.log(jonas.newage)
  
  


 const jonas ={
    firstName: 'jonas',
    age: 46,
    job: 'teacher',
    hasdriverLicence: false,
    getSummary: function(params) {
        return `${this.firstName} is a ${this.age} years old ${this.job}, he  ${this.hasdriverLicence ? 'does have ' : 'does not have '} a driver license`
    }
  };

console.log( jonas.getSummary()); */

//loooops



//for loop keeps running while condition is true
/*for (let rep = 2; rep <= 5; rep++){
    console.log(`lifting weight repetition ${rep}`);
};

for (let arsenal = 3; arsenal <=9 ; arsenal++) {
    console.log(`arsenal already won the trophy ${arsenal}`);
};



const jonasArray = [
    'jonas',
    'david',
    2037-1991,
    'teacher',
    ['michael','peter','steven'],
    true,
];

const types=[];

console.log('----only strings -----')

for (let i = 0; i < jonasArray.length; i++) {
    //reading from jonas array

    if(typeof jonasArray[i] !== 'strings') continue;
    console.log(jonasArray[i], typeof jonasArray[i]);


    //filling the types array
    //types[i] = typeof jonasArray[i];

    types.push(typeof jonasArray);
  
}

console.log('----break with number-----')
for (let i = 0; i < jonasArray.length; i++) {
    //reading from jonas array

    if(typeof jonasArray[i] !== 'number') break;
    console.log(jonasArray[i], typeof jonasArray[i]);

}



//looping over an array backward 

console.log(types); 

const street=[
    'fashola',
    'opeifa',
    'kibishile',
    'ebun',
];

for (let i = street.length; i >= 0; i--) {
    console.log(street[i]);
    
}


for (let exercise = 1; exercise  < 4; exercise++) {
    console.log(`-----------starting exercise ${exercise}`);
    


   for (let gg = 0; gg < 4; gg++) {
    console.log(`okay alright bryv ${gg}`)
    
   }
}; */



//A WHILE LOOP



/*let rep=1
while (rep<=10) {
    console.log(`lifting the weight and repetition ${rep}`)
    rep++
} 


let dice=Math.trunc(Math.random() * 6 + 1);

while (dice !==6) {
    console.log(`you rolled ${dice}`);
    dice=Math.trunc(Math.random() * 6 + 1);

    if (dice ===6) 
        console.log(`yo roll the right one ${dice}`)
    

} */








































 

















































