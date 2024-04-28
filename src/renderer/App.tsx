import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Header from './Components/Header';
import Content from './Components/Content';
import './App.css';

function Hello() {
  const [networkStatus, setNetworkStatus] = useState(
    navigator.onLine ? 'online' : 'offline',
  );

  const alertOnlineStatus = () => {
    setNetworkStatus(navigator.onLine ? 'online' : 'offline');
  };

  window.addEventListener('online', alertOnlineStatus);
  window.addEventListener('offline', alertOnlineStatus);
  return (
    <div>
      <Header networkStatus={networkStatus} />
      <Content networkStatus={networkStatus} />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
      </Routes>
    </Router>
  );
}
