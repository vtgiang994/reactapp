import React, {useState} from 'react';
import './App.css';
import Header from "./Header";
import Content from "./Contentmess";
import Test from "./Test";
import "../node_modules/font-awesome/css/font-awesome.css";
import Login from "./Login";

function Pegasus() {
    return(
        <section id={'example'}>
            <div className={"logo"}></div>
            <div className={""}>
                <Login />
            </div>
            <div className={""}></div>
            <div className={""}></div>
        </section>
    );
}

function App() {
    const appStyle = {
        fontSize: '14px'
    };
    return (
        <section className="App" style={appStyle}>
            <div className={"container"}>
                <Header/>
                <Content/>
                <Test/>
                {/*<Test2/>*/}
            </div>
        </section>

    );
}

export default App;