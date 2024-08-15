import { useState } from "react";
import UserName from './UserName';
export default function Props({ age }) {
    const [name, setName] = useState("Jiwoo");
    //const [age, setAge] = useState(props.age);
    const msg = age > 19 ? "성인입니다." : "미성년자입니다.";
    return (
        <div>
            <h2>props</h2>
            <p id="name">{name}({age}) : {msg}</p>
             {/* <button onClick={changeName}>LOVE</button> */}
            <UserName name={name} />
            <button onClick={() => {
                setName(name === "Jiwoo" ? "♥" : (name === "♥" ? "Heon" : "Jiwoo"));
                //setAge(age + 1);
            }}
            >LOVE</button>
        </div>
    )
}