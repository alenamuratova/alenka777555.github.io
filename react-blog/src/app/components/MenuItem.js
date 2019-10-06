import React from "react";
import {Link} from "react-router";

const MenuItem = props => {
    return(
        <li className={'nav-item active'}>
            <Link className="nav-link" to={props.href}>
            {props.children}
            </Link>
        </li>
    );
}

export default MenuItem;
