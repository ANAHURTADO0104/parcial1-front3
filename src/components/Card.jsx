import "./Card.css";
const Card = (props) => {
  return (
    <div id="card">
      Hola, Gracias por informarnos que tu libro favorito es {props.libro} del
      autor {props.autor} donde su reseña es: {props.resena}
    </div>
  );
};
export default Card;
