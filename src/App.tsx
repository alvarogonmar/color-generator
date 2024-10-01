import { useState } from "react";
import Values from "values.js";
import FormColor from "./components/FormColor";
import "./App.css";

function App() {
  const [list, setList] = useState(new Values("red").all(10));

  console.log(list);

  return (
    <div className="App">
      <FormColor setList={setList} />
    </div>
  );
}

export default App;
