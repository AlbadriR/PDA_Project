import React, { useEffect } from "react";

function App() {
  useEffect(() => {
    fetch("/")
      .then((response) => response.text())
      .then((message) => {
        console.log("message");
      });
  }, []);

  return (
    <div>
      <h1>Hello from React!</h1>
    </div>
  );
}

export default App;
