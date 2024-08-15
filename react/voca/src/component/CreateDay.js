import { useNavigate } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { useState } from "react";
import DaysList from "./DaysList";

export default function CreateDay() {
    const days = useFetch("http://localhost:3001/days");
    const history = useNavigate();
    const [isLoading, setLoading] = useState(false);

    function addDay() { 
        if(!isLoading){
        setLoading(true);
            fetch(`http://localhost:3001/days/`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    //current를 이용해서 현재정보 알 수 있고
                    //value를 이용해서 값을 알 수 있따.
                    day: days.length + 1,
                }),            
            })
            .then(res => {
                if(res.ok){
                    alert("생성이 완료되었습니다.");
                    history(`/`);
                    setLoading(false);
                }
            })
        }
    }

    return (
        <>
            <div style={{textAlign: "center",}}>
                <h3>현재 일수 : {days.length}일</h3>
                <button onClick={addDay}>Day add</button>
            </div>
            <table className="tbl01">
            <thead style={{ marginBottm : "20px",} }>
                <tr>
                    <th>Day</th>
                    <th>삭제</th>
                </tr>
            </thead>
            <tbody>
                {days.map(day => (
                    <DaysList day={day} key={day.id}/>
                ))}
            </tbody>
        </table>
        </>
    )    
    
}