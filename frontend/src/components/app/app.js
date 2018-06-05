import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import AuthRedirect from '../auth-redirect/auth-redirect';
import Dashboard from '../dashboard/dashboard';
import AuthLanding from '../auth-landing/auth-landing';

class App extends React.Component {
  render() {
    return (
      <div className='app'>
      <BrowserRouter>
        <div>
          <Route path='*' component={AuthRedirect}/>
          <Route path='/' component={AuthLanding}/>
          <Route path='/signup' component={AuthLanding}/>
          <Route path='/login' component={AuthLanding}/>
          <Route path='/dashboard' component={Dashboard}/>
        </div>
      </BrowserRouter>
      </div>
    );
  }
}

export default App;
