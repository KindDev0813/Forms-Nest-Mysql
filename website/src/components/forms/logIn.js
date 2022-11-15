import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { validate } from "../../common/validation"
import { saveUser } from "../../DAL/api"
import { getLoginFormData, checkUser } from "../../DAL/api"
import Formcomp from "./formComp"

export default function LogIn() {

    const [data, setdata] = useState({form:null})

    useEffect(() => {
        async function getLoginData() {
            const forms = await getLoginFormData()
            setdata({form:forms})
        }
        getLoginData()
    },[])
    const navigate = useNavigate()

    async function setuser(allset){
        const user = await checkUser(validate(allset.usernameOrEmail.value,{email:true},"usernameOrEmail")? 
        {username:allset.usernameOrEmail.value,password:allset.password.value}
        :{email:allset.usernameOrEmail.value,password:allset.password.value}
        )
        if(user.ok===true){
            const userData= await user.json()
            saveUser(userData)
            navigate('/signUp')
        }
        else{
            alert('user name or pasword is wrong') 
        }
    }
    return (
        <div className="text-center">
            {data.form?
            <Formcomp formTitle='Log In' onclick={setuser} 
            data={data.form} submitName='enter'></Formcomp>:<h1>please wait..</h1>}
            <button onClick={()=>navigate('/signup')} className="formbutton">
            <Link style={{color:'white',textShadow:'2px 2px 2px blue'}}>Sign up</Link></button>
        </div>
    )
}