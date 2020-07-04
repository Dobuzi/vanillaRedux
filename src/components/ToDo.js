import React from "react";
import { actionCreators } from "../store";
import { connect } from "react-redux";

function ToDo({ text, onClick }) {
    return (
        <li>
            {text}
            <button onClick={onClick}>DEL</button>
        </li>
    );
}

function mapDispatchToProps(dispatch, ownProps) {
    return {
        onClick: () => dispatch(actionCreators.deleteToDo(ownProps.id)),
    };
}

export default connect(null, mapDispatchToProps)(ToDo);
