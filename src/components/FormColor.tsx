import { useState } from "react";
import Values from "values.js";

interface FormColorProps {
  setList: React.Dispatch<React.SetStateAction<any>>; // Cambia 'any' por el tipo adecuado, si es necesario
}
const FormColor: React.FC<FormColorProps> = ({ setList }) => {
  const [color, setColor] = useState("blue");
  const [error, setError] = useState(false);

  const handleGenerator = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      let colors = new Values(color).all(5);
      setList(colors);
      setError(false);
    } catch (error) {
      console.log(error);
      setError(true);
    }
    console.log(color);
  };

  return (
    <div className="form-color">
      <h1>Color Palete Generator</h1>
      <h2>By Alvaro Gonzalez</h2>
      <form onSubmit={handleGenerator}>
        <input
          type="text"
          placeholder="#fff"
          onChange={(e) => setColor(e.target.value)}
        />
        <input type="submit" value="Generate" />
      </form>
      {error ? <p className="error">That color doesn't exist</p> : null}
    </div>
  );
};

export default FormColor;
