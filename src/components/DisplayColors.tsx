import SingleColor from "./SingleColor";

interface Color {
  hex: string;
}

interface DisplayColorsProps {
  list: Color[];
}

const DisplayColors: React.FC<DisplayColorsProps> = ({ list }) => {
  return (
    <div className="colors-box">
      {list.map((color, index) => (
        <SingleColor key={index} hexColor={color.hex} />
      ))}
    </div>
  );
};
export default DisplayColors;
