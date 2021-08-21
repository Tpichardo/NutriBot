import React from 'react'
import { Link } from "react-router-dom";
import "./Navbar.css";
import homeIcon from "../Assets/homeicon.png"
import resourcesIcon from "../Assets/resourcesicon.png"
import mymealsIcon from "../Assets/mymealsicon.png"


export default function Navbar({clearSearch}) {
    return (
       <nav>
<Link to="/">
    <img src={homeIcon} alt="home" onClick={clearSearch}/>
</Link>
<Link to="/resources"> <img src={resourcesIcon} alt="resources" onClick={clearSearch} /></Link>
<Link to="/mymeals"> <img src={mymealsIcon} alt="my meals" onClick={clearSearch}/></Link>
       </nav>
    )
}