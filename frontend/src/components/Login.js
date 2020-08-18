import React, { useState } from 'react'

export default function Login() {

    const [name, setName] = useState()
    const [password, setPassword] = useState()

    const submitForm = (e) => {

        // GET THE CREDENTIALS
        console.log("Submit")
        console.log("Username: ", name)
        console.log("Password: ", password)
        fetch("http://localhost:8000/login")
            .then(data => {
                console.log(data)
            })
    }

    // MAKE REQUEST TO SERVER 

    const onNameChange = (e) => {
        console.log(e.target.value)
        setName(e.target.value)
    }

    const onPasswordChange = (e) => {
        console.log(e.target.value)
        setPassword(e.target.value)
    }


    return (

        <div>
            <form>
                <Label>Username:</Label>
                <input type="text" name="username" value={name} onChange={e => setName(e.target.value)}></input>

                <Label>Password:</Label>
                <input type="password" name="password" value={password} onChange={e => setPassword(e.target.value)}></input>


            </form>

            <button onClick={() => submitForm()}>Submit</button>

        </div>

    )
}