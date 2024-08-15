import { useState } from "react";

export default function State() {
    //let name = "Jiwoo";
    const [name, setName] = useState("Jiwoo");

    //function changeName() {
        //name = name === "Jiwoo" ? "♥" : (name === "♥" ? "Heon" : "Jiwoo");
        
        //console.log(name);
        //document.getElementById("name").innerText =  name;
        //const newName = ;
        //setName(name === "Jiwoo" ? "♥" : (name === "♥" ? "Heon" : "Jiwoo"));
    //}
    return (
        <div>
            <h1>state, usestate 관련 설명 입니다.</h1>
            <h2>state</h2>
            <p id="name">{name}</p>
            {/* <button onClick={changeName}>LOVE</button> */}
            <button onClick={() => {
                setName(name === "Jiwoo" ? "♥" : (name === "♥" ? "Heon" : "Jiwoo"));
            }}>LOVE</button>
        </div>
    )
}