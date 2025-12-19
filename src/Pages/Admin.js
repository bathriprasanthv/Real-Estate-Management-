import { useOutletContext, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./../Styles/Admin.css";

const Admin = () => {
  const { data, bookedItems } = useOutletContext();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('dashboard');

  const properties = data?.properties || [];
  const bookedProperties = properties.filter(p => bookedItems.includes(p.id));
  
  const stats = {
    totalProperties: properties.length,
    totalBookings: bookedItems.length,
    availableProperties: properties.length - bookedItems.length,
    apartments: properties.filter(p => p.type === 'Apartment').length,
    villas: properties.filter(p => p.type === 'Villa').length,
    land: properties.filter(p => p.type === 'Land').length
  };

  const handleLogout = () => {
    localStorage.removeItem('auth');
    navigate('/login');
  };

  return (
    <div className="adminContainer">
      <div className="adminHeader">
        <h1>Admin Dashboard</h1>
        <button className="logoutBtn" onClick={handleLogout}>Logout</button>
      </div>

      <div className="adminTabs">
        <button 
          className={activeTab === 'dashboard' ? 'tab active' : 'tab'}
          onClick={() => setActiveTab('dashboard')}
        >
          Dashboard
        </button>
        <button 
          className={activeTab === 'properties' ? 'tab active' : 'tab'}
          onClick={() => setActiveTab('properties')}
        >
          Properties
        </button>
        <button 
          className={activeTab === 'bookings' ? 'tab active' : 'tab'}
          onClick={() => setActiveTab('bookings')}
        >
          Bookings
        </button>
      </div>

      {activeTab === 'dashboard' && (
        <div className="dashboardContent">
          <div className="statsGrid">
            <div className="statCard">
              <h3>{stats.totalProperties}</h3>
              <p>Total Properties</p>
            </div>
            <div className="statCard">
              <h3>{stats.totalBookings}</h3>
              <p>Total Bookings</p>
            </div>
            <div className="statCard">
              <h3>{stats.availableProperties}</h3>
              <p>Available Properties</p>
            </div>
            <div className="statCard">
              <h3>{stats.apartments}</h3>
              <p>Apartments</p>
            </div>
            <div className="statCard">
              <h3>{stats.villas}</h3>
              <p>Villas</p>
            </div>
            <div className="statCard">
              <h3>{stats.land}</h3>
              <p>Land Plots</p>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'properties' && (
        <div className="propertiesContent">
          <h2>Property Management</h2>
          <div className="propertiesTable">
            {properties.map(property => (
              <div key={property.id} className="propertyRow">
                <div className="propertyInfo">
                  <h4>{property.title}</h4>
                  <p>{property.type} • {property.location} • {property.size}</p>
                  <p className="price">{property.price}</p>
                </div>
                <div className="propertyStatus">
                  {bookedItems.includes(property.id) ? (
                    <span className="status booked">Booked</span>
                  ) : (
                    <span className="status available">Available</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'bookings' && (
        <div className="bookingsContent">
          <h2>Booking Management</h2>
          {bookedProperties.length === 0 ? (
            <p className="noBookings">No bookings yet.</p>
          ) : (
            <div className="bookingsTable">
              {bookedProperties.map(property => (
                <div key={property.id} className="bookingRow">
                  <div className="bookingInfo">
                    <h4>{property.title}</h4>
                    <p>{property.type} • {property.location}</p>
                    <p className="price">{property.price}</p>
                  </div>
                  <div className="bookingDate">
                    <span>Booking ID: #{property.id}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Admin;
