import React, { useState, useEffect } from "react";

import ProgressBar from "react-table-fast";

const App = () => {
  const [completed, setCompleted] = useState(0);

  useEffect(() => {
    setInterval(() => setCompleted(Math.floor(Math.random() * 100) + 1), 2000);
  }, []);

  return (
    <div className="App">
      <ProgressBar bgcolor={"#6a1b9a"} completed={completed} />
    </div>
  );
};

export default App;
