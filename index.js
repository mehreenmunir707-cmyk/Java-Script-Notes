 data type in java script
// string
// number
// boolean
// null
// undefined
// symbol

// Const, let, var
// in const i can not redeclare and reassign the value but in let i can not redeclare but i can reassign the value
// in var i can redeclare and reassign the value but it is not recommended to use var because it can cause problems in the code

// console.log("HELLO WORLD")
// console.log("2" + 3)
// console.log("2"- 3)
// console.log("2" + 3 + 4)
// console.log(2 + 3 + "4")
// console.log(2 + "3" + 4)
// console.log(2 - 3 - 4)
// console.log(2 - (3 - 4))
// console.log("2" - 3 - 4)


//     console.log("My name is Mehreen")
//     alert("HELLO WORLD")
//     let myname = "Mehreen";
//     let Father = "Munir khan";
//     let uniname= ""
//     let mycurrentjob
//     let myfuturejob
//     let myage
//     console.log(myname)
//     console.log(Father)


//     // assiment
//     let countryname = "PAKISTAN"
//     console.log(countryname)
//     let continent = "ASIA"
//     console.log(continent)
//     let population = "30 million"
//     console.log(population)

//     // next work //
//     let firstnumber = 20
//     let lastnumber = 2
//     let sum = firstnumber - lastnumber
//     console.log(sum)

    // prompt//


    // let firstNumber = +prompt("enter your first number")
    // let secondNumber = +prompt("enter your second number")

    
    // let sum = firstNumber + secondNumber
    // console.log(sum)



// let num = 5
// let num2 = ++num
// console.log(num2)

// let num3 = 6
// console.log(num3++)
// console.log(num3)


// let num = 5
// let sum = num++ + ++num - --num + num-- - num++
// console.log(sum)

// let num1 = 2
//  let sum = num++
//  console.log(num1)

// lets create short button

// let num = 3
// let sum =num++ + --num
// console.log(sum)

// let num1 = 3
// let sum =num1++ + --num1 - ++num1
// console.log(sum)


// = , == , === , != , >= , <= , +=

//  = use of asign
// let num3;
// num3 =n23
// let num = 12



// //  == losely equality
//  console.log(2 == "2")
//  console.log(2 == "3")


// //  === strongly equality
// console.log(2 === "2")
// console.log("2" === "2")



// // != not equal losely
// console.log(2 != "3")
// console.log(2 != "2")

// //  !== not equal strickly

// console.log(0 !== "0")
// console.log(2 !== 3)

// // > greater then
// console.log(5 > 2)
// console.log(5 > "3")

// // && and
// console.log(5 > 2 && 3 < 4)
// console.log(5 > 2 && 3 > 4)

// let age = 20
// let education = "graduate"
// if(age >= 18 && education === "graduate"){
//     console.log("mobbarik ho job done")
// }
// else{
//     console.log("sorry again try")
// }

// if statement

// let weather = "rainy"
// if (weather === "rainy")

// let marks = 70
// if (marks >= 50){
//     console.log("you are pass")
// }

// what is prompt
// prompt is a method that is used to take input from the user
// it is a built-in method in JavaScript
// it takes a string as an argument and displays a dialog box to the user with the message and an input field
// it returns the value entered by the user as a string

// let marks = prompt("Enter your marks")
// if (marks >= 50 && marks <= 100){
//     console.log("you are pass")
// }
// else if(marks <= 49 && marks >= 0){
//     console.log("you are fail")
// }
// else{
//     console.log("Invalid marks")
// }

// let age = prompt("Enter your age")
// if(age>13){
//     console.log("you can swim")
// }
// else{
//     console.log("you are not allowed")
// }

// let temperature = prompt("Enter temperature")
// if(temperature > 40){
//     console.log("It is too hot outside")
// }
// else if(temperature > 30){
//     console.log("The weather is normal")
// }
// else if(temperature > 20){
//     console.log("Today is cool weather")
// }
// else if(temperature > 10){
//     console.log("OMG! Today is very cold")
// }


