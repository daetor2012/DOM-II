function loadFunction() {
    alert("Welcome to the Fun Bus Page!");
};

window.addEventListener('load', loadFunction());

let logo = document.querySelector("header h1");
logo.addEventListener('mouseenter', (event) => {
    event.target.style.color = "red";
});

logo.addEventListener('mouseleave', (event) => {
    event.target.style.color = "black";
});

let click1 = document.querySelector("nav a");
click1.addEventListener('click', (event) => {
    alert("This doesn't do anything yet!");
});

let click2 = document.querySelector(".test");
click2.addEventListener('dblclick', (event) => {
    alert("This isn't correct at this time.");
});

let mouse1 = document.querySelector(".intro h2");
mouse1.addEventListener('mouseover', (event) => {
    event.target.style.backgroundColor = "white";
});
mouse1.addEventListener('mouseleave', (event) => {
    event.target.style.backgroundColor = "red";
});

let button1 = document.querySelector(".btn1");
button1.addEventListener('mousedown', (event) => {
    event.target.style.color = "red";
});
button1.addEventListener('mouseup', (event) => {
    event.target.style.color = "white";
});
let main = document.querySelector("body");
main.addEventListener('select', (event) => {
    alert(`You selected ${event}.`);
});

let image1 = document.querySelector(".img-content img");
image1.addEventListener('click', (event) => {
    event.target.style.display = "none";
    alert("You deleted the image!");
});

