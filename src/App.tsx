import { useState } from "react";
import Values from "values.js";
import FormColor from "./components/FormColor";

import "./App.css";

function App() {
  const [list, setlist] = useState(new Values("red").all(10));

  console.log(list);

  return (
    <div className="App">
      <h2>test component</h2>
      <FormColor></FormColor>
    </div>
  );
}

export default App;
