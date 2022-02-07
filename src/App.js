
import './App.css';
import { useState } from 'react';
import { Main } from './components/Main';
import { Landing } from './components/Landing';

function App() {
  const [loggedIn, setLoggedIn] = useState(false)

  return (
    <div>
      {loggedIn? <Main/> : <Landing/>}
    </div>
  );
}

export default App;
