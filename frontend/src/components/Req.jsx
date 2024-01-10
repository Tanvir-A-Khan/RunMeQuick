import React, {useState, useEffect} from 'react'
import {onAuthStateChanged, signOut} from 'firebase/auth'
import {auth} from '../firebase'
import TheCompiler from './TheCompiler'
const Req = () => {
    const [authUser, setAuthUser] = useState(null)


    useEffect(()=>{
        const listen = onAuthStateChanged(auth, (user)=>{
            if(user){
                setAuthUser(user);
            }else{
                setAuthUser(null)
            }
        })

        return ()=>{
            listen();
        }
    },[])
    
   
    return (
        <div>
        {
            authUser ? <TheCompiler/> : <p>Signed out</p> 
        }
        </div>
    )
    
}

export default Req

