import { useParams } from "react-router-dom";
import Word from "./Word";
import useFetch from "../hooks/useFetch";
export default function Day() {
    
   const day = useParams().day;
   

    const words = useFetch (`http://localhost:3001/words?day=${day}`);

    return (<>
        <h1>Day {day}</h1>
        {words.length === 0 && <span>Loading...</span>}
        <table className="tbl01">
            <thead style={{ marginBottm : "20px",} }>
                <tr>
                    <th>암기 여부</th>
                    <th>영어</th>
                    <th>한국어</th>
                    <th>뜻보기/삭제</th>
                </tr>
            </thead>
            <tbody>
                {words.map(word => (
                    <Word word={word} key={word.id}/>
                ))}
            </tbody>
        </table>
    </>
    );
} 