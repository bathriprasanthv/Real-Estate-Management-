import { useNavigate } from "react-router-dom";

const Estate = ({ rooms }) => {
  const navigate = useNavigate();

  return (
    <div className="estateContainer">
      {rooms?.map((room) => (
        <div
          key={room.id}
          className="estateCard"
          onClick={() => navigate("/book")}
        >
          <div className="estateImage">
            <img src={room.image} alt={room.title} />
          </div>

          <h3>{room.title}</h3>

          <p><strong>Type:</strong> {room.type}</p>
          <p><strong>Location:</strong> {room.location}</p>
          <p><strong>Size:</strong> {room.size}</p>

          <p className="estatePrice">
            <strong>Price:</strong> {room.price}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Estate;
