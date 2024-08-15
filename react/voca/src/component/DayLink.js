import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch.js";
export default function DayLink() {
    const days = useFetch("http://localhost:3001/days");
    return(
        <>
            {days.map(day => (
                <li key={day.id}>
                    <Link to={`/day/${day.day}`}>Day {day.day}</Link>
                </li>
            ))}
        </>
    )
}