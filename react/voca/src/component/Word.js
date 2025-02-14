import React, { useState } from "react";
export default function Word({word : w}) {
    const [word, setWord] = useState(w);
    const [isShow, setIsShow] = useState(false);
    const [isDone, setIsDone] = useState(word.isDone);

    function toggleShow() {
        setIsShow(!isShow);
    }
    function toggleDone() {
        //setIsDone(!isDone);
        fetch(`http://localhost:3001/words/${word.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                ...word,
                isDone: !isDone,
            }),            
        })
        .then(res => {
            if(res.ok){
                setIsDone(!isDone)
            }
        })
    }

    function del(){
        if(window.confirm("삭제를 하시겠습니까?")){
            fetch(`http://localhost:3001/words/${word.id}`, {
                method: "DELETE",
            }).then(res => {
                if(res.ok){
                    alert("삭제가 완료되었습니다.");
                    setWord({id: 0});
                } else {
                    alert("삭제에 실패하였습니다.");
                }
            })
        };
        if(word.id === 0){
            return null;
        }
    }

    return(
        <tr className={isDone ? "off" : ""}>
            <td>
                <input type="checkbox" onChange={toggleDone} checked={isDone}/>
            </td>
            <td>
                {word.eng}
            </td>
            <td>
                {isShow && word.kor}
            </td>
            <td>
                <button onClick={toggleShow}>{isShow ? "숨기기" : "보기"}</button>
                <button className="btn_del" onClick={del}>삭제</button>
            </td>
        </tr>
    )
}