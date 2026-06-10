// Task 5: Previous Search Tracker 
// Requirements: Create a search input.
//  Store current input using useState(). 
//  Store previous search value using useRef().
//   Display: Current Search Previous Search Example: Current Search: React Previous Search: JavaScript 
//   Topics: useState, useRef, useEffect

import React, { useEffect, useRef, useState } from 'react'

const PrecSearchTracker = () => {

  const [search, setSearch] = useState("")
  const previousSearch = useRef("")

  useEffect(() => {
    previousSearch.current = search
  }, [search])

  return (
    <div>

      <h2>Search Tracker</h2>

      <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Type something..."/>

      <div>
        <p><b>Current Search:</b> {search}</p>
        <p><b>Previous Search:</b> {previousSearch.current}</p>
      </div>

    </div>
  )
}

export default PrecSearchTracker