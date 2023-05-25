//your JS code here. If required.
const form = document.querySelector("form")
const formElements = Array.from(form.elements);

let username = document.getElementById("username")
let password = document.getElementById("password")

form.addEventListener("submit", (event) => {
	event.preventDefault()
	
	let name = formElements[0]
	let password = formElements[1]
	let check = formElements[2]

	if(check.checked === true){
		localStorage.setItem("username", username.value)
		localStorage.setItem("password", password.value)
	}
	else{
        localStorage.removeItem("username")
		localStorage.removeItem("password")
	}
})
