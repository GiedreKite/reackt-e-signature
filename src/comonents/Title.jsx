import React  from "react";

export function Title( {text} ) {

    return ( <h1> {!text ?  "Your signature" : text }</h1>)

    
}