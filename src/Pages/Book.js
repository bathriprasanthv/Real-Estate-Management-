import { useNavigate, useOutletContext } from "react-router-dom";
import "./../Styles/Book.css";

const Book = () => {
  const navigate = useNavigate();
  const { data, bookedItems } = useOutletContext();
  
  const lastBookedId = bookedItems[bookedItems.length - 1];
  const bookedProperty = data?.properties?.find(p => p.id === lastBookedId);

  return (
    <div className="bookContainer">
      <div className="bookCard">
        <h1>Booking Confirmed!</h1>
        {bookedProperty && (
          <div className="propertyDetails">
            <h3>{bookedProperty.title}</h3>
            <p> {bookedProperty.location}</p>
            <p> {bookedProperty.price}</p>
          </div>
        )}
        <p>Thank you for booking your property with us.</p>
        <p>Our team will contact you soon with further details.</p>
        <button 
          className="backButton" 
          onClick={() => navigate("/book")}
        >
          Back to Properties
        </button>
      </div>
    </div>
  );
};

export default Book;