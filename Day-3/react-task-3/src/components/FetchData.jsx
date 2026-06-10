// Task 3: User Data Fetch and Display API: https://jsonplaceholder.typicode.com/users 
// Requirements: Fetch data using useEffect().
//  Show loading message while fetching.
//   Display Name, Email, and Company Name.
//    Show error message if API fails.
//     Topics: useEffect, Fetch API, Conditional Rendering

import React, { useEffect, useState } from 'react'

const FetchData = () => {

  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  const fetchUser = async () => {
    try {
      setLoading(true)
      setError("")

      const response = await fetch("https://jsonplaceholder.typicode.com/users")

      if (!response.ok) {
        throw new Error("API Error")
      }

      const dataVal = await response.json()
      setData(dataVal)

    } catch (error) {
      setError("Failed to fetch data")
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchUser()
  }, [])

  return (
    <>
      <h2>User Data</h2>

      {loading && <p>Loading...</p>}

      {error && <p style={{ color: "red" }}>{error}</p>}

      {!loading && !error && (
        <table border="1">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Company</th>
            </tr>
          </thead>

          <tbody>
            {data.map((val) => (
              <tr key={val.id}>
                <td>{val.name}</td>
                <td>{val.email}</td>
                <td>{val.company?.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  )
}

export default FetchData