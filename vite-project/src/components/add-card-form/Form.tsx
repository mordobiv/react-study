import React from 'react';
import Text from '../inputs/text';
import Checkbox from '../inputs/checkbox';
import Option from '../inputs/select';
import Radio from '../inputs/radio';
import DatePicker from '../inputs/date';
import File from '../inputs/file';
import NodeType from '../../types/node';
import ErrorType from '../../types/validation-error';

export default class AddForm extends React.Component<
  { onFormSubmit: (data: NodeType) => void },
  ErrorType
> {
  name: React.RefObject<HTMLInputElement>;
  isAlive: React.RefObject<HTMLInputElement>;
  species: React.RefObject<HTMLSelectElement>;
  gender: React.RefObject<HTMLInputElement>;
  date: React.RefObject<HTMLInputElement>;
  file: React.RefObject<HTMLInputElement>;

  cardId = 0;
  isFormValid = true;

  constructor(props: { onFormSubmit: (data: NodeType) => void }) {
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

  handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const name = this.name.current ? this.name.current.value : '';
    this.proceedError('text', name.length < 3);

    const status = this.isAlive.current ? (this.isAlive.current.checked ? 'Alive' : 'Dead') : '';

    const species = this.species.current ? this.species.current.value.toUpperCase() : '';
    this.proceedError('species', !species);

    const genderSelections = this.gender.current ? this.gender.current.childNodes : '';
    let finalGender = '';
    if (genderSelections) {
      for (const gender of genderSelections) {
        if ((gender as HTMLInputElement).checked) {
          finalGender = (gender as HTMLInputElement).value.toUpperCase();
          break;
        }
      }
    }
    this.proceedError('gender', !finalGender);

    const date = this.date.current ? this.date.current.value : '';
    this.proceedError('date', !date);

    const image = this.file.current;
    this.proceedError('file', !(image || { value: false }).value);

    if (this.isFormValid && image && image.files) {
      const data = {
        id: this.cardId++,
        name,
        status,
        species,
        image: URL.createObjectURL(image.files[0]),
        created: date,
        gender: finalGender,
      };
      this.props.onFormSubmit(data);
      this.resetForm();
      alert('Success, all the data has been saved!');
    }
    this.isFormValid = true;
  }

  resetForm() {
    if (this.name.current) this.name.current.value = '';
    if (this.isAlive.current) this.isAlive.current.checked = false;
    if (this.species.current) this.species.current.value = '';
    if (this.date.current) this.date.current.value = '';
    if (this.file.current) this.file.current.value = '';
    const genderSelections = this.gender.current ? this.gender.current.childNodes : '';
    if (genderSelections) {
      for (const gender of genderSelections) {
        if ((gender as HTMLInputElement).checked) {
          (gender as HTMLInputElement).checked = false;
        }
      }
    }
  }

  proceedError(key: string, isError: boolean) {
    this.setState((prevState) => ({ errors: { ...prevState.errors, [key]: isError } }));
    if (isError) this.isFormValid = false;
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="form-add">
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
