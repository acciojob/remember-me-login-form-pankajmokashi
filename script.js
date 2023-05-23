//your JS code here. If required.
const form = document.querySelector("form")
const formElements = Array.from(form.elements);

let result = []

form.addEventListener("submit", (event) => {
	event.preventDefault()
	
	let name = formElements[0]
	let password = formElements[1]
	let check = formElements[2]

	if(check.checked === true){
		let obj = {
			name: "${name.value}",
			password: "${password.value}"
		}
		result.push(obj) 
		localStorage.setItem("data", JSON.stringify(result))
	}
	else{
		result.delete[name.value]
	}
})
