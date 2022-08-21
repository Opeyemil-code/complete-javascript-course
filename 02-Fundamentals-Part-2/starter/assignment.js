'strict mode'

/*const describeCountry=function (country,population,capitalCity) {
    return `${country} has ${population} million people and its capital city is ${capitalCity}`;
}

const italy=describeCountry('italy',60,'rome');
const france=describeCountry('france',65,'pais');

console.log(italy);
console.log(france);


function percentageOfWorld1(population) {
    return (population/7900) * 100;
}

const chinaPopulation=percentageOfWorld1(60);
console.log(chinaPopulation);

const nigeriaPopulation = percentageOfWorld1(200);
console.log(nigeriaPopulation)

const italyPopulation= percentageOfWorld1(70);
console.log(italyPopulation);



const percentageOfWorld2=  function (population) {
    return (population/7900) * 100;
}

const chinPopulation = percentageOfWorld2(60)
const igeriaPopulation= percentageOfWorld2(200);
const talyPopulation = percentageOfWorld2(70)

console.log(`china has ${chinPopulation} of the world population`)

console.log(`nigeria has ${igeriaPopulation} of the world population`)

console.log(`taly has ${talyPopulation} of the world population`); 

const calcAverage=(a,b,c) => (a + b + c)/3;
let DolphinScore=calcAverage(24,43,71);
let koalasScore=calcAverage(65,54,49);
console.log(DolphinScore,koalasScore);


function checkwinner(avgDolphins,avgKoalas) {
    if (avgDolphins >=2 * avgKoalas) {
        console.log(`dolphins win the game and the scores is (${avgDolphins} - ${avgKoalas})`)
    } else if (avgKoalas >=2 * avgDolphins) {
        console.log(`Koalas wins the game and the scores is ${avgKoalas} - ${avgDolphins}`)
    } else {
        console.log(`no one wins the game`)
    }
    
}

console.log(checkwinner(DolphinScore,koalasScore));

//test2

DolphinScore=calcAverage(85,54,41);
koalasScore=calcAverage(23,34,27);
console.log(DolphinScore,koalasScore)
checkwinner(DolphinScore,koalasScore); 


const describePopulation=function (country,population){
      return `${country} has more than ${population} million people which is about 18.2 percent of the world`
}



const china=describePopulation('china',1441);
console.log(china); 

function percentageOfWorld1(population) {
    return (population/7900) * 100;
}

const population= [151,789,657,600]
console.log(population===4)

const percentage1=percentageOfWorld1(population[0])
const percentage2=percentageOfWorld1(population[1])
const percentage3=percentageOfWorld1(population[2])
const percentage4=percentageOfWorld1(population[3])

console.log(percentage1,percentage2,percentage3,percentage4);



const neighbours= ['ghana','nigeria','kenya'];
const addedC=neighbours.push('Utopia');
neighbours.pop();
console.log(neighbours)
if (neighbours.includes('germany')) {
    console.log('Probably a central european country')
} else {
    console.log('probably not a central european country')
}

neighbours[neighbours.indexOf('sweden')] = 'republic of sweden'
console.log(neighbours); 


const bill = 430
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
const total = bill + tip;
console.log(`your bill value is ${bill}, your tip value is ${tip},and the total value is ${total}`); 




function calcTip(bill) {
    const tip= bill >= 50 && bill <=300 ? bill * 0.15 : bill * 0.20;
    return tip;
}
const bills=[125,555,44]
console.log(bills)
const firstdata=calcTip(bills[0]);
const seconddata=calcTip(bills[1]);
const thirddata=calcTip(bills[2]);

console.log(firstdata,seconddata,thirddata);

const tips=[calcTip(bills[0]),calcTip(bills[1]),calcTip(bills[2])];
console.log(tips)

const total=[bills[0]+tips[0],bills[1]+tips[1],bills[2]]+tips[2];
console.log(total);


const jonasArray = [
    'jonas',
    'john' ,
    2037 - 1991,
    'teacher'
    ['michael','peter', 'stephen']
]; 

 

const jonas = {
    firstName:'jonas',
    lastName:'opeyemi',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['michael','peter', 'stephen'],


}
console.log(jonas);
console.log(jonas.job)
console.log(jonas['firstName']);
console.log(jonas['firstName']);
console.log(jonas['lastName']);
*/

/*const nameKey = 'Name'
console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]); 


const interestedIn=  prompt('what do you want to know about jonas? choose between firstName, lastName, age, job, and Friends');


if (jonas[interestedIn]) {
    console.log(jonas[interestedIn]);
} else {
    console.log('Wrong request! choose between firstName, lastName, age, job, and Friends')
};

jonas.location = 'Portugal';
jonas['twitter'] = '@opeyemil1'

console.log(jonas); 

//challenge



console.log(`${jonas.firstName} has ${jonas.friends.length} and his best friends is called ${jonas.friends[0]}`); 


const bmiMark = {
    firstName: 'Mark',
    secondName: 'Miller',
    weight: 78,
    height: 1.69,
    CalcbmiMark: function (params) {
        return this.bmi = this.weight/ this.height ** 2;
    }
    
}

bmiMark.CalcbmiMark()
console.log(bmiMark.CalcbmiMark())

const bmiJohn= {
    firstName: 'john',
    secondName: 'smith',
    weight: 92,
    height:1.95,
    calcBMIJohn : function (params) {
        return this.bmi = this.weight/this.height ** 2 ;
    }

       
}


bmiJohn.calcBMIJohn()
console.log(bmiJohn.calcBMIJohn())

console.log(bmiMark.CalcbmiMark(),  bmiJohn.calcBMIJohn())

if (bmiMark.bmi > bmiJohn.bmi) {
    console.log(`${bmiMark.firstName}'s BMI ${bmiMark.bmi} is higher than ${bmiJohn.firstName}'s BMI ${bmiJohn.bmi}`)
} else if(bmiJohn.bmi >bmiMark.bmi){
    console.log(`${bmiJohn.firstName}'s BMI ${bmiJohn.calcBMIJohn()} is higer than ${bmiMark.firstName} ${bmi.CalcbmiMark()}`)
};



/*const jonas = {
    firstName:'jonas',
    lastName:'opeyemi',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['michael','peter', 'stephen'],


} 


const bills=[
    22,295,176,40,37,105,1100,86,52
]

const tips=[];
const total=[];

function calcTip(bill) {
    const tip = bill >= 50 && bill <=300 ? bill * 0.15 : bill * 0.20;
    return tip;
}




for (let i = 0; i < bills.length; i++) {
  const tip =  (calcTip(bills[i]));
  //console.log(tip)

  tips.push(tip)
  //console.log();

  total.push(bills[i]+tip);
  //console.log(total.push(bills[i]+calcTip(bills[i]))) 
        
} 

console.log(bills,tips,total);


function calcAverage(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        //sum=sum + arr[i]
        sum += arr[i]
        
    }

   
    return sum/ arr.length
}

calcAverage(2,3,6) */




















































