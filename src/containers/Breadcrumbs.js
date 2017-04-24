import { connect } from 'react-redux'
import Breadcrumbs from '../components/Breadcrumbs'

const mapStateToProps = ({ channels, breadcrumbs }) => (
  { items: breadcrumbs.map(id => channels[id].name) }
)
const mapDispatchToProps = dispatch => ({})

const BreadcrumbsContainer = connect(mapStateToProps, mapDispatchToProps)(Breadcrumbs)
export default BreadcrumbsContainer
