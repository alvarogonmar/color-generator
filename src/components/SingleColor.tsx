interface SingleColorProps {
  hexColor: string;
}

const SingleColor: React.FC<SingleColorProps> = ({ hexColor }) => {
  return (
    <div className="single-card" style={{ backgroundColor: `#${hexColor}` }}>
      <div className="content">
        <p>#{hexColor}</p>
      </div>
    </div>
  );
};
export default SingleColor;
