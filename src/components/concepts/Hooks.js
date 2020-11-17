import React, { useState, useEffect } from 'react';

const Hooks = () => {
  const [query, setQuery] = useState('');
  const [results, setResutls] = useState({});

  return (
    <div className="main">
      <div className="mainDiv">
        <input
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="enter your sw charater number"
        />
      </div>
    </div>
  );
};

export default Hooks;
