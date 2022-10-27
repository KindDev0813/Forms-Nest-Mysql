import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';
import LogIn from "./components/forms/logIn";
import SignUp from "./components/forms/SignUp";
import {Route, Routes} from 'react-router-dom';

function App() {

  return (
    <section>
      <main>
        <Routes>
          <Route path='/' element={<LogIn></LogIn>}/>
          <Route path='/signUp' element={<SignUp></SignUp>}/>
          {/* <Route path='/home' element={}/> */}
        </Routes>
      </main>
    </section>
    );
  }
  
  export default App;