window.onload = function() {
	var b = document.createElement("button");
	b.innerHTML = "☼";
	b.setAttribute("onclick", "document.body.classList.toggle('e');");
	document.querySelectorAll("p")[0].appendChild(b);
	window.matchMedia('(prefers-color-scheme: dark)').matches && document.body.classList.toggle('e');
//	document.body.classList.toggle('e');
}