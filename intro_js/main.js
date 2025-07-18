
function sayhello(firstname, secondname) {
	console.log("Hello " ,firstname , " " ,secondname);
}

	let learner= "Mia"

sayhello(learner , "Eliana") 
/*
// regular function
function sum(num1, num2){
	let sum = num1 + num2
	return sum
}
*/
let answer = sum(1, 4)
console.log(answer)
/*
setTimeout(function(){
	console.log("here we are")
}, 5000)
*/
//arrow function

const sayhi = () => {
	console.log("i am here")
}

sayhi()

const multipy= (one,two) => one*two
console.log(multipy(4,5))

function sum(one,two){
	return one + two 
}
console.log(sum(4,7))

const name= ("Mia")
let upperCaseName= name.toUpperCase ()
console.log(name.slice( 1))

let learners= ['elie', 'Mia', 'auno']
learners.forEach((learnernames) => {
	console.log("be blessed" ,learnernames)
})
/*
function saythanks(name) {
	console.log('thank you for your service $(name)') 

}

learners.forEach(saythanks)
*/

const saythanks= (name) => {
	console.log(`${name} thank you for showing up`)
} 
learners.forEach(saythanks)

learners.forEach(name => console.log(`${name}thanks for showing up`))
/* module 
import {add} from './math'
let answer(add)
console.log(answer)
*/
let nam= process.argv[2]
console.log("hello there", nam)