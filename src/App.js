import React, {useState} from 'react';
import './App.css';
import Header from "./Header";
import Content from "./Contentmess";
import Test from "./Test";
import "../node_modules/font-awesome/css/font-awesome.css";
import Page from "./Page"

function App() {
    const appStyle = {
        backgroundColor: '#E5E5E5',
    };
    return (
        <section className="App" style={appStyle}>
            <div className={"container"}>
                <Page/>
            </div>
        </section>
    );
}

export default App;