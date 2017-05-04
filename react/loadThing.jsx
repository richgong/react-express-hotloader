import { AppContainer } from 'react-hot-loader'
import ReactDOM from 'react-dom'
import Thing from './Thing.jsx'

function render() {
    ReactDOM.render(
        <AppContainer><Thing /></AppContainer>,
        document.getElementById('thing')
    )
}

render()

if (module.hot)
    module.hot.accept('./Thing.jsx', render)
