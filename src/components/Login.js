import React, { useState } from "react"
import {userAtom} from "../Atom"
import { useSetRecoilState } from "recoil"
import URL from "../Constants"

export default function Login(){

    const setUser = useSetRecoilState(userAtom),
        [login, setLogin] = useState({userName: null, password: null, passwordConfirm: null, email: null})

    const handleChange = (e) => {
        
        setLogin({...login, [e.target.name]: e.target.value})
        
    }

    const handleLogin = (e) => {
        e.preventDefault()
      
        let obj = {email: login.email, password: login.password}
        // debugger
        fetch(`${URL}/login`, {
            method: "POST",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(obj)
        }).then(resp => resp.json())
        .then(data => console.log(data))
        
    }
    return (
        <div>
            <form onSubmit={handleLogin}>
                <input onChange={handleChange} type="text" name="userName" value={login.userName} placeholder="Enter User Name"/>
                <input onChange={handleChange} type="text" name="email" value={login.email} placeholder="Enter Email"/>
                <input onChange={handleChange} type="text" name="password" value={login.password} placeholder="Enter Password"/>
                <input onChange={handleChange} type="text" name="passwordConfirm" value={login.passwordConfirm} placeholder="Confirm Password"/>
                <input type="submit" value="Submit"/>
            </form>
        </div>
    )
}