// const number = document.getElementById("numero");
const cursor = document.querySelector(".cursor");
const page = document.querySelector("#page");
const head = document.querySelector("h1");
// var sound = new Audio("sound.mp3");


document.addEventListener("mousemove", moveIt);
document.addEventListener("click", clickSpan);
document.addEventListener("click", qwerty);

function moveIt(e) {
	cursor.style.top = `${e.pageY}px`;
	cursor.style.left = `${e.pageX}px`;
}

function clickSpan(e) {
	let span = document.createElement("span");
	span.classList.add("shake");
	span.style.top = `${e.pageY}px`;
	span.style.left = `${e.pageX}px`;
	page.appendChild(span);
	changeText()
}

function changeText() {
	head.innerHTML = "Hi!";
}

function qwerty() {
	alert("Add a dot?")
}