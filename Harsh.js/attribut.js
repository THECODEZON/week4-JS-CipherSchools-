// get and set attribute
const link = document.querySelector("a")
console.log(link.getAttribute("href"));
link.setAttribute("href","https://codprog.com");
console.log(link.getAttribute("href"));

const inputElement = document.querySelector(".form-todo input");
console.log(inputElement.getAttribute("type"));