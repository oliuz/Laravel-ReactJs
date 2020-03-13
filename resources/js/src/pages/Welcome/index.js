import React from "react";
import logo from "../../assets/sabre.svg";
import astronaut from "../../assets/astronaut.svg";

export default function Welcome() {
    return (
        <div className="App">
            <img className="logo" src={logo} alt="Logo" />
            <h2>Bem vindo ao React!</h2>
            <a href="/dashboard" rel="noopener noreferrer">
                Entrar
            </a>
            <img className="astronaut" src={astronaut} alt="Astronaut" />
        </div>
    );
}
