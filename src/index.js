const add = document.querySelector(".add");
const minus = document.querySelector(".minus");
const number = document.querySelector(".number")

let count = 0;

const updateText = () => {
    number.innerText = count;
}

const handleAdd = () => {
    count++;
    updateText();
}

const handleMinus = () => {
    count--;
    updateText();
}

function init () {
    updateText();
    add.addEventListener("click", handleAdd);
    minus.addEventListener("click", handleMinus);
}

init();