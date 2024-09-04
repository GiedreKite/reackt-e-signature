

import React, { useState }  from "react";
import { Title } from "./Title";





 export default function Esignature() {
    const [data, setData] = useState ('Begemotas')
    const [text, setText] = useState ('')


    function handleDateInput(params) {
        setData(params.target.value)

    }
    
    function handleTextInput(params) {
        setText(params.target.value)

    }
    return (
    <div>
        <Title text={text}/>
        <Title text={data}/>

        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. At iure saepe recusandae, exercitationem voluptatem id molestias beatae incidunt assumenda dolore eum corporis, qui reprehenderit ratione nisi provident praesentium laborum voluptatibus.</p>
        
        <input type="date" value={data} onChange={handleDateInput}/>
        <input type="text" value={text} onChange={handleTextInput}/>
        
        </div>)
}

