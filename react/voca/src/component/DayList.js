import useFetch from "../hooks/useFetch.js";
import DayLink from "./DayLink.js";
export default function DayList() {
    const days = useFetch("http://localhost:3001/days");

    if(days.length === 0){
        return <span>Loading...</span>
    }
    return(
    <> 
        <ul className="list_day">
            <DayLink/>
        </ul>
    </>)
}