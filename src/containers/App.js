import { connect } from 'react-redux'
import App from '../components/App'

const mapStateToProps = ({rootChannels, channels}) => (
  {rootChannels, channels}
)

const mapDispatchToProps = dispatch => {
  return {
  }
}

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App)
export default AppContainer