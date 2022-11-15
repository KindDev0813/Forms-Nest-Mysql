import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getUser, logOut } from "../../DAL/api";

export function Home() {
    const navigate = useNavigate()

    const [user,setuser]= useState(getUser())
    
    function OutOrSign(){
        user? logOut() : navigate('/signUp')
        setuser(getUser())
    }

    return (
        <>
            <h1>welcome {user?.firstName || <span className="App-link" onClick={() => navigate('/')}>log in first</span>}</h1>
            <button onClick={OutOrSign}>{user ? 'log out' : 'sign up'}</button>
        </>
    )
}