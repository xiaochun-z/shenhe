import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'react-router';
import { Link } from 'react-router-dom';

export default function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <Link to='/24'>24点游戏</Link>
            </header>
        </div>
    );
}