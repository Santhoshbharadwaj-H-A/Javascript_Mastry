let age = 25;
let longPara =  `special string `

let firstName = "shubham"
let lastname = 'shubhamshubham'

console.log(firstName.toLowerCase());
console.log(firstName.toUpperCase());

console.log(firstName.indexOf('h')); // return the index of the first h in the string
console.log(firstName.lastIndexOf('h')) // return the index of the last h in the string

console.log(firstName.replace("h",'-')) // replace the 'h' with the '-' first h
console.log(firstName.replaceAll('h','-')) //replace all h with '-' 

console.log(lastname.substring(0,6)); // getting the substring of the upto six out of the main string

console.log(lastname.slice(0,4)) // acts as the substring 


console.log(firstName.startsWith("s"));
console.log(firstName.endsWith("m"));

console.log(lastname.includes("learn")); // it will return the boolian values if the string is present it return the true else false

let result = `the firstname is ${firstName} and the last name is ${lastname}  ` // it will acts  as a variable inside the string 

//Arrays

let items = ["bread","butter",55,"jam"]
let update = [10,20,30]

items[2] = 50
console.log(items.length)
// accessing through the index

console.log(items[0])
console.log(items[1])
console.log(items[2])
console.log(items.length)

console.log(items.join("-")) // joining the all the elements by the ("-")

let itemsMethod = items.indexOf(55);
console.log(itemsMethod)

// array concatination
let itemsMethods = items.concat(update)
//or concat single element
itemsMethods = items.concat(['10000','add more element'])
console.log(itemsMethods)

items.push("water"); // it actually affect the original array adds at the last
items.pop("water"); // it actually affect the original array removes at the last

console.log(items.length)

let newElement = null; //this elemet  having the value null or empty
console.log(typeof(newElement))

let year; // this element having the value is undefined 
console.log(year) 
console.log(typeof year)

// type conversion 

let rendom = "xyz"
console.log(Number(rendom)) // not a number (NaN)

let random = 25
console.log(String(random))
console.log(random)

for(let i = 0; i<5; i++){
    console.log(i+1)
}

for(let i = 0; i < 4; i++){
    console.log(items[i])
}


// three type of the for loop is 1.normal , 2.of, 3. in

Students = ['one','two','three']

for(let student of Students){
    console.log(student)
// it is similar to the in 'in' the python, here we are going to have the access to the values
}

for(let student in Students){
    console.log(student)
// it is similar to the in 'in' the python, here we are going to have the access to the indexes not the values
// it prints 1,2,3
console.log(Students[student]) // to get the values 
}

value = true
while(value){
    console.log("hello infinate")
    value = false
}

// let count = 0;
// do{
//     console.log(count);
//     count ++;
// }
// while(count < 5)


const username = "santhosh"

username.length >= 5 ? (console.log("true")): (console.log("false"));  

// functions

function addition(numOne, numTwo){ // numone and numtwo take the paramers
    return numOne + numTwo;
}

console.log(addition(2,5)); //2,5 are the arguments or it is also called as values
console.log(addition(10,20));

function intro(){
    //initializing the function or defining the function
    console.log("welocme")
}
intro(); // invoking the function or invoking the function
intro();
intro();

let intros = function(){
    // this will be stored inside the intros
    // storing inside the variable 
    console.log("welcome to the js")
}; 

intro();
let sot = intro()
console.log(sot)

// hoisting in js, function or a variable used before decliration

// what happens in the js is that, js first store the values and then starts executions
// first it store the intross function and then it will excute the intross function

intross();

function intross(){
    console.log("welocme to the js mastery");
}

// why return is important is that we can use it outside the function, that is we want to use the value of the function outside the function

// arrow function

let intronew = () => {
    console.log("welcome arrow function")
};

intronew();

// in common if the thing attached to something we can called as a method (a.push()) ao on 


// important ForEach method 

let add = function(a, b){
    return a + b;
}

function calculator(numOne, numTwo, add){
    console.log(add(numOne, numTwo))
}
calculator(15,10, add)

// passing the function as a argument is called as a callback function, here the 'add' is called as a call back  function

// another example of the multiplication
let additions = function(a, b){
    return a + b;
}
let multiplication = function(a, b){
    return a * b;
}

const callbacks = (ones,twos, add, mul) =>{
    let addResult = add(ones, twos)
    let mulResult = mul(ones, twos)
    console.log(addResult)
    console.log(mulResult)
    let result = ` add value:${addResult} mul value:${mulResult}`
    return result 
}
let calvalue = callbacks(50,10, additions, multiplication)
console.log(calvalue)


// forEach

let products = ['bread','butter', 'jam', 'bottle'];

// for each means for loop that visit each element in the array or for each is the loop that iterate through the individual element 

let callback = (products) => {
    console.log(`my product name is ${products}`)
}
products.forEach(callback)

products.forEach((products) => {console.log(products);console.log(products.length)});

// for each loop go through the each and every iteration, in first iteration it is bread, then it is butter and so on  

