import React, {useState} from 'react';
import './App.css';
import Header from "./Header";
import Content from "./Contentmess";
import Test from "./Test";
import "../node_modules/font-awesome/css/font-awesome.css";



const appStyle = {
  fontSize: '14px'
};
function App() {
    return (
        <section className="App" style={appStyle}>
            <div className={"container"}>
                <Header />
                <Content />
                {/*<Test />*/}
            </div>

        </section>

    );
}


export default App;