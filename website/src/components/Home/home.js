import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getUser } from "../../DAL/api";

export function Home(){
    const navigate = useNavigate()
    return (
        <h1>welcome {getUser()?.firstName || <span className="App-link" onClick={()=>navigate('/')}>log in first</span>}</h1>
    )
}