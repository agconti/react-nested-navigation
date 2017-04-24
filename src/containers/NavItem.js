import { connect } from 'react-redux'
import NavItem from '../components/NavItem'
import { toggleBreadcrumb } from '../reducers'

const mapStateToProps = ({ channels, breadcrumbs }, { id }) => (
  { channel: channels[id]
  , isActive: breadcrumbs.includes(id)
  }
)

const mapDispatchToProps = dispatch => (
  { onClick: channel => dispatch(toggleBreadcrumb(channel))}
)

const NavItemContainer = connect(mapStateToProps, mapDispatchToProps)(NavItem)
export default NavItemContainer
