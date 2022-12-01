import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';
import LogIn from "./components/forms/logIn";
import SignUp from "./components/forms/SignUp";
import { useEffect } from "react"
import {Route, Routes} from 'react-router-dom';
import { Home } from "./components/Home/home";
import { useDispatch } from "react-redux";
import { changeUser } from "./features/user/userSlice";
import { getUser } from "./DAL/api.js";

function App() {
  const dispatch = useDispatch();

  useEffect(()=>{async function changeTheUser(){
    const data= await getUser()
    dispatch(changeUser(await data.json()))
  };
  changeTheUser();}, [])

  return (
    <section>
      <main>
        <Routes>
          <Route path='/' element={<LogIn></LogIn>}/>
          <Route path='/signup' element={<SignUp></SignUp>}/>
          <Route path='/home' element={<Home></Home>}/>
        </Routes>
      </main>
    </section>
    );
  }
  
  export default App;