import React, { useContext, useState } from 'react'
import { Usercontext } from '../Context/usercontext.js'

function Login() {
    const [name, setname] = useState("")
    const [password, setpassword] = useState("")
    const user = useContext(Usercontext)

    const handleSubmit = (e) => {
        e.preventDefault()
        user.setname11(name)
        user.setpassword11(password)
    }

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="name"
                    value={name}
                    onChange={(e) => setname(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="password"
                    value={password}
                    onChange={(e) => setpassword(e.target.value)}
                />
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default Login