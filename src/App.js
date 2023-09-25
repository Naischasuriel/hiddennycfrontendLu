import React from 'react';
import useGoogleAuth from './components/useGoogleAuth';
import Map from './components/Map'
import {useState} from 'react'
import './App.css';


function App() {
  const { profile, login, logOut } = useGoogleAuth();
  const [show,setShow]=useState(true)

  return (
    <div className="container">
      {profile ? (
 <div>
<button onClick={() => setShow(!show)}><img src="https://i.pinimg.com/736x/e6/3d/da/e63dda8f2d323e96490f761c461b4e23.jpg" alt="Google Icon" style={{ width: '40px', height: '40px'} }/>
</button>
{
  show ? (
    <div className="profile-section">
      <h4>
        <h3>User Logged in</h3>
        <p>Name: {profile.name}</p>
        <p>Email:{profile.email}</p>
      </h4>
      <button onClick={logOut}>Log out</button>
    </div>
  ) : null
}
<div className="map-section">

           <Map />
           </div>
        </div>
      ) : (
        <button onClick={() => login()}>Sign in with Google 🚀</button>
      )}
    </div>
  );
}

export default App;
