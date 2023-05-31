import React from 'react'
import { render, screen } from '@testing-library/react'
import ClientEditPage from './ClientEditPage'
import { Provider } from 'react-redux'
import clients from './clients.test'
import { reducer as initReducer } from 'Redux/features/initSlice'
import oidcDiscoveryReducer from 'Redux/reducers/OidcDiscoveryReducer'
import { reducer as scopeReducer} from 'Plugins/auth-server/redux/features/scopeSlice'
import umaResourceReducer from 'Plugins/auth-server/redux/reducers/UMAResourceReducer'
import AppTestWrapper from 'Routes/Apps/Gluu/Tests/Components/AppTestWrapper.test'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
const permissions = [
  'https://jans.io/oauth/config/openid/clients.readonly',
  'https://jans.io/oauth/config/openid/clients.write',
  'https://jans.io/oauth/config/openid/clients.delete',
]
const INIT_STATE = {
  permissions: permissions,
}

const INIT_CLIENTS_STATE = {
  items: [clients[0]],
  item: clients[0],
  saveOperationFlag: false,
  errorInSaveOperationFlag: false
}

const store = configureStore({
  reducer:  combineReducers({
    authReducer: (state = INIT_STATE) => state,
    oidcReducer: (state = INIT_CLIENTS_STATE) => state,
    umaResourceReducer,
    scopeReducer,
    initReducer,
    oidcDiscoveryReducer,
    noReducer: (state = {}) => state,
  }),
})

const Wrapper = ({ children }) => (
  <AppTestWrapper>
    <Provider store={store}>
      {children}
    </Provider>
  </AppTestWrapper>
)

it('Should the client edit page properly', () => {
  render(<ClientEditPage />, { wrapper: Wrapper })
  screen.getByText(/Basic/)
  screen.getByText(/Advanced/)
  screen.getByText('Encription / Signing', { exact: false })
  screen.getByText(/Client Scripts/)
  screen.getByText('Client Name', { exact: false })
  screen.getByText('inum', { exact: false })
})
