import { Link } from "react-router-dom";
export default function Header() {
    return <div className="header">
        <h1>
            <Link to="/">토익영단어(고급)</Link>
        </h1>
        <div className="menu">
            <Link to="/create_word" className="link">단어추가</Link>
            <Link to="/create_day" className="link">Day추가/삭제</Link>
        </div>
    </div>
}