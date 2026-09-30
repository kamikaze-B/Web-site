const button = document.getElementById("followButton");
button.addEventListener("click", function() {
    if (button.textContent === "Follow") {
        button.textContent = "Following";
        button.style.backgroundColor = "#969752"; // Change background color when following
    } else {
        button.textContent = "Follow";
        button.style.backgroundColor = "#cacd7d"; // Reset background color when not following
    }
}); 
function introduce(name, age) {
    console.log(`My name is ${name}, i am ${age} years old!`);
}
introduce("Kamila", 17);

function multiply(a, b) {
    return a * b;
}
const result = multiply(6, 7);
console.log(result);