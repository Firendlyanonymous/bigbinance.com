import React from 'react';
import './style.css';
import logo from '../assets/logo.png';

export default function Home() {
    return (
        <div className="container">
            <img src={logo} alt="BigBinance Logo" className="logo" />
            <h1>Welcome to BigBinance</h1>
            <p className="tagline">Something Big is Coming to the Crypto Markets...</p>
            <div className="games">
                <button>🧠 Brain Blitz</button>
                <button>🎲 Lucky Ledger</button>
                <button>🕹️ Token Toss</button>
            </div>
        </div>
    );
}
