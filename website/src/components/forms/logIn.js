import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { getLoginFormData, checkUser, getLoginFormDataByEmail } from "../../DAL/api"
import Formcomp from "./formComp"

export default function LogIn() {

    const [form, setform] = useState(null)
    const [by,setby] = useState(true)

    useEffect(() => {
        async function getLoginData() {
            by ?
            setform(await getLoginFormData())
            :
            setform(await getLoginFormDataByEmail())
        }
        getLoginData()
    },[by])
    const navigate = useNavigate()

    async function setuser(allset){
        const user = await checkUser(by?{username:allset.username.value,password:allset.password.value}:{email:allset.email.value,password:allset.password.value})
        if(user.ok===true){
            navigate('/')
        }
        else{
            alert('user name or pasword is wrong') 
        }
    }
    return (
        <div className="text-center">
            <p className='AppForm' style={{cursor:'pointer'}} onClick={()=>{by?setby(false):setby(true)}}>click here to identify {by?'by email':'by username'}</p>
            {form?<Formcomp formTitle='Log In' onclick={setuser} 
            data={form} submitName='enter'></Formcomp>:<h1>Please Wait...</h1>}
            <button onClick={()=>navigate('/signup')} className="formbutton"><Link style={{color:'white',textShadow:'2px 2px 2px blue'}}>Sign up</Link></button>
        </div>
    )
}