import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class NavItem extends Component {
  render() {
    const { item } = this.props
    return <li>{item}</li>
  }
}

class Nav extends Component {
  render() {
    const { items } = this.props
    return (
      <nav>
        {items.map(item => <NavItem item={item} />)}
      </nav>
    )
  }
}
class App extends Component {
  render() {
    const categories = [
      , 'Animals'
      , 'Sports'
      , 'Beers'
    ]
    const children = [
      , ['Bears', 'Tigers', 'Snakes']
      , ['Climbing', 'Skating', 'Mountianeering']
      , ['Stout', 'Lager', 'Ale']
    ]
    return (
      <div className="App">
        <Nav items={categories}/>
      </div>
    );
  }
}

export default App;
