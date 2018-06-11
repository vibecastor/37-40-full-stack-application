import React from 'react';
import { WELCOME } from '../../text';

class Dashboard extends React.Component {
  render() {
    return (
      <div className='dashboard'>
        <h1> { WELCOME } </h1>
        <h2> Thanks for logging in! </h2>
      </div>
    );
  }
}

export default Dashboard;
