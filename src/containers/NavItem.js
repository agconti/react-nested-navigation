import { connect } from 'react-redux'
import NavItem from '../components/NavItem'

const mapStateToProps = ({ channels }, { id }) => (
  { channel: channels[id] }
)

const mapDispatchToProps = dispatch => {
  return {
  }
}

const NavItemContainer = connect(mapStateToProps, mapDispatchToProps)(NavItem)
export default NavItemContainer
