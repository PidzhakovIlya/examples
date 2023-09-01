import React from 'react';

type StarPropsType = {
    setValueStar: ( value: number )=> void
    value:  1 | 2 | 3 | 4 | 5
    selected: boolean
}
export const Star:React.FC<StarPropsType> = (props) => {
    console.log(props.value)
        if(!props.selected){
            return <span onClick={()=>{props.setValueStar(props.value) }}>Star </span>
        }else{
            return <span onClick={()=>{
                props.setValueStar(props.value-1 ) }}><b>Star </b></span>
        }


};

