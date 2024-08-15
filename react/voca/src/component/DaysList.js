//import useFetch from "../hooks/useFetch";
import { useState } from "react";

export default function DaysList({ day: d, word: w }) {
    const [day, setDay] = useState(d);
    const [word, setWord] = useState(w);

    function del(day){
        if (window.confirm("삭제를 하시겠습니까?")) {
            fetch(`http://localhost:3001/days/${day.id}`, {
                method: "DELETE",
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.success) {
                        // day 상태 업데이트
                        alert("삭제가 완료되었습니다.");
                        // word.day가 정의되어 있다면 추가로 삭제
                        if (word && word.id) {
                            fetch(`http://localhost:3001/words/${word.id}`, {
                                method: "DELETE",
                            }).then(res => {
                                if(res.ok){
                                    setWord({id: 0});
                                };
                            })
                        };
                        setDay({id : 0});
                    } else {
                        alert("삭제에 실패하였습니다.");
                    }
                })
                .catch((error) => {
                    console.error("삭제 중 에러 발생:", error);
                });
        }
        if(day.id === 0){
            return null;
        }
    }


    return (
        <>
            <tr>
                <td>
                    <div>Day {day.day}</div>
                </td>
                <td>
                    <button className="btn_del" onClick={() => del(day)}>삭제</button>
                </td>
            </tr>
        </>
    )   

}