let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function() {
	//your code here
	var li = document.createElement("LI");
	li.innerHTML = "Fourth element";
	document.querySelector("#myList").appendChild(li);
});