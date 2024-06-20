// console.log('I like pizza!')

// window.alert('this is an alert')
// window.alert('accept the cookies')
// this is comment

// document.getElementById('myP').textContent = 'i do not like pizza'

// let x; ==> declaration
// x = 100; ==> assignment

// Variables(numbers)
// let price = 10.99
// let age = 25
// let gpa = 2.1

// (typeof gpa) ==> type of the element

// PROGRAM
// let firstName = 'Max'
// let favoriteFood = 'Pizza'
// let email = 'Maxis123@gmail.com'
// console.log(typeof firstName)
// console.log(firstName)
// console.log(`Your name is ${firstName}`)
// console.log(`You like ${favoriteFood}`)
// console.log(`Your email is ${email}`)

// logs to the console
// console.log(`Your gpa is ${gpa}`)
// console.log(`The price is ${price}`)
// console.log(`Your age is ${age}`)
// console.log(`the type of the element is ${typeof gpa}`)

// BOOLEANS
// let online = false
// let forSale = true
// let isStudent = true
// console.log(`Bro is online ${online}`)
// console.log(`Is this car for sale ${forSale}`)
// console.log(`Enrolled: ${isStudent}`)

// NEW PROGRAM
// let fullName = 'Max study'
// let age = 16
// let student = true
// document.getElementById('p1').textContent = `Your name is ${fullName}`
// document.getElementById('p2').textContent = `You are ${age}`
// document.getElementById('p3').textContent = `Are you student - ${student}`

// Accept a user input
// 1. Window prompt
// 2. HTML textbox

// The User Input program
// let username
// document.getElementById('mySubmit').onclick = function () {
// 	username = document.getElementById('myText').value
// 	document.getElementById('myh1').textContent = `Hello ${username}`
// }

// Age program
// let age
// age = window.prompt('How old are you?')
// age = Number(age)
// age += 1
// console.log(age, typeof age)

// Program with circle
// const PI = 3.14159
// let radius
// let circumreference
// radius = window.prompt('Enter the radius of the circle: ')
// radius = Number(radius)
// circumreference = 2 * PI * radius
// console.log(circumreference)

// My radius program
// const PI = 3.1415
// let radius
// let circumreference
// document.getElementById('mySubmit').onclick = function () {
// 	radius = document.getElementById('myRadius').value
// 	radius = Number(radius)
// 	circumreference = 2 * PI * radius
// 	document.getElementById(
// 		'myh2'
// 	).textContent = `The circumreference of the circle is ${circumreference}`
//

// THE COUNTLABEL PROGRAM
// const decrease = document.getElementById('decreaseb')
// const increase = document.getElementById('increaseb')
// const reset = document.getElementById('resetb')
// let countlabel = document.getElementById('thedigit')
// let digit
// digit = 0

// first trial
// document.getElementById('decreaseb').onclick = function () {
// 	digit--
// 	document.getElementById('thedigit').textContent = `${digit}`
// }
// document.getElementById('increaseb').onclick = function () {
// 	digit++
// 	document.getElementById('thedigit').textContent = `${digit}`
// }
// document.getElementById('resetb').onclick = function () {
// 	digit = 0
// 	document.getElementById('thedigit').textContent = `${digit}`
// }

// second trial
// decrease.onclick = function () {
// 	digit--
// 	countlabel.textContent = digit
// }
// increase.onclick = function () {
// 	digit++
// 	countlabel.textContent = digit
// }
// reset.onclick = function () {
// 	digit = 0
// 	countlabel.textContent = digit
// }

// MATH. METHODS
// let a, b, c
// a = 8.2
// b = 9.1
// c = 4.9
// a = Math.round(a)
// b = Math.ceil(b)
// c = Math.floor(c)
// c = Math.trunc(c) ==> to the delete nums after .
// a = Math.pow(b, c) ==> b goes with c exponential
// a = Math.sqrt(a) ==> goes to the squere root
// a = Math.abs(a) ==> Модуль
// console.log(a, b, c)

// Max and min of nums
// let max = Math.max(a, b, c)
// let min = Math.min(a, b, c)
// console.log(Math.round(max))

// RANDOM NUMBER METHOD
// Only gives a num between 0 and 1.
// let randomNum = Math.ceil(Math.random() * 6)
// console.log(randomNum)
// <===or===>
// let randomNum = Math.floor(Math.random() * 6) + 1
// console.log(randomNum)

// WITH MIN AND MAX ===> IN RANGE
// const min = 20
// const max = 90
// let randomNum = Math.floor(Math.random() * (max - min)) + min
// console.log(randomNum)

