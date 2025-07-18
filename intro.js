const name = "Amina";
console.log(name);

let numbersunder10 = [1,2,3,4,5,6,7,8,9];

console.log(numbersunder10)
let learnernames = ["elie","gaju","auno"];

console.log(typeof learnernames)

let sum= 10/2;

console.log(sum)

let age = 16;

if (age >= 18) { 
  console.log("you can vote");
  } else {
 console.log("you can not vote");
}


let user = {
	"name": "Elie",
	"email": "elie@email.com",
	"isAdmin": true
}

if (user.isAdmin) {
	console.log("Do something")
} else {
	console.log("not admin can't do anything") }


let emails= ['elie@gmail.com', 'gaju@gmail.com', 'auno@gmail.com', 'gee@gmail.com', 'yola@gmail.com']
function sendEmails(emails){
for(let i = 1; i < emails.length; i++){
	console.log("sending email to ", emails[i]) }
}
sendEmails(['elie@gmail.com', 'gaju@gmail.com', 'auno@gmail.com', 'gee@gmail.com', 'yola@gmail.com']
)





