import React from 'react';
import { WELCOME } from '../../text';
import PictureForm from '../picture-form/picture-form';
import * as clientPictureActions from './../actions/client-pictures';

class Dashboard extends React.Component {
  render() {
    return (
      <div className='dashboard'>
        <h1> { WELCOME } </h1>
        <h2> Thanks for logging in! </h2>
        <PictureForm/>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  doCreatePicture : picture => dispatch(clientPictureActions.createRequest(picture)),
});

export default connect(null, mapDispatchToProps)(Dashboard);
