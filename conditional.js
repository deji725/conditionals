///////////////
// BACKSTORY //
///////////////
// You're an android in an unforgiving world where humans rule.
// Your decisions now will affect the world later.
// What choices will you make?
// This is totally NOT a rip off from a popular 2018 game.

///////////////////////////////
// BASIC "IF/ELSE" STATEMENT //
///////////////////////////////
const username = process.argv[2];
// Create a variable "username" and set it equal to the user's
// first command line argument when calling 'node conditional.js'
if (username !== undefined)  {
    console.log(`Hello, ${username}`)
} else {
    console.log("You must provide a username")
}
// If "username" is defined, console.log(`Hello, ${username}`)
// Otherwise, console.log("You must provide a username");

// HINT: you can check if a variable is defined by using it
// as a condition. Ex. if(someVariable){...}

// Test to make sure the script is working as intended. Save this file
// and in the command line execute 'node conditional.js'
// Then try 'node conditional.js Marcus'

/////////////////////////////////
// "IF/ELSE IF/ELSE" STATEMENT //
/////////////////////////////////
console.log("You find yourself in a store shopping...");
var health = 100;
var money = 100;
// Create a variable "health" and set it equal to 100
// Create a variable "money" and set it equal to 100
var item =process.argv[2];
// Create a variable "item" and set it equal to the user's second command
// line argument
if (item == "jacket") {
    money = money-40
    health = health+20
    console.log("You bought a jacket");
} else if (item == "candy"){
    money = money-10
    console.log("You bought candy");
} else if (item == "paint"){
    money=money-30
    console.log("you bought paint");
} else if (item == "hammer"){
    money=money-70
    console.log("You bought a hammer");
} else {
    console.log("You bought nothing");
}

console.log(`You have ${money} dollars left.`);

// If "item" is "jacket", subtract 40 from "money" and add 20 to "health" and console.log("You bought a jacket");
// else if "item" is "candy", subtract 10 from "money" and console.log("You bought candy");
// else if "item" is "paint", subtract 30 from "money" and console.log("You bought paint");
// else if "item" is "hammer", subtract 70 from "money" and console.log("You bought a hammer");
// else console.log "You bought nothing"

// console.log(`You have ${money} dollars left.`);

// Test to make sure the script is working as intended.

///////////////////////
// BOOLEAN OPERATORS //
///////////////////////
console.log("You exit the store and find yourself in the middle of an anti-android protest!");
console.log("You could run or stay...");
const randomPerson = Math.random() > .5 ? "John" : "Felipe"; 
// You're given a variable "randomPerson" that is a string
// NOTE: 
// We'll discuss Math.random() later this week!
// If you're curious about the rest, look up "JS ternary operator"
var choice =process.argv[2];
// Create a variable "choice" and set it equal to the user's third
// command line argument
if (username == undefined)  {
    console.log("You shut down due to inactivity and get robbed of all your money");
    money = 0;
} else if (choice !== "run" && randomPerson == "Felipe"){
    console.log("The protesters attack you...");
    if (item !== "jacket") {
        console.log("...but Felipe, a fellow android shows up to help you escape them");
    } else {
        console.log("...and Felipe, a fellow android, who would normally help doesn't recognize you with the jacket");
        money = 0;  
    }       
}else if (choice == "run" && randomPerson == "John"){
    console.log("You run, but John, a human officer with an attitude and a heart of gold, finds you...");
    if (item == "hammer" || "jacket"  ) {
        console.log("...and holds you for questioning for suspicious activity");
        money =0;
    } else {
        console.log("...and seeing you have no ill intent, John protects you from the protestors and lets you go.");
    } 
} else {
    if(item == "paint") {
        console.log("You boldy protest by painting a pro-android message...");
        var choice =process.argv[2];
        if(message == defined){
            console.log(`..."${message.toUpperCase()}""`);    
        } else {
            console.log(`..."WE ARE ALIVE"`);
        }
    }else {
        console.log(`Nothing interesting happens, but at least you got that ${item}`);
    }
}      
// If "choice" is NOT defined (recall how we did this with the "username" variable)
//      - console.log("You shut down due to inactivity and get robbed of all your money");
//      - reduce "money" to 0

// Else if "choice" is NOT "run" AND "randomPerson" is "Felipe" 
//      console.log("The protesters attack you...");
//      - if "item" is NOT "jacket"
//          - console.log("...but Felipe, a fellow android shows up to help you escape them");
//      - else
//          - console.log("...and Felipe, a fellow android, who would normally help doesn't recognize you with the jacket");
//          - reduce "health" by 50

// Else if "choice" is "run" AND "randomPerson" is "John" 
//      - console.log("You run, but John, a human officer with an attitude and a heart of gold, finds you...");
//      - if "item" is "hammer" OR "jacket"
//          - console.log("...and holds you for questioning for suspicious activity");
//          - reduce "money" to 0
//      - else
//          - console.log("...and seeing you have no ill intent, John protects you from the protestors and lets you go.");

// Else (technically this means you ran AND got Felipe OR didn't run AND got John)
//      - if "item" is "paint"
//          - console.log("You boldy protest by painting a pro-android message...");
//          - create a variable "message" and set it equal to the user's fourth command line argument
//          - if "message" is defined
//              - console.log(`..."${message.toUpperCase()}""`);
//          - else
//              - console.log(`..."WE ARE ALIVE"`);
//      - else
//          - console.log(`Nothing interesting happens, but at least you got that ${item}`);
///////////
// SCOPE //
///////////

// We'll see scope play a larger role when we talk about functions,
// but any time there are curly brackets, the space in between the 
// brackets have their own scope, meaning variables defined inside of
// that scope are inaccessible to the world outside of those brackets

// Create a variable "score" and set it equal to 0
var score =0;
var score =score + health + money
// Add "money" and "health" to "score"
if(choice !== undefined) {
    score=score+10;
}
// If "choice" is defined, add 10 points to "score"
// NOTE: Recall where "choice" was initialized (created). What scope was it in?
// The global scope! So all of your code has access to it.
if(message !== undefined) {
    score=score+10
}

// if "message" is defined, add 10 points to "score"
// NOTE: Recall where "message" was initialized/created. 
// It's within curly brackets! 
// Alter your code so that "message" is initialized  in the global space 
// right alongside "choice"

//////////////////////
// STORY CONCLUSION //
//////////////////////
// console.log("The end");
// console.log(`Score: ${score}`);
console.log("The end");
console.log(`Score: ${score}`);