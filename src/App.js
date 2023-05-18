import { useEffect, useState } from "react"
import './App.css'

function App() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(false)

  const URL = "https://app.zipcodebase.com/api/v1/search?apikey=955ea840-f4f0-11ed-9283-3ff108ecb606&codes=10006"

  
  useEffect(() => {
    setLoading(true)
    fetch(URL)
      .then(response => response.json())
      .then(json => setUsers(json.results["10006"]))
      .finally(() => {
        setLoading(false)
      })
  }, [])
  return (
    <div className="App">
      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          <h1>Zip Code</h1>
          <table border={1}>
            <tr>
              <th>S.no</th>
              <th>Postal Code</th>
              <th>Country Code</th>
              <th>City</th>
              <th>State</th>
              <th>City Enteries</th>
              <th>State Enteries</th>
            </tr>
            {users.map((user, index) => (
              <tr key={index}>
                <td className="sno">{index}</td>
                <td>{user.postal_code}</td>
                <td>{user.country_code}</td>
                <td>{user.city}</td>
                <td>{user.state}</td>
                <td>{user.city_en}</td>
                <td>{user.state_en}</td>
              </tr>
            ))}
          </table>
        </>
      )}
    </div>
  )
}

export default App