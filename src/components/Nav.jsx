import { NavLink } from "react-router-dom";

export default function Nav() {
    return (
        <nav>
            <NavLink to="/">Game Overview</NavLink>
            <NavLink to="/create">Add Game</NavLink>
        </nav>
    );
}
