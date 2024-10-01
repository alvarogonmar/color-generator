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
      <div className="design-container">
        <h1>Color Palette Generator</h1>
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

        <footer>
          <h2>Connect with me:</h2>
          <div className="social-icons">
            <a
              href="https://github.com/alvarogonmar"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/25231.png" alt="GitHub" />
            </a>
            <a
              href="https://www.linkedin.com/in/%C3%A1lvaro-gonz%C3%A1lez-40ba12320/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/linkedin_logo.png" alt="LinkedIn" />
            </a>
          </div>
          <h2 className="links">
            <a
              href="https://github.com/alvarogonmar"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <span> | </span>
            <a
              href="https://www.linkedin.com/in/%C3%A1lvaro-gonz%C3%A1lez-40ba12320/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </h2>
        </footer>
      </div>
    </div>
  );
};

export default FormColor;
