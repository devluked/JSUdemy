/*****************************
* Variables and data types
*/
/*
var firstName = 'John';
console.log(firstName);

var lastName = 'Smith';
var age = 28;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = 'Teacher';
console.log(job);

//Var naming rules
var _3years = 3;
var JohnMar = 'John and Mark';
var if = 23;
*/


/*****************************
* Variables mutation and type coercion
*/

/*
var firstName = 'John';
var age = 28;


// Type coercion
console.log(firstName + ' ' + age);

var job, isMarried;
job = 'teacher';
isMarried = false;

console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

// Variable mutation
age = 'twenty eight';
job = 'driver';

alert(firstName + ' is ' + age + ' year(s) old ' + job + '. Is he married? ' + isMarried);

var lastName = prompt('What is his last name?');
console.log(firstName + ' ' + lastName);

*/


/***********************************
 * Basic operators
 */

/*
var now, yearJohn, yearMark;
now = 2019;
ageJohn = 28;
ageMark = 33;

//Math operators
yearJohn = now - 28;
yearMark = now - 33;

console.log(yearJohn);

console.log(now + 2);
console.log(now * 2);
console.log(now / 2);


//Logical operators
var johnOlder = ageJohn < ageMark;
console.log(johnOlder);


//typeof operator
console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof 'Mark is older than John');
var x;
console.log(typeof x);

*/

/******************************************************
 * Operator precedence
 */

 /*
 var now = 2019;
 var yearJohn = 1989;
 var fullAge = 18;

 var isFullAge = now - yearJohn >= fullAge;
 console.log(isFullAge);

var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2
console.log(average);

//Multiple assignments
var x, y;
x = y = (3+5) * 4 - 6;
console.log(x,y);
*/

/*
* Coding challenge 1
*/

/*
var markMass, johnMass, markHeight, johnHeight, markBMI, johnBMI;
markMass = 70;
johnMass = 45;
markHeight = 2.1;
johnHeight = 1.9;
markBMI = (markMass / (markHeight*markHeight));
johnBMI = (johnMass / (johnHeight*johnHeight));

console.log(markBMI, johnBMI);
var highestBMI = (markBMI > johnBMI);
console.log("Is Mark's BMI higher than John's?" + ' ' + highestBMI);
*/


/*******************************************
 * If / Else Statements
 */
/*
var firstName = 'John';
var civilStatus = 'single';

if (civilStatus === 'married') {
    console.log(firstName + ' is married!');
} else {
    console.log(firstName + ' will hopefully marry soon :)');
}

var isMarried = true;
if (isMarried) {
    console.log(firstName + ' is married!');
} else {
    console.log(firstName + ' will hopefully marry soon :)');
}


var markMass, johnMass, markHeight, johnHeight, markBMI, johnBMI;
markMass = 70;
johnMass = 50;
markHeight = 2.1;
johnHeight = 1.9;
markBMI = (markMass / (markHeight*markHeight));
johnBMI = (johnMass / (johnHeight*johnHeight));

if (markBMI > johnBMI) {
    console.log('Mark\'s BMI is higher than John\'s.')
} else {
    console.log('John\'s BMI is higher than Marks\'s.');
}
*/
/************************
 * Boolean logic
 */
/*
 var firstName = 'John';
 var age = 20;

if (age < 13) {
    console.log(firstName + ' is a boy.');
} else if (age < 20 && age >= 13){ 
    console.log(firstName + ' is a teenager.');
} else if (age >= 20 && age < 30){ 
    console.log(firstName + ' is a young man.');
} else {
    console.log(firstName + ' is a man');
}

*/

/**
 * The ternary operator and switch statements
 */
/*
 var firstName = 'John';
 var age = 18;

 //Ternary operator
 age >= 18 ? console.log(firstName + ' drinks beer.')
 : console.log(firstName + ' drinks juice.');

 var drink = age >= 18 ? 'beer' : 'juice';
 console.log(drink);
*/

 /*if (age >= 18) {
     var drink = 'beer';
 } else {
     var drink = 'juice';
 }*/

/*
//Swtich statement
var job = 'instructor';
switch(job) {
    case 'teacher':
    case 'instructor':
        console.log(firstName + ' teaches kids how to code.');
        break;
    case 'driver': 
        console.log(firstName + ' drives a uber in Irvine');
        break;
    case 'designer':
        console.log(firstName + ' designs beautiful websites');
        break;
    default:
        console.log(firstName + ' does something else.');
}

age =402;
switch(true) {
    case age < 13:
        console.log(firstName + ' is a boy.');
        break;
    case age < 20 && age >= 13: 
      console.log(firstName + ' is a teenager.');
      break;
    case age >= 20 && age < 30:
        console.log(firstName + ' is a young man.');
        break;
    default:
        console.log(firstName + ' is a man');
        break;

}
*/


/********
 * Truthy and Falsy vales and equality operators
 */

 /*
 //False valles: undefined, null, 0, '', NaN
 //Truthy values: NOT falsy values

 var height = 23;

 if (height || height === 0) {
     console.log('Variable is defined');
 } else {
     console.log('Variable has NOT been defined');
 }

//Equality operators
if (height == '23') {
    console.log('The == operator does type coercion!')
}
*/

