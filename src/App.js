

// import { useState } from 'react';
import './App.css';
import RoutesComponents from './routes/Route';

import { UserProvider } from './context/UserContext'; // Adjust path as per your project

// import Login from './pages/Login';
// import Dashboard from './pages/Dashboard';
// import '../public/css/style.css';

function App() {

  return (
    <div className="App" >
      <UserProvider>
        <RoutesComponents />
      </UserProvider>
    </div>
  );
}

export default App;
