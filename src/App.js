import React, {useState} from 'react';
import './App.css';
import PrimarySearchAppBar from "./Learning";
import ContentMessage from "./content";
import IconLogo from './Iconlogo';
import ButtonSearch from "./Search";

function App() {

    return (
        <section className="App">
            {/*<PrimarySearchAppBar/>*/}
            {/*<ContentMessage/>*/}
            <IconLogo/>
            <ButtonSearch />
        </section>

    );
}


export default App;