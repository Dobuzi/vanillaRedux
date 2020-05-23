import { createStore } from "redux";

const add = document.querySelector(".add");
const minus = document.querySelector(".minus");
const number = document.querySelector(".number");

const countModifier = (count = 0, action) => {
    if (action.type === "ADD") {
        return count + 1;
    } else if (action.type === "MINUS") {
        return count - 1;
    } else {
        return count;
    }
};

const handleAdd = () => {
    countStore.dispatch({ type: "ADD" });
};

const handleMinus = () => {
    countStore.dispatch({ type: "MINUS" });
};

const countStore = createStore(countModifier);

const onChange = () => {
    number.innerText = countStore.getState();
};

countStore.subscribe(onChange);

function init () {
    add.addEventListener("click", handleAdd);
    minus.addEventListener("click", handleMinus);
}

init();