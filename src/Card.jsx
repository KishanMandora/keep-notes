const Card = ({ title, task, bgClr }) => {
  return (
    <div className="card" style={{ backgroundColor: bgClr }}>
      <h2> {title} </h2>
      <span> {task} </span>
    </div>
  );
};

export default Card;
