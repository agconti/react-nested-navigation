import { connect } from 'react-redux'
import App from './components'

const mapStateToProps = ({channels, breadcrumbs}) => ({channels, breadcrumbs})

const mapDispatchToProps = dispatch => {
  return {
  }
}


const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App)
export default AppContainer
