//Practicing JS

var myName ='Reinier';
var lastName = 'Blanco';
var fullName = `My name is ${myName} ${lastName}`;
console.log(fullName);
console.log(fullName.length);

//upperCase and lowerCase
var loco = 'Reinier';
loco.toUpperCase();
loco.toLowerCase();

//using prompt and slice
var name4 = prompt('What is your name');
name4 = name4.slice(0,1).toUpperCase();
console.log(name4);
console.log(`Your name is ${name4.slice(0,1).toUpperCase()}`);


var name3 = prompt('What is your name');
var nameC = name3.slice(0,1);


//new work
 var humanAge = prompt('what is your age');
 var dogAge = prompt('what is your age');
 humanAge = (dogAge -2) * 4 + 21;
 var totalAge = humanAge;
 console.log(totalAge);

// Second way of doing it
// this is a way to create a way to convert doage to humanage
var dogAge = prompt('How old is your dog');
var humanAge = ((dogAge - 2) * 4) + 21;
alert(`"your dog is ${humanAge} years old in humna years"`);


 function getMilk (money) {
     var numberBottles = Math.floor(money / 1.5);
   console.log("buy " + numberBottles + " bottle of milk");
 }
  getMilk(2);

//calculating fat
 function calculatorFat(weight, height) {
  var bodyFat = weight / (height * height);
  //to use floor to get no decimal
 return Math.floor(bodyFat);
  console.log(bodyFat);
} 
calculatorFat(180, 1.8);

//
var output = [];
var count = 1;
function fizzBuzz () {
output.push(count++);
  console.log(output);
};

//
function exerciseThree(typeOfPizza){
    let lovesPizza;
    // In this exercise, you will be given a variable, it will be called: typeOfPizza
    // You are also given another variable called: lovesPizza;
    // Using an if/else statement assign lovesPizza to true if typeOfPizza is 'pepperoni', assign it to false if it is 'olives'
    if(lovesPizza === "pepperoni" || lovesPizza === "olives") {
      console.log(true);
    }
    else {
      console.log(false);
    }
    
    // Please write your answer in the line above.
    return lovesPizza;
  }
  

//an empty Array
const myArray = [];

//an array with elements
const fruits = ['apple', 'banana', 'orange', 'grape', 'lychee'];
console.log(fruits)//expected to 'apple', 'banana', 'orange', 'grape', 'lychee'

//a Mixed array with number, booleans and strings and Array
const mixedArray = [10, "Reinier", true, "Blanco", []];
mixedArray[3]//expected "Blanco" remember that it begins counting from 0

//Objects empty
const myObject = {};
//Example of an Object
const car = {
    color: "blue",
    year: 2019,
    onwed: true
};
car['color'];//expected to blue
car["year"];// 2019
car.onwed; //true

//more examples
const menu = {
    name:"Salted Caramel Ice Cream",
    price: 2.95,
    ingredients: ["butter","ice cream","salt", "sugar"]
};

//Accessing Object
const car = {
    color: 'blue',
    type: 'Mercedes',
    wheels: {
      diameter: 18,
      width: 8
    }
  };
car.color;//blue
car.wheels.width;// accesing to the nested  8
car['type']['diameter'];// same values to be returned


//Creating new Objects
const myObject = new Object();

const dog = {
    age: 16,
    name: 'Romeo',
    woof: function () {
      console.log('Woff Woff!');
    },
    greet: function (name) {
      console.log(`Hello ${name}`);
    }
  };

  dog.age += 1;//it adds to the 17 to turn 17
  dog.age;//17 now
  dog.name = "Rodolfo";
  dog.name;//updates to Rodolfo;

  //Adding properties to the Object;

  const house = {}
//This below will be inside the obect
  house.door = true;
  house.sofaColor = "Red";
  house.walls = 13;
  //can be use using brackets as wll
  house['celling'] = "235cm";
  //adding an anonymous function
  house.familia = function(){
      console.log("La Familia Welcome to your Home");
  }
  //we can deleted porperties from the objec  too
  delete house.door;//it deletes the property door inside the object



  //Passing Arguments
function numberSeven(num){
    num = 7; //it is only 7 inside the function
}
let num = 8;
numberSeven(num)
console.log(n)//expeted 8

//passing Objct
let colorsObj = {
    color: "Red"
};
function setToBlue(changing){
    changing.color = "Blue";
};
setToBlue(colorsObj);//assign the new color to the obj, and changing the obj
colorsObj.color; // expected to be BLue

const ownedCars = {
    Reinier: 10,
    yari: 3,
    Chula: 19
};
//we can pass the info to another, so a copy in other words
const coypingOwnedCars = ownedCars;//info is passed as new obc
coypingOwnedCars.Reinier;// output 10
coypingOwnedCars.Chula;//19

//so now we can update the obj without changing the original obj
coypingOwnedCars.Reinier = 34;//updated the new Obc to 34 cars
coypingOwnedCars.Reinier;//34
ownedCars.Reinier;//34


//functions vs Methods
const developer = {
    name: "reinier",
    greetings: function(){
        console.log("Welcome back")
    },
    favoriteSport: function(tennisTable){
        console.log(`My favorite sport is ${tennisTable}`);
    }
};
developer.favoriteSport("Tennis Table");
//
const myArray = [ 
     function alerter() { 
        alert('Hello!'); 
     } 
    ];
    myArray[0]();//invoking the function

    //invoking function in the array
const person = {
    name: "Reinier",
    lastName: "Blanco",
    fullName: function() {
        console.log(`"My full name is ${this.name} ${this.lastName}!"`);
    }
};
bill.fullName();//expect  My full name is Reinier Blanco!

//Call Methods by Property Name 
//named functions are great for debbugin?
const family = {
    dad: "Reinier",
    mon: "Yari",
    son: "Lennox",
    age: 2,
    wholeFamily: function(){
        return this.dad + " is great dad ,and his wife " + this.mon + " is amazing , and " + this.son + " is " + this.age + " years of age!";
    }
}
family.wholeFamily();//expect the whole thing lol






