window.onload = function() {
	var b = document.createElement("a");
	b.innerHTML = "★";
	b.setAttribute("onclick", "document.body.classList.toggle('e');");
	b.className = "flutua";
	document.body.appendChild(b);
	window.matchMedia('(prefers-color-scheme: dark)').matches && document.body.classList.toggle('e');
}