import React from 'react';

const Filters = ({setStatus}) => {
  const statusHandler = (e) => {
    setStatus(e.target.value);
  }
  return (
    <>
        <div className="select">
            <select onChange={statusHandler} name="todos" className="filter-todos">
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="uncompleted">Uncompleted</option>
            </select>
            <div className="dato">
              <h2> They are x todos</h2>
            </div>

        </div>
    </>
  );
}

export default Filters;