import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class NavItem extends Component {
  render() {
    const { item, children } = this.props
    return (
      <div>
        <li className={'nav__item'}>{item}</li>
        <ul className={'nav__item__children'}>
        {children && children.map(child => <NavItem item={child} />)}
        </ul>
      </div>
    )
  }
}

class Nav extends Component {
  render() {
    const { items, children } = this.props
    return (
      <nav className={'nav'}>
        {items.map(item => (
            <NavItem item={item}
                     children={children[item]}/>
          )
        )}
      </nav>
    )
  }
}
class App extends Component {
  render() {
    const categories = [
        'Animals'
      , 'Sports'
      , 'Beers'
    ]
    const children = {
        'Animals': ['Bears', 'Tigers', 'Snakes']
      , 'Sports': ['Climbing', 'Skating', 'Mountianeering']
      , 'Beers': ['Stout', 'Lager', 'Ale']
    }
    return (
      <div className="App">
        <Nav items={categories}
             children={children}/>
      </div>
    );
  }
}

export default App;
