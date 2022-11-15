import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { validate } from "../../common/validation"
import { getLoginFormData, checkUser, saveUser } from "../../DAL/api"
import Formcomp from "./formComp"

export default function LogIn() {
    const [data, setdata] = useState(null)

    useEffect(() => {
        async function getLoginData() {
            setdata(await getLoginFormData())
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
            navigate('/home')
        }
        else{
            alert('user name or pasword is wrong') 
        }
    }
    return (
        <div className="text-center">
            {data?
            <Formcomp formTitle='Log In' onclick={setuser} 
            data={data} submitName='enter'></Formcomp>:<h1>please wait..</h1>}
            <span><Link to={'/home'}>Enter as guest</Link> OR <Link to={'/signUp'}>Sign up</Link></span>
        </div>
    )
}