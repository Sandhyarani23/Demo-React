import React from "react"
import Body from "./components/Body"
import Contact from "./components/contact"
import Greeting from "./components/class"
import ReactDOM from "react-dom"

export default function App(){
    const [isImp,setisImp]=React.useState("Yes")
    function handleClick(){
        setisImp("No")
    }
    return(
        <div className="state">
            
            <Greeting name="cse4" />
            <Body />
            <div className="statevalue" onClick={handleClick}>
                <h1>{isImp}</h1>
            </div>
            <Contact name="Jivana" phone="123456789"/>
        </div>
    )
}
