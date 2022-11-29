import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { disconnect } from "../../features/user/userSlice";

export function Home() {
    const userData = useSelector((state)=>state.user.user);
    const dispatch = useDispatch();
    const navigate = useNavigate()
    
    function OutOrSign(){
        userData? dispatch(disconnect()) : navigate('/signup')
    }

    return (
        <>
            <h1>welcome {userData?.firstName || <span className="App-link" onClick={() => navigate('/')}>log in first</span>}</h1>
            <button onClick={OutOrSign}>
                {userData?.firstName ? 'log out' : 'sign up'}</button>
        </>
        
    )
}