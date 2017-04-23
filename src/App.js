import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class NavItem extends Component {
  constructor(props){
    super(props)
    this.state = {
      hideChildren: true
    }
  }
  toggleChildren() {
    const { hideChildren } = this.state
    this.setState({hideChildren: !hideChildren})
  }
  render() {
    const { hideChildren } = this.state
    const { item, children } = this.props

    const className = hideChildren? 'nav__item__children': 'nav__item__children show'
    return (
      <div>
        <li className={'nav__item'}
            onClick={() => this.toggleChildren()}>{item}</li>
        <ul className={className}>
          {children && children.map(child => (
              <NavItem item={child}
                       children={children[child]}/>
            )
          )}
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
             children={children} />
      </div>
    );
  }
}

export default App;
