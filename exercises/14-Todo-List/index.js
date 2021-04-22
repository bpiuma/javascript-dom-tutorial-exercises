// Your code here

let texto = document.getElementById("addToDo");
texto.addEventListener("change", function() {
	let valor = texto.value;
	let tareaNueva = document.createElement("li");
	tareaNueva.innerHTML = '<span><i class="fa fa-trash"></i></span> ' + valor;
	let lista = document.getElementsByTagName("ul")[0];
	lista.appendChild(tareaNueva);
});


