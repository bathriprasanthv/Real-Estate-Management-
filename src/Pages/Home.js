import { useNavigate } from "react-router-dom";
import "./../Styles/Home.css";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="homeContainer">
      <div className="heroSection">
        <h1>Discover Your Perfect Home</h1>
        <p>Transform your property dreams into reality with our premium collection of apartments, villas, and land. Experience seamless booking with trusted listings and expert guidance every step of the way.</p>
        <button onClick={() => navigate("/book")}>Start Your Journey</button>
      </div>
      
      <div className="homeAbout">
        <h2>Why Choose Our Platform?</h2>
        <p>We revolutionize property searching with authentic listings, detailed insights, and transparent pricing. Our platform connects you with premium properties across prime locations, ensuring your investment journey is smooth, secure, and successful. From first-time buyers to seasoned investors, we make property ownership accessible to everyone.</p>
      </div>
      
      <div className="categorySection">
        <h2>Explore Premium Properties</h2>
        <div className="categoryCards">
          <div className="categoryCard" onClick={() => navigate("/book?type=Apartment")}>Modern Apartments</div>
          <div className="categoryCard" onClick={() => navigate("/book?type=Villa")}>Luxury Villas</div>
          <div className="categoryCard" onClick={() => navigate("/book?type=Land")}>Prime Land</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