// let marks = prompt("Enter your marks")
// if(marks >= 80 && marks <= 100){
//     console.log("A+")
// }
// else if(marks >= 70 ){
//     console.log("A")
// }   
// else if(marks >= 60){
//     console.log("B")
// }
// else if(marks >= 50){
//     console.log("C")
// }
// else if(marks >= 40){
//     console.log("D")
// }
// else if(marks<= 39){
//     console.log("F")
// }
// else{
//     console.log("Invalid marks")
// }
// let ATM = prompt("Enter your ATM pin")
// if(ATM == 1234){
//     console.log("Welcome to your account")
// }
// else{    console.log("Invalid pin")
// }


// let day = prompt("Enter the day")
// if(day === "Monday"){
//     console.log("Today is Monday")  
// }
// else if(day === "Tuesday"){
//     console.log("Today is Tuesday")
// }
// else if(day === "Wednesday"){
//     console.log("Today is Wednesday")
// }
// else if(day === "Thursday"){
//     console.log("Today is Thursday")
// }

// let amount = 10000
// if(amount >= 1000){
//     console.log("You can take your amount")
// }
// else{
//     console.log("You cannot take your amount")
// }

// let shopping = 35000
// let card = true
// if(shopping >= 30000 && card === true){
//     console.log("10% discount")
// }
// else{
//     console.log("No discount")
// }   

// let experience = +prompt("Enter your experience")
// let degree = prompt("Enter your degree")
// if(experience >= 5 && degree === "graduate"){
//     console.log("You are eligible for the job")
// }
// else{
//     console.log("You are not eligible for the job")
// }

// let goodvesion = prompt("Enter your goodvesion")
// let goodcamera = prompt("Enter your goodcamera")
// let goodbattery = prompt("Enter your goodbattery")
// if(goodvesion === "yes" && goodcamera === "yes" && goodbattery === "yes"){
//     console.log("You can do this job")
// }
// else{
//     console.log("You cannot do this job") 

// }

// true || false
// false || false
// true && true
// false || true



// let children = 0 -12
// let teens = 13 - 17
// let adults = 18 - 59
// let seniors = 60 - above



// // what is array
// let fruits = ["apple", "banana", "orange", "grapes"]
// console.log(fruits[0])

// types of array
// push 
// pop
// shift
// unshift
// slice
// splice
// at
// reverse
// fill
// indexOf


// let arry = [[1, 2, 3], [10, 20, 30], [100, 200, 300]]



// let arry = [[1, 2, 3,4 [1, [100, 200, 300],2]]]


// // // what is push method

// // let fruits = ["apple", "banana", "orange", "grapes"]
// // console.log(fruits)
// // console.push(fruits, "kiwi")
// // console.log(fruits)

// // example of push method
// let todoList = ["clean the house", "buy groceries", "pay bills"]
// console.log(todoList)
// todoList.push("exercise")
// console.log(todoList)



// // // what is pop method
// // let fruits = ["apple", "banana", "orange", "grapes"]
// // console.log(fruits)
// // fruits.pop()
// // console.log(fruits)

// // push and pop method example
// let shoppingList = ["milk", "bread", "eggs", "fruits"]
// console.log(shoppingList)
// shoppingList.push("vegetables")
// console.log(shoppingList)
// shoppingList.pop()
// console.log(shoppingList)

// // example 
// let todo = []
// todo.push("clean the house")
// todo.push("buy groceries")
// todo.push("pay bills")

// // what is shift method (delete first element of array)
// let fruits = ["apple", "banana", "orange", "grapes"]
// console.log(fruits)
// fruits.shift("apple")
// console.log(fruits)


// // what is unshift method (adding element at the beginning of array)
// let fruits = ["apple", "banana", "orange", "grapes"]
// console.log(fruits)
// fruits.unshift("kiwi")
// console.log(fruits)

// splice method (add or remove element from array)
// let shoppinglist = ["milk ", "bread", "eggs", "fruits , vegetables"]
// console.log(shoppinglist)
// shoppinglist.splice(2, 1)
// console.log(shoppinglist)



// assignment
// let signal = prompt("Enter the traffic signal color")
// if(signal == "green" || signal == "GREEN" || signal == "Green"){
//     console.log("You can go")
// }
// else if(signal == "yellow" || signal == "YELLOW" || signal == "Yellow"){
//     console.log("You should slow down")
// }
// else if(signal == "red" || signal == "RED" || signal == "Red"){
//     console.log("You should stop")
// }
// else if(signal == "flashing yellow" || signal == "FLASHING YELLOW" || signal == "Flashing Yellow"){
//     console.log("You should proceed with caution")
// }


