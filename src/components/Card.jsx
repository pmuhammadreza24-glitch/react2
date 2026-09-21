

function Card(props) {
  return (
    <div className="card">
      <img src={props.picture} width="150" />

      <h2>{props.name}</h2>

      <p>Class: {props.studentClass}</p>

      <p>Grade: {props.grade}</p>
    </div>
  );
}

export default Card;