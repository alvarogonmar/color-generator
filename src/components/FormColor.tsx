import { useState } from "react";

const FormColor = () => {
  const [color, setColor] = useState("blue");

  const handleGenerator = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(color);
  };

  return (
    <form onSubmit={handleGenerator}>
      <input
        type="text"
        placeholder="#fff"
        onChange={(e) => setColor(e.target.value)}
      />
      <input type="submit" value="Generate" />
    </form>
  );
};

export default FormColor;
