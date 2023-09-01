import React, {useState} from 'react';

type AccordionPropsType = {
    titleValue: string
}

type AccordionTitlePropsType = {
    title: string
    setCollapsed: (value: boolean)=>void
    collapsed: boolean
}
export const Accordion: React.FC<AccordionPropsType> = (props) => {

    let [collapsed, setCollapsed] = useState(true)

    return (
        <div>
            <AccordionTitle title={props.titleValue} setCollapsed={setCollapsed} collapsed={collapsed}/>
            {collapsed && <AccordionBody/>}
        </div>
    );
};

const AccordionTitle:React.FC<AccordionTitlePropsType> = (props) =>{
    return(
        <h1 onClick={()=>{props.setCollapsed(!props.collapsed)}}>{props.title}</h1>
    )
}

const AccordionBody = () => {
    return (
        <ul>
            <li>one</li>
            <li>two</li>
            <li>three</li>
            <li>four</li>
            <li>five</li>
        </ul>
    )
}