// arry push pop shift unshift splice slice
// slice does not change the original array it creates a new array with the selected elements

// let arry = [1, 2, 3, 4, 5]
// let newarry = arry.slice(1, 3)
// console.log(newarry)


// let arry = ["apple", "banana", "orange", "grapes"]
// let summerfruits = arry.slice(3, 4)
// console.log(summerfruits)


// at method
// what is at method
// at method is used to access the element of an array at a specific index
// example of at method
// let fruits1 = ["apple", "banana", "orange", "grapes"]
// console.log(fruits1[3])

// let fruits2 = ["apple", "banana", "orange", "grapes"]
// console.log(fruits2.at(3))


// what is reverse method
// reverse method is used to reverse the order of the elements in an array
// let fruits3 = ["apple", "banana", "orange", "grapes"]
// console.log(fruits3)
// fruits3.reverse()
// console.log(fruits3)

// what is fill method
// fill method is used to fill the elements of an array with a specific value
// let fruits4 = ["apple", "banana", "orange", "grapes"]
// console.log(fruits4)
// fruits4.fill("kiwi")
// console.log(fruits4)


// what is indexOf method
// indexOf method is used to find the index of the first occurrence of a specific element in an array
// let fruits5 = ["apple", "banana", "orange", "grapes"]
// console.log(fruits5.indexOf("orange"))


// practice
// let score = +prompt("Enter your score")
// let time = +prompt("Enter your time")
// if(score >= 10 && time <= 0){
//     console.log("You win the game")
    
// }

// what is function
// function is a block of code that performs a specific task
// a reusable piece of code that can be called multiple times
// example of function
// console.log(2 + 3)
// console.log(2 + 3)
// console.log(2 + 3)
// console.log(2 + 3)

// practice
// function entry (gender){
//     if(gender == female){
//         console.log("allow")

//     }
//     else{
        // console.log("not allow")
//     }
// }
// entry(male)
// entry(female)


// Type of function
// 1. Function declaration
// function functionname(){}

// // function declaration example
// function greet(){
//     console.log("Hello, welcome to JavaScript!")
// }

// // calling the function
// greet()

// // function with parameters
// function greetUser(name, age){
//     console.log("Hello " + name + ", you are " + age + " years old.")
// }

// greetUser("Mehreen", 25)

// practice
// let name = +prompt("Enter your name")
// let age = +prompt("Enter your age")
// function greetUser(name, age){
//     console.log("Hello " + name + ", you are " + age + " years old.")
// }


// let applePrice = +prompt("Enter the price of apple")
// let bananaPrice = +prompt("Enter the price of banana")
// function addTwoNumbers (applePrice, bananaPrice){
//     let tax = (applePrice + bananaPrice) * 5 / 100
//     return applePrice + bananaPrice + tax
// }
//     console.log(addTwoNumbers(applePrice, bananaPrice))





// 2. Function expression
// function stored in a variable is called function expression
// let functionName = function(params) {
    
// }


// // 3. Arrow function
// // arrow function is a shorter syntax for function expression
// let arrowFunction = (params) => {}

// annonymous function
// annonymous function is a function without a name
// function(){}  ()=> {}   

// Buttons

    // increment 

//     let count = 0
//     function inc (){
//         count ++
//         console.log(count)
//         document.querySelector("h1").textContent = count
//     }

//     // decrement
 
//     function dec (){
//         count -- 
//         console.log(count)
//         document.querySelector("h1").textContent = count
//     }
// // reset button
// function set (){
//     count == 0
//     console.log()
// }

// class work

// function  key word
// myfunc is the name of the function
// {} is the body of the function
// () is used to call the function
// myfunc() call the function and run the code inside the function body



// function myfunc (){
//     console.log("function is runin")
// }
// myfunc()

// function FunctionName (name){
//     console.log("Hello " + name)
// }
// FunctionName("Mehreen")
// FunctionName("Munir khan")
// FunctionName("Ali")
// FunctionName("Ayesha")    

// function juice (apple, orange){
//     let myjuice = "juice is made of " + apple + " Apples and " + orange + " Oranges"
//     return myjuice
// }
// console.log(juice(2 , 3))

