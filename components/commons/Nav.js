import React from "react";
import {Link} from "react-router-dom";

export default function Nav(){
    return(
        <div>
            <nav>
            <ul>
                <li>
                    <Link to={"/"}>Home</Link>
                </li>
            </ul>
            </nav>
        </div>
    )
}