// Random number generator program
// const generate = document.getElementById('generateb')
// const reset = document.getElementById('resetb')
// let num = document.getElementById('thenum')
// let digit = 0
// generate.onclick = function () {
// 	let min = document.getElementById('min-input').value
// 	min = Number(min)
// 	let max = document.getElementById('max-input').value
// 	max = Number(max)
// 	digit = Math.floor(Math.random() * (max + 1 - min)) + min
// 	num.textContent = digit
// }
// reset.onclick = function () {
// 	num.textContent = 0
// }

// IF STATEMENTS
// 1)
// let age = window.prompt('Enter your age:')
// if (age >= 18) {
// 	console.log('You are old enough to tryna that shit')
// } else {
// 	console.log('You must be 18 my dear guest')
// }

// 2)
// let working = true
// let wage = 1000
// if (working) {
// 	if (wage >= 3000) {
// 		console.log('Wow, thats pretty good wage')
// 	} else if (wage == 1000) {
// 		console.log('Hopefully, u are not poor')
// 	} else if (wage <= 0) {
// 		console.log('Noo, you just spending your broo')
// 	} else {
// 		console.log('Try to find better job bro')
// 	}
// } else {
// 	console.log('You have to find a job')
// }

// Age Program
// const submit = document.getElementById('subbutton')
// const result = document.getElementById('resultElement')
// let age
// submit.onclick = function () {
// 	age = document.getElementById('age').value
// 	if (age >= 18) {
// 		result.textContent = 'Enjoy your experience there'
// 	} else if (age < 18) {
// 		result.textContent = 'You are not old enough to enter this site'
// 	} else {
// 		result.textContent = 'It seems like you have a mistake. Try again'
// 	}
// }

// Payment Program
// const checkbox = document.getElementById('myCheckbox')
// const visa = document.getElementById('VisaBtn')
// const mastercard = document.getElementById('MastercardBtn')
// const paypal = document.getElementById('PaypalBtn')
// const submit = document.getElementById('mySubmit')
// const subres = document.getElementById('subResult')
// const paymentres = document.getElementById('paymentResult')
// submit.onclick = function () {
// 	if (checkbox.checked) {
// 		subres.textContent = 'You have a subscribe'
// 	} else {
// 		subres.textContent = 'You are not subscribed'
// 	}
// 	if (visa.checked) {
// 		paymentres.textContent = 'Currently using Visa payment system'
// 	} else if (mastercard.checked) {
// 		paymentres.textContent = 'Currently using Mastercard payment system'
// 	} else if (paypal.checked) {
// 		paymentres.textContent = 'Currently using Paypal payment system'
// 	} else {
// 		paymentres.textContent = 'Please choose a correct payment system'
// 	}
// }

// TERNARY OPERATOR
// 1)
// let num = 5
// let result
// result = num == 4 ? 'The number equals 4' : 'The number dont equals 4'
// console.log(result)

// 2)
// let time = 11
// let greeting = time < 12 ? 'Good morning!' : 'Good afternoon!'
// console.log(greeting)

// 3)
// let isStudent = null
// let message = isStudent ? 'You are a student' : 'You are not a student'
// console.log(message)

// 4)
// let purchaseAmount = 44
// let discount = purchaseAmount >= 125 ? 10 : 0
// console.log(
// 	`Your total is $${purchaseAmount - (purchaseAmount * discount) / 100}`
// )

// SWITCHES
// 1)
// let day = 6
// switch (day) {
// 	case 1:
// 		console.log('It is Monday')
// 		break
// 	case 2:
// 		console.log('It is Tuesday')
// 		break
// 	case 3:
// 		console.log('It is Wednesday')
// 		break
// 	case 4:
// 		console.log('It is Thursday')
// 		break
// 	case 5:
// 		console.log('It is Friday')
// 		break
// 	case 6:
// 		console.log('It is Saturday')
// 		break
// 	case 7:
// 		console.log('It is Sunday')
// 		break
// 	default:
// 		console.log(`${day} is not a day`)
// }

// 2)
// let testScore = 100
// switch (true) {
// 	case testScore == 100:
// 		console.log('You are a monster')
// 		break
// 	case testScore >= 80:
// 		console.log('It is an amazing result')
// 		break
// 	case testScore >= 60:
// 		console.log('It is a pretty good result')
// 		break
// 	case testScore >= 40:
// 		console.log('It is a normal result')
// 		break
// 	case testScore >= 20:
// 		console.log('You have passed the test')
// 		break
// 	default:
// 		console.log('You have failed a test')
// }

