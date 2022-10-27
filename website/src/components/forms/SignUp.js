import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { getSignUpFormData, setUser } from "../../DAL/api"
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
        if(await setUser(data)){
            navigate('/')
        }
    }

    return (
        <div className="text-center">
            {form ? <Formcomp formTitle='Sign Up' onclick={setuser} 
            data={form} submitName='Submit'></Formcomp>
             : <h1>Please Wait...</h1>}
             <button onClick={()=> navigate('/')} className='formbutton white'>log in</button>
        </div>
    )
}