import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "./Common/Header";
import "./App.css";

function App() {
  const [data, setData] = useState(null);
  const [bookedItems, setBookedItems] = useState([]);

  useEffect(() => {
    const fetchResponse = async () => {
      try {
        const response = await fetch("/real-estate.json");
        if (response.ok) {
          const da = await response.json();
          setData(da);
        }
      } catch (err) {
        console.error("Failed to fetch data:", err);
      }
    };
    fetchResponse();
  }, []);

  return (
    <div className="App">
      <Header />
      <Outlet context={{ data, bookedItems, setBookedItems }} />
    </div>
  );
}

export default App;
