import React, { useState } from 'react'
import { Usercontext } from './usercontext'

function Usercontextprovider({ children }) {
    const [name1, setname11] = useState("")
    const [password1, setpassword11] = useState("")

    return (
        <Usercontext.Provider value={{ name1, setname11, password1, setpassword11 }}>
            {children}
        </Usercontext.Provider>
    )
}

export default Usercontextprovider