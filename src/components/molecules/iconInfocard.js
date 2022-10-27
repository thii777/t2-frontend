export default function Card(props) {
  return (
    <div className="basic-card-container" className="display-flex">
      <div className="icon-advantage">{props.icon}</div>
      <div>
        <h4>{props.subTitle}</h4>
        <p>{props.text}</p>
      </div>
    </div>
  );
}
