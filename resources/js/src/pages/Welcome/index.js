import React from "react";
import logo from "../../assets/sabre.svg";

export default function Welcome() {
    return (
        <div className="App">
            <img className="logo" src={logo} alt="Logo" />
            <h2>Bem vindo ao React no Laravel!</h2>
            <a href="/dashboard" rel="noopener noreferrer">
                Entrar
            </a>
        </div>
    );
}
