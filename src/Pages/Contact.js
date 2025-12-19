import "./../Styles/Contact.css";

const Contact = () => {
  return (
    <div className="contactContainer">
      <div className="contactContent">
        <h1>Contact Us</h1>
        
        <div className="contactIntro">
          <p>
            Have questions about properties, pricing, or booking?
            We are here to help you at every step of your property search.
          </p>
          <p>
            If you need more details about any listing or face issues while booking, feel free to reach out to us using the contact information below.
          </p>
        </div>

        <div className="contactCards">
          <div className="contactCard">
            <h3>Email Support</h3>
            <p className="contactDetail">support@realestate.com</p>
            <p className="contactNote">Send us your queries anytime and we will respond as soon as possible.</p>
          </div>

          <div className="contactCard">
            <h3>Phone Support</h3>
            <p className="contactDetail">+91 98765 43210</p>
            <p className="contactNote">Available Monday to Saturday, 9:00 AM – 6:00 PM</p>
          </div>

          <div className="contactCard">
            <h3>Office Location</h3>
            <p className="contactDetail">Chennai, Tamil Nadu, India</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