// // assignment test
// // sum
// function sum (num1, num2){
//     return num1 + num2
// }
// console.log(sum(5, 10))

// // even or odd
// function evenOrOdd (num){
//     if(num % 2 === 0){
//         return "Even"
//     }
//     else{
//         return "Odd"
//     }
// }
// console.log(evenOrOdd(4))
// console.log(evenOrOdd(7))

// test
// function greet (name){
//     return "Hello " + name + ", welcome to university!"
// }
// console.log(greet("Mehreen"))

// // square of a number
// function square (num){
//     return num * num
// }
// console.log(square(5))


// types of function in javascript
// function declaration
// function expression
// arrow function

// let var const

// variable initialization 
// variable declaration
// variable assignment

// let cannot redeclare a variable but can be reassigned
// const cannot redeclare a variable and cannot be reassigned
// variable can declare and reasigned but cannot redeclare

// How to find difference between 2 values
// in javascript we can find the difference between 2 values by using the subtraction operator (-)
// let num1 = 10
// let num2 = 5
// let difference = num1 - num2
// console.log(difference)

// sum use for sting and numbers
// subtraction use for numbers only
// multiplication use for numbers only
// modulus use for reminder

// comparison operator
// = single equal to is used for assignment
// == equal to is used for comparison but it does type coercion (loose equality)
// === strict equal to
// != not equal to

// conditional statements
// if statement
// if else statement
// else if statement
// switch statement



// pre increment and post increment
// pre increment means the value of the variable is incremented before it is used in the expression
// post increment means the value of the variable is used in the expression before it is incremented

// pre decrement and post decrement
// pre decrement means the value of the variable is decremented before it is used in the expression
// post decrement means the value of the variable is used in the expression before it is decremented

// logical operator
// && and operator
// || or operator
// ! not operator

// conditional operator
// condition ? expression1 : expression2


// function is a block of code that performs a specific task
// a reusable piece of code that can be called multiple times

// what is closure
// inner function has access to the outer function's variables and parameters
// even after the outer function has returned

// bundle of functions is called closure
// example of closure
// function outerFunction(outerVariable) {
    // return function innerFunction(innerVariable) {
        // console.log("Outer Variable: " + outerVariable)
        // console.log("Inner Variable: " + innerVariable)
    // }
// }
// const newFunction = outerFunction("outside")
// newFunction("inside")

// test
//  how to declare name in function inner and outer function
// function  outer(){
//     let name = "mehreen"
//     function inner(){
//         console.log(name)
//     }
//     inner()
// }
// console.log(outer())

// high order function
// take another function as an argument or return a function as a result
// example of high order function
// function higherOrderFunction(callback){

// function declaration (){}
// example of function declaration
// function greet(){
//     console.log("Hello, welcome to JavaScript!")
// }

// function expression 
// example of function expression 
// let greet = function(){
//     console.log("Hello, welcome to JavaScript!")
// }

// arrow function let arrowFunction = () => {}
    // example of arrow function
// let greet = () => {
//     console.log("Hello, welcome to JavaScript!")
// }

// what is parameter
// parameter is a variable that is used to store the value passed to a function
// example of parameter
// function greet(name){
//     console.log("Hello " + name)
// }

// another example of parameter
// function add(num1, num2){
//     return num1 + num2
// }
// console.log(add(5, 10))

// another example of parameter
// function multiply(num1, num2){
//     return num1 * num2
// }
// let result = multiply(5, 10)
// console.log(result)

// rest parameter & default parameter

// rest parameter
// rest parameter is used to represent an indefinite number of arguments as an array
// rest parameter is denoted by three dots (...) followed by the name of the array that will hold the rest of the arguments
// rest parameter tamam data ko ik ary me convert krta hai
// example of rest parameter
// function sum(...numbers){
//     return numbers.reduce((acc, curr) => acc + curr, 0)
// }
// console.log(sum(1, 2, 3, 4, 5))

// another example of rest parameter
// function addTwonumbers(...numbers){
//     return numbers
// }
// let result = addTwonumbers(5, 10, 15, 20)
// console.log(result)

// another example of rest parameter

// function AddNumbers(...numbers){
//     return numbers.filter(a => a % 2 != 0)
// }
// let result = AddNumbers(1, 2, 3, 4, 5, 6, 345444 ,72, 652, 345, 234, 567, 890)
// console.log(result)

