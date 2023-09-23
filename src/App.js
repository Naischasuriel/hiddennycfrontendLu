import React from 'react';
import useGoogleAuth from './components/useGoogleAuth';
import Map from './components/Map'


function App() {
  const { user, profile, login, logOut } = useGoogleAuth();

  return (
    <div>
      {profile ? (
        <div>
          <h2>Welcome to the home page</h2>
          <h3>User Logged in</h3>
          <p>Name: {profile.name}</p>
            <Map />
          <button onClick={logOut}>Log out</button>
        </div>
      ) : (
        <button onClick={() => login()}>Sign in with Google 🚀</button>
      )}
    </div>
  );
}


export default App;
