


let darkLink = document.querySelectorAll("li a")[0];
let lightLink = document.querySelectorAll("li a")[1];
let mijnBody = document.querySelector("body");
function switchToLight() {
	mijnBody.classList.add("light");
}
function switchToDark() {
	mijnBody.classList.remove("light");
}
lightLink.addEventListener("click",switchToLight);
darkLink.addEventListener("click",switchToDark);