// function sum (...numbers){
//     return numbers.filter(a => a % 2 === 0)
// }
// let result2 = sum(1, 2, 3, 4, 5, 6, 345444 ,72, 652, 345, 234, 567, 890)
// console.log(result2)

// function sum (...numbers){ 
//     return numbers.filter(a => 4 % 2 === 0)
// }
// let result3 = sum(1, 2, 3, 4, 5, 6, 345444 ,72, 652, 345, 234, 567, 890)
// console.log(result3)

// default parameter
// default parameter is used to set a default value for a parameter in case no value is passed to the function
// example of default parameter

// function myfunc(name = "Guest"){
//     console.log("Hello " + name)
// }
// myfunc() // this will return "Hello Mehreen"
// myfunc("Mehreen") // this will return "Hello Mehreen"
// myfunc() // this will return "Hello Guest" because no value is passed to the function

// function mygreet(name){
//     console.log("Hello " + name)
// }
// mygreet("mehreen") // this will return "Hello mehreen"
// mygreet() // this will return "Hello undefined" because no value is passed to the function

// // template literals
// // ${} is used to embed expressions in a string
// // example of template literals
// let name = "Mehreen"
// console.log("my name is " + name)
// console.log(`my name is ${name}`)

// let isage = 20
// let iseducation = "graduate"
// if(isage >= 18 && iseducation === "graduate"){  
//     console.log("mobbarik ho job done")
// }

// + k sat hum 2 kam karsakte he pela number ko add karte he 
// kesi string ko number me convert karte he
// kisi string ko number k sat concate karte he 
// - k sat subtract karte he aur string ko number me convert karte he
// / 





// coversion & conversion method
// type conversion is the process of converting a value from one data type to another
// type coercion is the process of converting a value from one data type to another automatically by JavaScript

// js value ko convert karta he is ko coversion kehte he
// developer value ko convert karta he is ko conversion method kehte he

// string to number
// let str = "123"
// let num = Number(str)
// console.log(num)

// let y = "5"
// let x = "3"
// let z = 5
// console.log(y - x + z)

// let a = "apple"
// let b = 3
// console.log(a - b)

// falsey values in JavaScript
// false : the boolean value false itself is a falsey value
// 0  -0  0.0 : the number zero in all its forms is a falsey value
// ""  ''  `` : an empty string is a falsey value
// null : the absence of any value is represented by null, which is a falsey value
// undefined : a variable that has been declared but not assigned a value is undefined, which is a falsey value
// NaN : the result of an invalid mathematical operation is NaN (Not a Number), which is a falsey value

// truthy values in JavaScript
// any value that is not falsey is considered truthy
// true : the boolean value true itself is a truthy value
// non-zero numbers : any number that is not zero (positive or negative) is a truthy value
// non-empty strings : any string that contains at least one character is a truthy value
// objects : all objects, including arrays and functions, are truthy values


// let a = 23
// let b = String(a)
// console.log(b)

// unfamilier operators
// let a = "2"

// console.log(++a + a++ + ++a)


// let x = 5
// console.log(--x - --x + ++x + ++x)

// // Concat text string
// // means string ko apis me add karna e.g 2 names ko jese hum add karte like mehreen  munir

// // example

// let firstname = "Mehreen"
// let lastname  = "Munir"
// // let fullname = `${firstname} ${lastname}`

// console.log(fullname);

// logic condition
// &&
// example 

// let isAge = 19
// let isG = Male 
// if(isAge > 18 && isG == "male"){
//     console.log("job p ayega ")
// }
// if(isAge > 18 || isG == "male"){
//     console.log("run ho raha he")
// }

// diving licence permision age is 19

// let x = true
// let y = false
// console.log(x + y)


// let a = 0.1
// let b = 0.2
// let ans = 0.3
// console.log(ans === a + b);


// what is function 
// a function is a reuseable block of code that performs a specific task
// types of function
// function decelaration
// example of decelaration
// function sqr (num){
//     return num * num
// }
// console.log(sqr(2))
// let res = sqr(3)
// console.log(res)


// function expression
// let subTwoNumber = function (numone , numtwo)
// {
//     return numone - numtwo
// }
// console.log(subTwoNumber (10 , 4))



