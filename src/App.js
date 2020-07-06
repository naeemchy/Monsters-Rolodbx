import React, { Component } from 'react';

import { CardList } from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box/search-box.component';

import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = { 
      monsters: [],
      searchField: ''
    };

    this.hendelChange = this.hendelChange.bind(this);

  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ monsters:users }));
  }

  hendelChange = (e) => {
    this.setState({searchField: e.target.value} )
  }

  render() {
    const { monsters,searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      );
    return (
      <div className="App">
        <h1>Monsters Rolodbx</h1>
        <SearchBox
        placeholder="Search Monster" 
        hendelChange = {this.hendelChange}
        />
        <CardList monsters={filteredMonsters}/>
      </div>
      
    );
  }
}
export default App;
