import { useOutletContext, useNavigate, useSearchParams } from "react-router-dom";
import "./../Styles/Product.css";

const Product = () => {
  const { data, bookedItems, setBookedItems } = useOutletContext();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const typeFilter = searchParams.get('type');
  
  if (!data) {
    return <div className="productContainer"><h1>Loading...</h1></div>;
  }
  
  const allProperties = data.properties || [];
  const properties = typeFilter 
    ? allProperties.filter(property => property.type === typeFilter)
    : allProperties;

  const handleBookNow = (propertyId) => {
    setBookedItems([...bookedItems, propertyId]);
    navigate('/booking');
  };

  return (
    <div className="productContainer">
      <h1>{typeFilter ? `${typeFilter} Properties` : 'Available Properties'}</h1>
      
      <div className="propertiesGrid">
        {properties.map((property) => (
          <div key={property.id} className="propertyCard">
            <img src={property.image} alt={property.title} />
            <div className="propertyInfo">
              <h3>{property.title}</h3>
              <p className="type">{property.type}</p>
              <p className="location">{property.location}</p>
              <p className="price">{property.price}</p>
              <p className="size">{property.size}</p>
              {bookedItems.includes(property.id) ? (
                <p className="status sold">Sold</p>
              ) : (
                <button 
                  className="bookButton" 
                  onClick={() => handleBookNow(property.id)}
                >
                  Book Now
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
