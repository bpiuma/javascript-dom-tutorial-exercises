let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function() {
	//your code here
	var div = document.createElement("DIV");
	div.style.background = "yellow";
	div.innerHTML = "Hello World";
	document.body.appendChild(div);
});