// STRING METHODS
// 1) CHARACTER PLACE
// let username = 'Max'
// console.log(username.charAt(0)) ==> FIRST ELEMENT OF STRING
// 2) INDEX
// let username = 'Maxan'
// console.log(username.indexOf('a')) ==> first founded
// console.log(username.lastIndexOf('a')) ==> lastest index
// 3) LENGTH
// let username = 'Maxan'
// console.log(username.length)
// 4) TRIM
// let username = 'Maxan     '
// username = username.trim() ==> deletes spaces
// console.log(username.length, username)
// 5) UPPERCASE
// let username = 'Maxan'
// username.toUpperCase() ==> UPPER
// username.toLowerCase() ==> LOWER
// 6) REPEAT
// let username = 'Maxan'
// username = username.repeat(3)
// console.log(username)
// 7) startsWith method and endsWith method
// let username = 'Maxan'
// let result1 = username.startsWith('M') ==> True
// let result2 = username.endsWith('n') ==> True
// 8) Includes method
// let username = 'Maxan'
// result = username.includes(' ')
// if (result) {
// 	console.log('You cannot use username with whitespaces')
// } else {
// 	console.log(username)
// }
// 9) REPLACING
// let phoneNum = '123-456-7890'
// phoneNum = phoneNum.replaceAll('-', '/') ==> REPLACING
// console.log(phoneNum)
// 10) padStart method and padEnd method
// let phoneNum = '123-456-7890'
// phoneNum = phoneNum.padStart(15, '0') ==> WORKS AS PADDING => PADS WITH 0 TO A LENGTH OF 15 TO THE START
// phoneNum = phoneNum.padEnd(20, '3') ==> LENGTH 20 AND ADD TO THE END 3
// console.log(phoneNum)

// String slicing
// const fullName = 'Maximus'
// let firstName = fullName.slice(0, 5)
// let lastName = fullName.slice(5, 8)

// let firstName = fullName.slice(0, fullName.indexOf(' '))
// let lastName = fullName.slice(fullName.indexOf(' ') + 1)

// console.log(lastName)
// COULD DISPLAY A CHARACTER

// let firstChar = fullName.slice(0, 1)
// let lastChar = fullName.slice(-1)
// console.log(firstChar) ==> any character
// console.log(lastChar)==> last Character

// Email exercise
// const email = 'bro1@gmail.com'
// let username = email.slice(0, email.indexOf('@'))
// let extension = email.slice(email.indexOf('@') + 1)
// console.log(username)
// console.log(extension)

// METHOD CHAINING
// Entering program authentification
// (There's no method chaining)
// let username = window.prompt('Enter your username: ')
// username = username.trim()
// let firstLetter = username.charAt(0)
// let anythingElse = username.slice(1)
// firstLetter = firstLetter.toUpperCase()
// anythingElse = anythingElse.toLowerCase()
// username = firstLetter + anythingElse
// console.log(username)

// Here's method chaining method
// let username = window.prompt('Enter your username: ')
// username =
// 	username.trim().charAt(0).toUpperCase() +
// 	username.trim().slice(1).toLowerCase()

// console.log(username)

// LOGICAL OPERATORS
// const temp = 250

// if (temp <= 0 || temp > 30) { ==> OR
// 	console.log('The weather is Bad')
// } else {
// 	console.log('The weather is Good')
// }

// if (temp >= 0 && temp <= 30) {      ==> AND
// 	console.log('The weather is Good')
// } else {
// 	console.log('The weather is Bad')
// }

// const isSunny = true

// if (!isSunny) {         ==> NOT
// 	console.log('It is cloudy')
// } else {
// 	console.log('It is sunny')
// }

// COMPARISON OPERATORS
// = - принимание значения сменной
// != - неравенство
// == - сравнение только значений(not strict, comparison operator)
// !== - сравнение с неравенством
// === - сравнение значений и типов данных(strict equality operator)

// const PI = 3.14

// if (PI == '3.14') {
// 	console.log('That is PI') ==> TRUE
// } else {
// 	console.log('That is not PI')
// }

// if (PI === '3.14') {
// 	console.log('That is PI')
// } else {
// 	console.log('That is not PI') ==> FALSE
// }

// WHILE LOOP
// let username = ''
// while (username === '' || username === null) {
// 	username = window.prompt(`Enter your name: `)
// }
// DO IN WHILE LOOP
// do {
// 	username = window.prompt(`Enter your name: `)
// } while (username === '' || username === null)
//While usage
// let isLogged = false
// let username
// let password

// while (!isLogged) {
// 	username = window.prompt(`Enter your username`)
// 	username = window.prompt(`Enter the password`)

// 	if (username === 'myUsername' && password === 'myPassword') {
// 		isLogged = true
// 		console.log('You are logged in!')
// 	} else {
// 		console.log('Invalid credentials')
// 	}
// }
//

// FOR LOOP
