import { useState } from "react";
import Values from "values.js";

import "./App.css";

function App() {
  const [list, setlist] = useState(new Values("red").all(10));

  console.log(list);

  return (
    <div className="App">
      <h2>test component</h2>
    </div>
  );
}

export default App;
