import "./Card.css";
function Card({ imageSrc, name, place }) {
    return (
        <div className="card-wrapper">
            <img src={imageSrc} alt="" />  
            <p className="name">Name: {name}</p>          
            <p className="place">place: {place}</p>          
        </div>
    )
};
export default Card;