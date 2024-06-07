import React, { useState } from 'react';
import LoggedIn from './LoggedIn';
import LoggedOut from './LoggedOut';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="app">
      {isLoggedIn? (
        <LoggedIn onLogout={handleLogout} />
      ) : (
        <LoggedOut onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;