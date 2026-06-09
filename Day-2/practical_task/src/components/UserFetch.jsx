import React, { useEffect, useState } from 'react'

const UserFetch = () => {
  const [users, setUsers] = useState([])
  const [search, setSearch] = useState("")

  useEffect(() => {
    fetchUsers()
  }, [])

  const fetchUsers = async () => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users")
      const data = await response.json()
      setUsers(data)
    } 
    catch (error) {
      console.log("Error:", error)
    }
  }

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div>
      <h1>User List</h1>

      <input type="text" placeholder="Search User" value={search} onChange={(e) => setSearch(e.target.value)}/>

      {filteredUsers.map((user) => (
        <div key={user.id}>
          <p>{user.name}</p>
        </div>
      ))}
    </div>
  )
}

export default UserFetch