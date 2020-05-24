import { createStore } from "redux";

const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

const addToDo = text => {
    return {
        type: ADD_TODO,
        text
    };
};

const deleteToDo = id => {
    return {
        type: DELETE_TODO,
        id
    };
};

const reducer = (state = [], action) => {
    switch (action.type) {
        case ADD_TODO:
            const newToDoObj = { text: action.text, id: Date.now() };
            return [newToDoObj, ...state];
        case DELETE_TODO:
            const cleanedToDos = state.filter(toDo => toDo.id !== action.id);
            return cleanedToDos;
        default: return state;
    }
};

const store = createStore(reducer);

const dispatchAddToDo = text => {
    store.dispatch(addToDo(text));
}

const dispatchDeleteToDo = id => {
    store.dispatch(deleteToDo(id));
}

const handleDeleteBtn = e => {
    dispatchDeleteToDo(parseInt(e.target.parentNode.id));
}

const paintToDos = () => {
    const toDos = store.getState();
    ul.innerHTML = "";
    toDos.forEach(toDo => {
        const li = document.createElement("li");
        const btn = document.createElement("button");
        btn.innerText = "DEL";
        btn.addEventListener("click", handleDeleteBtn);
        li.id = toDo.id;
        li.innerText = toDo.text;
        li.appendChild(btn);
        ul.appendChild(li);
    })
}

const onSubmit = e => {
    e.preventDefault();
    const toDo = input.value;
    input.value = "";
    dispatchAddToDo(toDo);
};

function init () {
    store.subscribe(paintToDos);
    form.addEventListener("submit", onSubmit);
}

init();