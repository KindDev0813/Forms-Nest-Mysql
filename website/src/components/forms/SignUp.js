import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { getSignUpFormData, newUser } from "../../DAL/api"
import Formcomp from "./formComp"

export default function SignUp() {
    const [form, setform] = useState(null)

    useEffect(() => {
        async function getSigninData() {
            setform(await getSignUpFormData())
        }

        getSigninData()
    }, [])

    const navigate= useNavigate()

    async function setuser(allset){
        let data= {}
        for(const det in allset){
            data[allset[det].serverName]=allset[det].value
        }
        if(await newUser(data)){
            navigate('/')
        }
    }

    return (
        <div className="text-center">
            {form ? <Formcomp formTitle='Sign Up' onclick={setuser} 
            data={form} submitName='Submit'></Formcomp>
            : <h1>Please Wait...</h1>}
            <span><Link to={'/home'}>Enter as guest</Link> OR <Link to={'/'}>Log In</Link></span>
        </div>
    )
}