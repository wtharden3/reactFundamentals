import React, {useState} from 'react';

const State = () => {
  return(
    <div className="main">
      <div className="mainDiv">
        <ul>
          <dt>useState is Unique to the Functional Components</dt>
          <dd>Class components have a seperate means of using and changing state.</dd>

          <dt>useState Uses Array Destructuring</dt>
          <dd>useState proves a state variable and setState function</dd>

          <dt>useState is a Hook</dt>
          <dd>useState is a Hook baked into React</dd>

          <dt>Triggers Re-renders</dt>
          <dd>Like the props changes, changing the state of a component re-renders the whole component.</dd>
        </ul>
      </div>
    </div>
  )
}

export default State;