import React, { Component } from 'react';

class TechList extends Component {
  state = {
    newTech: '',
    techs: [
      'Node.js',
      'ReactJs',
      'React Native'
    ]
  };

  handleInputChange = e => {
    this.setState({ newTech: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault() // para não atualizar a página quando clicar no botão

    this.setState({
      techs: [...this.state.techs, this.state.newTech],
      newTech: ''
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>{this.state.newTech}</h1>
        <ul>
          {this.state.techs.map(tech => <li key={tech}>{tech}</li>)}
        </ul>
        <input
          type="text"
          onChange={this.handleInputChange}
          value={this.state.newTech}
        />
        <button type="submit">Enviar</button>
      </form>
    )
  }
}

export default TechList;