/*************************
 * CODING CHALLENGE 2
 */
/*
var JohnAVG = (100+100+100)/3;
var MikeAVG = (100+100+100)/3;
var MaryAVG = (97+134+105)/3;

if (JohnAVG > MikeAVG && JohnAVG > MaryAVG) {
    console.log('John\'s team won');
} else if (MikeAVG > JohnAVG && MikeAVG > MaryAVG) {
    console.log('Mike\'s team won');
} else if (MikeAVG === JohnAVG && MaryAVG === JohnAVG) {
    console.log('All three teams had same score');
} else {
    console.log('Mary\'s team won');
}
*/

/**********
 * Functions
 */
/*
function calculateAge(birthYear) {
    return 2019-birthYear;
}

var ageLuke = calculateAge(1999);
var ageShane = calculateAge(1991);
var ageSheila = calculateAge(1963);
console.log(ageLuke, ageShane, ageSheila);


function yearsUntilRetirement(year, firstName) {
    var age = calculateAge(year);
    var retirement = 65 - age;

    if (retirement > 0) {
        console.log(firstName + ' retires in ' + retirement + ' years.');
    } else {
        console.log(firstName + ' is already retired.');
    }
    
}

yearsUntilRetirement(1999, 'Luke');
yearsUntilRetirement(1991, 'Shane');
yearsUntilRetirement(1953, 'Mike');

*/
/*
*Function expressions and statements
*/

//Function declaration
// function whatDoYouDo(job, firstName) {}

/*
//Function expression
var whatDoYouDo = function(job,firstName) {
    switch(job) {
        case 'teacher':
            return firstName + ' teaches kids how to code';
        case 'driver':
            return firstName + ' drives a cab in Libson';
        case 'designer':
            return firstName + ' designs beautiful websites';
        default:
            return firstName + ' does something else';
    }
}

console.log(whatDoYouDo('teacher','John'));
console.log(whatDoYouDo('driver','Mark'));
console.log(whatDoYouDo('designer','Steven'));
*/

/************************
 * Arrays
 */

/*
var names = ['John', 'Mark', 'Jane'];
var years = new Array(1990,1969,1948);

console.log(names[2]);
console.log(names.length);


// Mutate array data
names[1] = 'Ben';
names[names.length] = 'Mary';
console.log(names);

//Diffrent data types
var john = ['John', 'Smith', 1990, 'designer', false];

john.push('blue');
john.unshift('Mr.');
console.log(john);

john.pop();
john.pop();
john.shift();
console.log(john);


console.log(john.indexOf(23));

var isDesigner = john.indexOf('designer') === -1 ? 'John is NOT a designer'
: 'John is a designer';
console.log(isDesigner);
*/

/*************************************
 * CODING CHALLENGE 2 
 */

/*
function tipCalc(bill) {
    if (bill < 50) {
        return bill * .20;
    }   else if (bill >= 50 && bill <= 200) {
        return bill * .15;
    } else {
        return bill * .10;
    }
}

var bills = [124, 48, 268];

var tips = [tipCalc(bills[0]), tipCalc(bills[1]), tipCalc(bills[2])];

var billTotals = [bills[0]+tips[0], 
                  bills[1]+tips[1], 
                  bills[2]+tips[2]];

console.log(tips, billTotals);
*/

/**********************
 * Objects and properties
 */
/*
// Object literal
var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false
};

console.log(john.firstName);
console.log(john['lastName']);
var x = 'birthYear';
console.log(john[x]);

john.job = 'designer';
john['isMarried'] = true;
console.log(john);


// new Object syntax
var jane = new Object();
jane.firstName = 'Jane';
jane.birthYear = 1969;
jane['lastName'] = 'Smith';
console.log(jane);
*/

/**********************************
 * Objects and methods
 */

/*
var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false,
    calcAge: function() {
        this.age = 2019 - this.birthYear;
    }
};

john.calcAge();
console.log(john);
*/

/***************************
 * CODING CHALLENGE 4
 */

var Mark = {
    firstName: 'Mark',
    lastName: 'Sloan',
    mass: '71',
    height: '1.69',
    markBMI: function() {
        this.BMI = this.mass/(this.height*this.height);
        return this.BMI;
    }
};

var John = {
    firstName: 'John',
    lastName: 'Stevens',
    mass: '90',
    height: '1.53',
    johnBMI: function() {
        this.BMI = this.mass/(this.height*this.height);
        return this.BMI;
    }
};

if (Mark.markBMI() > John.johnBMI()) {
    console.log(Mark.firstName + ' ' + Mark.lastName + ' has a higher BMI at ' + Mark['BMI']);
} else if (Mark.BMI < John.BMI) {
    console.log(John.firstName + ' ' + John.lastName + ' has a higher BMI at ' + John['BMI']);
} else {
    console.log('Same BMI!');
}











































