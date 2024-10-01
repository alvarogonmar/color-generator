const SingleColor = ({ hexColor }) => {
  return (
    <div className="single-card">
      <div className="content">
        <p>{hexColor}</p>
      </div>
    </div>
  );
};
export default SingleColor;
