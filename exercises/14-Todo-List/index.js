// Your code here

let texto = document.getElementById("addToDo");
texto.addEventListener("change", function() {
	let valor = texto.value;
	let tareaNueva = document.createElement("li");
	tareaNueva.innerHTML = '<span><i class="fa fa-trash"></i></span> ' + valor;
	let lista = document.getElementsByTagName("ul")[0];
	lista.appendChild(tareaNueva);
});

window.onload = function loadFn() {
	var containerElm = document.getElementById("container");
	containerElm.addEventListener("click", function(event) {
		{
			document.getElementsByTagName("ul")[0].removeChild(event.target);
		}
	});
};
