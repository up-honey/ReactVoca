import { useRef } from "react";
import useFetch from "../hooks/useFetch"
import { useNavigate } from "react-router-dom";
import { useState } from "react";
export default function CreateWord() {
    const days = useFetch("http://localhost:3001/days");
    const history = useNavigate();
    const [isLoading, setLoading] = useState(false);

    function onSubmit(e) {
        e.preventDefault();
        if(!isLoading){
            setLoading(true);
            fetch(`http://localhost:3001/words/`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    //current를 이용해서 현재정보 알 수 있고
                    //value를 이용해서 값을 알 수 있따.
                    day: dayRef.current.value,
                    eng: engRef.current.value,
                    kor: korRef.current.value,
                    isDone: false,
                }),            
            })
            .then(res => {
                if(res.ok){
                    alert("생성이 완료되었습니다.");
                    history(`/day/${dayRef.current.value}`);
                    setLoading(false);
                }
            })
        }    
    }

    //useRef 인풋창의 값을 얻을 떄
    //돔에 접근할 수 있게 해줌, 스크롤 위치, 포커스 줄 떄 사용
    const engRef = useRef(null);
    const korRef = useRef(null);
    const dayRef = useRef(null);

    return(
        <form onSubmit={onSubmit}>
            <div className="input_area">
                <label>Eng</label>
                <input type="text" placeholder="computer" ref={engRef}/>
            </div>
            <div className="input_area">
                <label>Kor</label>
                <input type="text" placeholder="컴퓨터" ref={korRef}/>
            </div>
            <div className="input_area">
                <label>Day</label>
                <select ref={dayRef}>
                    {days.map(day => (
                        <option key={day.id} value={day.day}>
                            {day.day}
                        </option>
                    ))}
                </select>
            </div>
            <button style={{opacity: isLoading ? 0.3 : 1,}}>{isLoading ? "Saving..." : "저장"}</button>
        </form>
    )

}