import React from 'react';
import Text from '../inputs/text';
import Checkbox from '../inputs/checkbox';

export default class AddForm extends React.Component {
  data = {
    id: 1,
    name: 'Rick',
    status: 'Alive',
    species: 'Human',
    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
    created: '2017-11-04T18:48:46.250Z',
    gender: 'Male',
  };

  handleSubmit(e) {
    // console.log(this.state.nodes);
    // this.setState({
    //   nodes: [this.data],
    // });
    e.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        Name: <Text />
        Alive? <Checkbox />
        <input type="submit" />
        <Toggle />
      </form>
    );
  }
}

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // Эта привязка обязательна для работы `this` в колбэке.
    // this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'Включено' : 'Выключено'}
      </button>
    );
  }
}
