window.onload = function() {
	console.log("The website was loaded...");
	let countries = ["USA", "France", "Italy", "Brazil", "Colombia", "Belize", "Venezuela"];

	var select = document.querySelector("#mySelect");
	for (let i = 0; i < countries.length; i++) {
		let option = document.createElement("option");
		option.innerHTML = countries[i];
		select.appendChild(option);
	}
};

let change = document.getElementById("mySelect");
change.addEventListener("change", function() {
	let opcion = document.querySelector("#mySelect");
	alert(opcion.value);
});
