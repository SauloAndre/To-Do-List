import React from 'react'

const Filter = ( { filter, setFilter, setSort } ) => {
  return (
    <div className='filter'>
        <h2>Filter</h2>
        <div className="filter-options">
            <div>
                <p>Status: </p>
                <select value={filter} onChange={(e) => 
                    setFilter(e.target.value)}>
                    <option value="All">All</option>
                    <option value="Completed">Completed</option>
                    <option value="Incompleted">Incompleted</option>
                </select>
            </div>
            <div>
                <p>Alphabetical order: </p>
                <button onClick={() => setSort("Rising")}>Rising</button>
                <button onClick={() => setSort("Downward")}>Downward</button>
            </div>
        </div>
    </div>
  )
}

export default Filter