import React, {useState} from 'react';
import './App.css';
import Header from "./Header";
import Content from "./Contentmess";
import Test from "./Test";
import "../node_modules/font-awesome/css/font-awesome.css";
import Sale from "./Sale";
import Login from "./Login";
import JoinIn from "./Joinin";
import GroupCheckBox from "./Groupcheckbox";


function App() {
    const appStyle = {
        fontSize: '14px',
        fontFamily: 'Poppins',
        backgroundColor: '#E5E5E5',
    };
    return (
        <section className="App" style={appStyle}>
            <div className={"container"}>
                {/*<Header/>*/}
                {/*<Content/>*/}
                {/*<Test/>*/}
                <Login/>
                <Sale/>
                <JoinIn/>
                <GroupCheckBox/>
            </div>
        </section>
    );
}

export default App;