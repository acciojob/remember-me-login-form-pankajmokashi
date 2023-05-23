//your JS code here. If required.
const form = document.querySelector("form")
const formElements = Array.from(form.elements);
formElements.forEach(element => {
	console.log(element);
});
let result;

form.addEventListener("submit", function (event) => {
	event.preventDefault()
	
	let name = formElements[0]
	let password = formElements[1]
	let check = formElements[2]

	if(check.checked === true){
		result = {
			name: "${name.value}",
			password: "${password.value}"
		}
		localStorage.setItem("data", result)
	}
})
