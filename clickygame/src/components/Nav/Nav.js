import React from "react";
import "./Nav.css";

const Nav = props => {

    const messageClass = () => {
        if (props.message === "You guessed correctly!") {
            return "correct";
        } else if (props.message === "You guessed incorrectly!") {
            return "incorrect";
        }
    }

    return (
        <nav className="navbar">
            <ul>
                <li className="brand">
                    {props.brand}
                </li>
                <li id="message" className={messageClass()}>
                    {props.message}
                </li>
                <li>
                    <span className="score"> Score: {props.score}</span> <span className="scoreSplit">|</span> <span className="score">Top Score: {props.hiScore}</span>
                </li>
            </ul>
        </nav>
    )

}

export default Nav;