// for each we must use the callback function
let Studentss = ["subham", "alex", "deepak","john"];
Studentss.forEach((Student, index) =>{
    console.log(Student, index) // we can also the indexes
});



// object literals 
// consider the arrays arrays are intended to store one type of data or similar data 


//creating the object litearals
// creating in the key value pairs
let user = {
    name:"santhosh",
    email:"santhosh@gmail.com",
    age:24,
    isLoggedIn: false
}

console.log(user);
// aceess the information
console.log(user.name);
console.log(user.isLoggedIn);
user.isLoggedIn = true
console.log(user.isLoggedIn);

console.log(user["email"]);

// we can add the  functions to the object literals

let users = {
    name:"santhosh",
    email:"santhosh@gmail.com",
    age:24,
    isLoggedIn: false,
    login: function(){  // login id is the arrow key for creating the function in the  object literals
        console.log("login is sucessfull");
    },
    logout(usernames){ // we can not arrow function 
        return `${usernames} sucessfully loggedout`
    }
}
console.log(users)
console.log(users.email)
users.login()
console.log(users.logout("Santhosh"));


//******** important this keyword *******

console.log(this)

// in the globle scope this refer to the window object 
this.console.log("it is alias to the window .console.log")

// in the local scope this keyword refer to the present object where it is called 
// we can see an example 

let usersthis = {
    name:"santhosh",
    email:"santhosh@gmail.com",
    age:24,
    isLoggedIn: false,
    login: function(){
        // return `login ${email}` // it will give an error because it will can not access the email
        return `login${this.email}` // it is basically refereing to email acts as ${userthis.email} means this refer to present object 
    }
}
// console.log(this.email) // give us an warning like undefined 

// console.log(usersthis.login());  this will give us an error for login ${email}

console.log(usersthis.login()) 

// PASSING THE OBJECT LITERAL IN  AN ARRAY  IMPORTANT
// we can pass the multiple data of the object in the form of an array

// let arrayobject = [{objectone},{objecttwo},{objectthree}]

//coinmarketcap.com api

//it is used in the api sending and reciving the data from the api's

let createarrayobject =[
    {
        "name":"shubham sarda",
        "age":25,
        "email":"shubham@gmail.com"
    },
    {
        "name":"Santhosh",
        "age":24,
        "email":"santhosh@gmail.com"
    }
]
  
console.log(createarrayobject[0].name) 

// Math object
nu = 15.49
console.log(Math)
console.log(Math.PI)
console.log(Math.E)
console.log(Math.round(nu)) // round down
console.log(Math.ceil(nu))  // round up

console.log(Math.pow(2,3)) // power operator
console.log(Math.sign(2,5)) // 1 for positive, -1 for negetive and 0 for nutral

// random module

console.log(Math.random())

let ran = Math.random()
console.log(Math.round(ran*10))


// PREMITIVE AND REFERENCE TYPES
let numOne = 15;
let numTwo =numOne;
numOne = 30;
console.log(numOne);
console.log(numTwo);
// in the primitive type it is going to store in the stack so it is not value by reference, in the stack it will do not sore the reference   


let objOne = {title:"learning javascript", rank:2};
let objTwo = objOne;
objOne.rank = 1;

console.log(objOne)
console.log(objTwo)
// you can see here that the both the values of rank is changed in the objOne and objTwo beacuse it is mapping to the single variable 
// create another object
objthree  = objTwo
console.log(objthree) // you can see that it is pointing to the object two reference
// IMP :- WHEN YOU WORKIGN WITH THE OBJECTS YOU ARE DEALING WITH THE REFERENCE 

// IMP :- ARRAYS ALSO FOLLOW THE SAME AS REFERENCES EX IS

let arrOne =["shubham","alax"];
let arrTwo = arrOne;
arrOne.push("deepak")
console.log(arrOne)
console.log(arrTwo)
// you can see both pointing to the same reference 

// (...) SPREAD OPERATOR FOR COPING THE ARRAY (mainly used to copy the array or object in such a way that it will not refer)

let arrOnes = ["shubham","alex"];
let arrTwos = [...arrOnes]; // when we use the spread operator, we get the contant from the array one 
arrOnes.push("deepak")
console.log(arrOnes)
console.log(arrTwos) // you can see that arrTwos not affected by the arrOnes push
let arrThrees = arrTwos
let arrfours = arrThrees;
arrfours = arrfours.push("new")
console.log(arrThrees);
console.log(arrfours); // see now it is not affecting the arrThrees and arrfour
//{...objOne, publish:"date"} here we can get the content of the other object and add the new key value pairs

//MARGING  THE TWO ARRAY USING THE SPREAD OPERATOR
let arrFive = [...arrOne, ...arrTwo];
console.log(arrFive) 

// we can override using the spread operator
let objSix = {title:"ceo", rank:1}
let objSeven = {title:"cto",rank:2}
let objEight = {...objSeven, publish:"22-2-2022", rank:3}
console.log(objEight)


//DOM
//DOM :- document object model :- it helps to control the html and also we can perform the operations in the dom
// interface helps to manipulte html using the javascripts



