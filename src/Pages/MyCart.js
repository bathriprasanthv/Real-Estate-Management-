import { useOutletContext } from "react-router-dom";
import "./../Styles/MyCart.css";

const MyCart = () => {
  const { data, bookedItems } = useOutletContext();
  
  const bookedProperties = data?.properties?.filter(property => 
    bookedItems.includes(property.id)
  ) || [];

  return (
    <div className="cartContainer">
      <h1>My Cart</h1>
      
      {bookedProperties.length === 0 ? (
        <div className="emptyCart">
          <p>Your cart is empty</p>
          <p>Book some properties to see them here!</p>
        </div>
      ) : (
        <div className="cartGrid">
          {bookedProperties.map((property) => (
            <div key={property.id} className="cartCard">
              <img src={property.image} alt={property.title} />
              <div className="cartInfo">
                <h3>{property.title}</h3>
                <p className="type">{property.type}</p>
                <p className="location">{property.location}</p>
                <p className="price">{property.price}</p>
                <p className="size">{property.size}</p>
                <p className="status">Booked</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyCart;