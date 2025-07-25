import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import GlobalStyles from './styles/GlobalStyles'
import './index.css'

import { Provider } from 'react-redux'
import { store } from './store'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyles />
      <App />
    </Provider>
  </React.StrictMode>
)