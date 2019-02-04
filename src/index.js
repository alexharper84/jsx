// import the react and reactDom libraries

import React from 'react';
import ReactDOM from 'react-dom';

// create a react component

const App = () => {
  return <div>
  <label class="label" for="name">Enter name:</label>
  <input id="name" type="text"/>
  <button style={{ backgroundColor: 'blue', color: 'red' }}>Submit</button>
</div>
};


// take the react component and shot it on the screen
ReactDOM.render(
  <App />,
  document.querySelector('#root')
)