// // arrow function
// let rem = ( numone , numtwo) => { return numone * numtwo}
// console.log( rem(3,10))

// let welcome = (person) => {
//     return `welcome to our home ${person}`
// }
// console.log(welcome("Nouman"))

// // clouser
// {
//     let a = 23
//     {console.log(a)}
// }

// {
//     {let b = 23}
//     console.log(b)
// }

// {
//     let a = 2
//     const b = 3
//     var c = 4
//     {
//         console.log(a)
// console.log(b)
// console.log(c)
//     }
// }

// what is loop
// loop is a block of code that is used to repeat a specific task until a certain condition is met
// types of loop
// for loop
// while loop
// do while loop
// for in loop
// for of loop

// example of for loop
//  for(let i = 0; i < 5; i++){
//     console.log(i)
//  }

//  for(let i = 10; i >= 0; i--){
//     console.log(i)
//  }

//  for(let i =0; i <= 10; i++){
//     console.log(i)
//  }

//  table of 5
//      for(let i = 1; i <= 100; i++){  
//         console.log(`${i} *2`)
//  }

    // santax means
    // for(initialization; condition; increment/decrement){
    //     // code to be executed
    // }


    // infinite loop  for cheaking loptop performance
    // for(let i = 1; i = 0; i++){
    //    console.log(i)
    //  }

    //  for loop example
    // for (let i = 1; i <= 5; i++){
    //     let row = "";
    //     for(let j = 1; j <= i; j++){
    //         row += "* ";
    //     }
    //     console.log(row)
    // }

    // while loop
    // syntax
    // while(condition){
    //     // code to be executed
    // }

    // example of while loop
    //     let i = 1
    //      while(i <= 5){
    //     console.log(i)
    //     i++
    //  }

    // //  drinking water in while loop
    //       let water = 0
    //      while(water < 8){
    //      console.log("drinking water")
    //       water++
    //  }

    // today work 
    // what is dom?
    // what is event in js/
    // document.querySelector() method
    // addEventListener() method
    // click event
    // function as event handler


//     let intro = document.querySelector("h1");
// intro.style.color = "red";



// let name = document.querySelector("h2");
// name.addEventListener("click",()=>{
//      name.style.color = "green";
//      name.style.backgroundColor = "pink";
// });


// let body = document.querySelector("body")
//     let btn = document.querySelector("button")

//     btn.addEventListener("click", ()=>{
//         body.style.backgroundColor = "blue"
//     }); 

    // let body = document.querySelector("body")
    // let btn = document.querySelector("button")

    // btn.addEventListener("click", () => {
    //     // body.style.backgroundmulticolors = "pink"
    // }
// what is window?
// window is global object in JavaScript
// window object represents the browser window and provides methods and properties to interact with it
// how to create dom structure?
// dom method



let headone = document.querySelector("h1")
headone.addEventListener("click" , ()=>{
  headone.textContent = "My Name Is Mehren Munir"
  headone.style.color = "blue"
  headone.style.fontSize = "50px"
  headone.style.textAlign = "center"
})

  let intro = document.querySelector("h2");
 intro.style.color = "red";
 intro.style.fontSize = "40px";
 intro.style.textAlign = "center";
    
 
 let para = document.querySelector("p");
para.addEventListener("click",()=>{
     para.style.color = "green";
      para.style.backgroundColor = "pink";
      para.style.fontSize = "30px";
      para.style.textAlign = "center";
 });





let body = document.querySelector("body")
let darkbtn = document.querySelector(`.darkbtn`)
let lightbtn = document.querySelector(`.lightbtn`)
console.log(darkbtn)
darkbtn.addEventListener(`click`, function(){
 body.style.background = "black"
 body.style.color = "white"
})
lightbtn.addEventListener(`click`, function(){
 body.style.background = "white"
 body.style.color = "black"
})

let input = document.querySelector("input")
let btn = document.querySelector("button")
btn .addEventListener("click", ()=>{
    let li = document.createElement("li")
    li.textContent = input.value
    document.querySelector("ul").append(li)
    input.value = ""
})

let para = document.querySelector(".event")
document.addEventListener("mousemove", (e)=>{
    para.style.marginTop = `${e.y}px`
    para.style.marginLeft = `${e.x}px`
    console.log(e);

})