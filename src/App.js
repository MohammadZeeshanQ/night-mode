// Library
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

//  Routes
import LandingPage from './Routes/Landing/Index.js';
import NavBar from './Components/NavBar.js';
import Footer from './Components/Footer.js';

function App() {

  const [nightMode, setNightMode] = useState(true);

  useEffect(() => {

  }, [nightMode]);

  return (
    <BrowserRouter>
      <NavBar
        nightMode={nightMode}
        setNightMode={setNightMode}
      />
      <Switch>
        <Route exact path='/'>
          <LandingPage
            nightMode={nightMode}
          />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
