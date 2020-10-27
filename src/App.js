import logo from './logo.svg';
import React, {useState} from 'react';
import './App.css';
import PrimarySearchAppBar from "./Learning";
import DisableElevation from './content';


function App() {

    return (
        <div className="App">
            <PrimarySearchAppBar />
            <DisableElevation />
        </div>

    );
}


export default App;