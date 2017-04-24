import React, { Component } from 'react'
import NavItemContainer from '../containers/NavItem'
import '../App.css'

export default class NavItem extends Component {
  render() {
    const { isActive, onClick, channel, channel: {name, children} } = this.props
    const className = isActive?  'nav__item__children show': 'nav__item__children'

    return (
      <div>
        <li className={'nav__item'}
            onClick={() => onClick(channel)}>{name}</li>
        <ul className={className}>
          {children && children.map(child => <NavItemContainer id={child} key={child} />)}
        </ul>
      </div>
    )
  }
}
