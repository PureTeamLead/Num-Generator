const generate = document.getElementById('generateb')
const reset = document.getElementById('resetb')

let num = document.getElementById('thenum')
let digit = 0

generate.onclick = function () {
	let min = document.getElementById('min-input').value
	min = Number(min)
	let max = document.getElementById('max-input').value
	max = Number(max)
	digit = Math.floor(Math.random() * (max + 1 - min)) + min
	num.textContent = digit
}

reset.onclick = function () {
	num.textContent = 0
}
