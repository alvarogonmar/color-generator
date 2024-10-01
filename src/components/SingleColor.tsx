import { useState } from "react";

interface SingleColorProps {
  hexColor: string;
}

const SingleColor: React.FC<SingleColorProps> = ({ hexColor }) => {
  const [copy, setCopy] = useState(false);

  const handleCopy = (color) => () => {
    const colorNew = `#${color}`;
    navigator.clipboard.writeText(colorNew);
    setCopy(true);
  };

  return (
    <div className="single-card" style={{ backgroundColor: `#${hexColor}` }}>
      <div className="content">
        <p>#{hexColor}</p>
        <button onClick={handleCopy(hexColor)}>
          <img src={"/clipTransparent.png"} alt="copy" />
        </button>
      </div>
      {copy ? <p className="copy-alert">Copied to clipboard</p> : null}
    </div>
  );
};
export default SingleColor;
