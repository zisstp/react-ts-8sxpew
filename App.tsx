import * as React from 'react';
import './style.css';
import { fetchWeather } from './api/fetchWeather';

function App() {
  const [query, setQuery] = useState('');

  const search = async (e) => {
    const data = await fetchWeather(query);

    console.log(data);
  };

  return (
    <div className="main-container">
      <input
        type="text"
        className="search"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyPress={search}
      />
    </div>
  );
}

export default App;
