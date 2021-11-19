import React from "react";
import './Color.css';
import { useParams, NavLink } from "react-router-dom";

const Color = () => {
    const { color } = useParams();
    return (
        <div className="Color" style={{backgroundColor: color}}>
            <h2>This is {color} isn't it pretty.</h2>
            <NavLink exact={"true"} to={`/color`}>
                <h2>Go Back</h2>
            </NavLink>
        </div>
    )
}

export default Color;