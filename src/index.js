// import the react and reactDom libraries

import React from "react";
import ReactDOM from "react-dom";

// create a react component

const App = () => {
  const buttonText = { text: "Click me" };
  const labelText = "Enter Name:";

  return (
    <div>
      <label className="label" htmlFor="name">
        {labelText}
      </label>
      <input id="name" type="text" />
      <button style={{ backgroundColor: "blue", color: "red" }}>
        {buttonText.text}
      </button>
    </div>
  );
};

// take the react component and shot it on the screen
ReactDOM.render(<App />, document.querySelector("#root"));
