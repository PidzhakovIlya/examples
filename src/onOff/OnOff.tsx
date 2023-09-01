// import React, {useState} from 'react';

type PropsType = {
    // on: boolean
    setOn: (value: boolean) => void
    on: boolean
}
export const OnOff = (props: PropsType) => {


    const onStyled = {
        width: " 100px",
        height: "40px",
        borderRadius: '5px',
        display: "inline-block",
        verticalAlign: 'center',
        border: "1px solid black",

        backgroundColor: props.on ? 'green' : 'white'
    }
    const offStyled = {
        width: " 100px",
        height: "40px",
        borderRadius: '5px',
        display: "inline-block",
        marginLeft: "5px",
        border: "1px solid black",
        backgroundColor: props.on ? 'white' : 'red'
    }
    const indicateStyled = {
        width: '10px',
        height: '10px',
        borderRadius: '50%',
        border: '1px solid green',
        display: "inline-block",
        marginLeft: "10px",
        backgroundColor: props.on ? 'green' : 'red'

    }

    return (
        <div>
            <div style={onStyled} onClick={() => {
                props.setOn(true)
            }}>On
            </div>
            <div style={offStyled} onClick={() => {
                props.setOn(false)
            }}>Off
            </div>
            <div style={indicateStyled}></div>
        </div>
    );
};

