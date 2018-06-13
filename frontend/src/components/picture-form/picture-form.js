import React from 'react';
import autoBind from '../../utils/index';
const D23_005 = 'File Required';

const fileToBase64String = (file) => {
  return new Promise((resolve, reject) => {
    // errors checks first
    if (!file) {
      return reject(new Error(D23_005));
    }
    // then load the file
    const fileReader = new FileReader();

    fileReader.addEventListener('load', () => resolve(fileReader.result));
    // missing code...
  });
};

class PictureForm extends React.Component {
  constructor(props) {
    super(props); // Old school OOP, parent class was referred to as super...


    this.emptyState = {
      preview: undefined, // base 64
      picture: '', // this will be a path
      description: '',
    };
    this.state = this.emptyState;

    autoBind.call(this, PictureForm);
  }
  // MEMBER FUNCTIONS
  handleChange(event) {
    const { type, value, files } = event.target;

    if (type === 'file') {
      fileToBase64String(file[0])
        .then(preview => this.setState({ preview }));

      this.setState({
        picture: files[0],
      });
    } else {
      this.setState({
        description: value,
      });
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onComplete(this.state)
  }


  // LIFECYCLE HOOKS
  render() {
    return (
      <form
        onSubmit={this.handleSubmit}
        className='picture-form'>
        <img src={this.state.preview}/>
        <label>Picture</label>
        <input
          type='file'
          name='photo'
          onChange={this.handleChange}
        />
        <label>Description</label>
        <input
          type='text'
          name='description'
          value={this.state.description}
          onChange={this.handleChange}
        />
        <button type='submit'> Upload a picture! </button>
      </form>
    );
  }
}

// PictureForm.propTypes = {
//   onComplete: PropTypes.func,
// };
export default PictureForm;
