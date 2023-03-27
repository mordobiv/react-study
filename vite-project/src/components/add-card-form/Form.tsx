import React from 'react';
import Text from '../inputs/text';
import Checkbox from '../inputs/checkbox';
import Option from '../inputs/select';
import Radio from '../inputs/radio';
import DatePicker from '../inputs/date';
import File from '../inputs/file';

export default class AddForm extends React.Component {
  cardId = 0;
  isFormValid = true;

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.name = React.createRef();
    this.isAlive = React.createRef();
    this.species = React.createRef();
    this.gender = React.createRef();
    this.date = React.createRef();
    this.file = React.createRef();

    this.state = {
      errors: {
        text: false,
        species: false,
        gender: false,
        date: false,
        file: false,
      },
    };
  }

  handleSubmit(e: SubmitEvent) {
    e.preventDefault();

    const name = this.name.current.value;
    this.proceedError('text', name.length < 3);

    const status = this.isAlive.current.checked ? 'Alive' : 'Dead';

    const species = this.species.current.value.toUpperCase();
    this.proceedError('species', !species);

    const genderSelections = this.gender.current.childNodes;
    let finalGender = '';
    for (let gender of genderSelections) {
      if (gender.checked) {
        finalGender = gender.value.toUpperCase();
        break;
      }
    }
    this.proceedError('gender', !finalGender);

    const date = this.date.current.value;
    this.proceedError('date', !date);

    const image = this.file.current;
    this.proceedError('file', !image.value);

    if (this.isFormValid) {
      const data = {
        id: this.cardId++,
        name,
        status,
        species,
        image: URL.createObjectURL(image.files[0]),
        created: date,
        // created: '2017-11-04T18:48:46.250Z',
        gender: finalGender,
      };
      this.props.onFormSubmit(data);
    } else console.log('----------------');
    // } else alert('nope');
    this.isFormValid = true;
  }

  proceedError(key: string, isError: boolean) {
    this.setState((prevState) => ({ errors: { ...prevState.errors, [key]: isError } }));
    if (isError) this.isFormValid = false;
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {/* Name: <input type="text" ref={this.name} /> */}
        <Text label="Name" refValue={this.name} isError={this.state.errors.text} />
        <Checkbox label="Is alive?" refValue={this.isAlive} />
        <Option label="Specie" refValue={this.species} isError={this.state.errors.species} />
        <Radio label="Gender" refValue={this.gender} isError={this.state.errors.gender} />
        <DatePicker label="Edition Date" refValue={this.date} isError={this.state.errors.date} />
        <File label="Image" refValue={this.file} isError={this.state.errors.file} />
        <input type="submit" />
      </form>
    );
  }
}
