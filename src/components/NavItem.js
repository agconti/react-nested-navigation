import React, { Component } from 'react'
import NavItemContainer from '../containers/NavItem'
import '../App.css'

export default class NavItem extends Component {
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
    const { channel: {name, children} } = this.props
    const className = hideChildren? 'nav__item__children': 'nav__item__children show'

    return (
      <div>
        <li className={'nav__item'}
            onClick={() => this.toggleChildren()}>{name}</li>
        <ul className={className}>
          {children && children.map(child => <NavItemContainer id={child} key={child} />)}
        </ul>
      </div>
    )
  }
}
