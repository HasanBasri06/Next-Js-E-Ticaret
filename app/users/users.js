"use client"

import { useEffect, useState } from "react"

function Users() {
    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .then(res => setUsers(res))
    }, [])

    return (
        <main>
            <ul className="ms-5">
                {
                    users.map(user => 
                        <li key={user.id} className="mt-5">
                            <div className="flex flex-col">
                                <div className="flex gap-5">
                                    <h3 className="text-gray-900">{user.name}</h3>
                                    <h4 className="text-blue-600">{user.username}</h4>
                                </div>
                                <span>{user.email}</span>
                                <span>{user.phone}</span>
                            </div>
                        </li>
                    )
                }
            </ul>
        </main>
    )
}

export default Users
