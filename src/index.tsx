import React from 'react'
import ReactDOM from 'react-dom'
import * as Sentry from "@sentry/react"
import { Integrations } from "@sentry/tracing"
import CssBaseline from '@material-ui/core/CssBaseline'
import App from './App'

import { store } from './redux/store'
import { Provider } from 'react-redux'

import { ThemeProvider } from '@material-ui/core/styles'
import { createMuiTheme } from '@material-ui/core/styles'
import { ukUA } from '@material-ui/core/locale'


Sentry.init({
  dsn: "https://ec84c94451f64784b1206768f8949a78@o463044.ingest.sentry.io/5467755",
  integrations: [
    new Integrations.BrowserTracing(),
  ],

  // We recommend adjusting this value in production, or using tracesSampler
  // for finer control
  tracesSampleRate: 1.0,
})



const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#3f50b5',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
}, ukUA)



ReactDOM.render(
  <Provider store={store}>
    <CssBaseline />
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Provider>,
  document.querySelector('#root')
)
