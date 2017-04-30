import { connect } from 'react-redux'
import Breadcrumbs from '../components/Breadcrumbs'

const mapStateToProps = ({ channels, breadcrumbs }) => (
  { items: breadcrumbs.map(id => channels[id].name) }
)
const BreadcrumbsContainer = connect(mapStateToProps)(Breadcrumbs)
export default BreadcrumbsContainer
