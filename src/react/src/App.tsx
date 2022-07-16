import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [routeData, setRouteData] = useState<string>();

  useEffect(()=> {
    // fetch("http://localhost:3001" + window.location.pathname)
    fetch(window.location.href)
      .then((res: Response) => {
        console.log(window.location.pathname);
        return res.text();
      })
      .then((data: string) => {
        setRouteData(data);
      });
  })


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
        <p>{routeData}</p>
    </div>
  );
}

export default App;
