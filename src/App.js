import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_ca_desc&per_page=100&page=1&sparkline=false`
      )
      .then((response) => {
        setCoins(response.data);
      });
  }, []);

  return (
    <div className="App">
      <h1>Api </h1>
    </div>
  );
}

export default App;
