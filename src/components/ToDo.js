import React from "react";
import { actionCreators } from "../store";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

function ToDo({ text, onClick, id }) {
    return (
        <li>
            <Link to={`/${id}`}>{text}</Link>
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
