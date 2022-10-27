import BasicButton from "../atoms/buttons/BasicButtons";

export default function Card(props) {
  return (
    <div className="basic-card-container">
      <h4>{props.subTitle}</h4>
      <p>{props.text}</p>
      <BasicButton
        variant="contained"
        color="success"
        value={props.buttonValue}
      />
    </div>
  );
}
