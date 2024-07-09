import React from 'react';
import Profile from './components/Profile';


function App() {
  return (
    <div className="container mx-auto">
      <Profile
        name="Rita Correia"
        location="London"
        followers={80000}
        likes={803000}
        photos={1400}
      />
    </div>
  );
}

export default App;
