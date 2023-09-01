import React, {useState} from 'react';
import './App.css';
import {OnOff} from "./onOff/OnOff";
import {Accordion} from "./accordion/Accordion";
import {Rating} from "./rating/Rating";

function App() {
    let [on, setOn] = useState(false)
    return (
        <div className="App">
            <OnOff setOn={setOn} on={on}/>
            <Accordion titleValue={'Learn React'}/>
            <Rating />
            <Rating/>
            <Rating />
            <Rating />
            <Rating />
            <Rating />
            {/*<OnOff on={false}/>*/}
            {/*<OnOff on={true}/>*/}
        </div>
    );
}

export default App;
