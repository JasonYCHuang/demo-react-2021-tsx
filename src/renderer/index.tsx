import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { setupStore } from './reducers/store'
import App from './App'

const store = setupStore()

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)