import React, { useContext } from 'react'
import { Usercontext } from '../Context/usercontext.js'

function Profile() {
    const user = useContext(Usercontext)

    return (
        <div>
            <h2>Profile</h2>
            {user.name1 ? (
                <p>Welcome, <strong>{user.name1}</strong>!</p>
            ) : (
                <p>No user logged in.</p>
            )}
        </div>
    )
}

export default Profile
