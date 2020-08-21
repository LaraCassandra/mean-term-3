import React, { useState } from 'react'
import '../Css/Login.css'

// MATERIAL UI
import { Paper } from '@material-ui/core'

export default function Login() {

    const [name, setName] = useState()
    const [password, setPassword] = useState()

    const submitForm = (e) => {

        // GET THE CREDENTIALS
        console.log("Submit")
        console.log("Username: ", name)
        console.log("Password: ", password)
        fetch("http://localhost:8000/api/login", {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiTGFyYSBDb29rIiwiaWQiOiIxMjM0NTU4ODU0NTIiLCJyb2xlIjoiU3R1ZGVudCIsImlhdCI6MTUxNjIzOTAyMn0.v8uSjtkpsZ1cy6gscvDnxW_AOcIFoHq2Um0w67NaDgs'
            },
        })
            .then(response => response.json())
            .then(data => console.log(data))
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
        <div className="body">

            <Paper className="form">
                <form >
                    <h1 className="h1">Welcome Back</h1>
                    <p className="p">Please sign into your account</p>

                    <label>Username:</label>
                    <input
                        type="text"
                        name="username"
                        value={name}
                        onChange={e => onNameChange(e)} />

                    <br />

                    <label>Password:</label>
                    <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={e => onPasswordChange(e)} />
                    <button className="button" onClick={() => submitForm()}>Submit</button>

                </form>



            </Paper>

        </div>
    )
}