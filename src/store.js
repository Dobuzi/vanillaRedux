import { createStore } from "redux";

const ADD = "ADD";
const DELETE = "DELETE";

const addToDo = (text) => {
    return {
        type: ADD,
        text,
    };
};

const deleteToDo = (id) => {
    return {
        type: DELETE,
        id,
    };
};

const reducer = (state = [], action) => {
    let newState = [];
    if (localStorage.getItem("toDos")) {
        state = JSON.parse(localStorage.getItem("toDos"));
    } else {
        state = [];
    }
    switch (action.type) {
        case ADD:
            newState = [{ text: action.text, id: Date.now() }, ...state];
            localStorage.setItem("toDos", JSON.stringify(newState));
            return newState;
        case DELETE:
            newState = state.filter((toDo) => toDo.id !== action.id);
            localStorage.setItem("toDos", JSON.stringify(newState));
            return newState;
        default:
            return state;
    }
};

const store = createStore(reducer);

export const actionCreators = {
    addToDo,
    deleteToDo,
};

export default store;
