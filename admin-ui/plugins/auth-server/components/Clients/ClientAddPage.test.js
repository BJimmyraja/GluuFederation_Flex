import React from 'react'
import { render, screen } from '@testing-library/react'
import ClientAddPage from './ClientAddPage'
import { BrowserRouter as Router } from 'react-router-dom'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import i18n from '../../../../app/i18n'
import { I18nextProvider } from 'react-i18next'
import initReducer from 'Redux/reducers/InitReducer'
import oidcDiscoveryReducer from 'Redux/reducers/OidcDiscoveryReducer'
import scopeReducer from 'Plugins/auth-server/redux/reducers/ScopeReducer'
import umaResourceReducer from 'Plugins/auth-server/redux/reducers/UMAResourceReducer'
import AppTestWrapper from 'Routes/Apps/Gluu/Tests/Components/AppTestWrapper.test'
const permissions = [
  'https://jans.io/oauth/config/openid/clients.readonly',
  'https://jans.io/oauth/config/openid/clients.write',
  'https://jans.io/oauth/config/openid/clients.delete',
]
const INIT_STATE = {
  permissions: permissions,
}
const INIT_SCPOPES_STATE = {
  items: [
    {
      id: 'https://jans.io/oauth/config/smtp.delete',
      scopeType: 'oauth',
      dn: 'inum=1800.85A227,ou=scopes,o=jans',
      inum: '1800.85A227',
      displayName: 'Config API scope https://jans.io/oauth/config/smtp.delete',
      description: 'Delete SMTP related information',
      defaultScope: false,
      attributes: { showInConfigurationEndpoint: false },
      umaType: false,
      tableData: { id: 0 },
    },
  ],
  item: {},
  loading: false,
}
const store = createStore(
  combineReducers({
    authReducer: (state = INIT_STATE) => state,
    oidcReducer: (state = INIT_SCPOPES_STATE) => state,
    umaResourceReducer,
    scopeReducer,
    initReducer,
    oidcDiscoveryReducer,
    noReducer: (state = {}) => state,
  }),
)

const Wrapper = ({ children }) => (
  <AppTestWrapper>
    <Provider store={store}>
      {children}
    </Provider>
  </AppTestWrapper>
)

it('Should render client add page properly', () => {
  render(<ClientAddPage />, { wrapper: Wrapper })
  screen.getByText(/Basic/)
  screen.getByText(/Advanced/)
  screen.getByText('Encription / Signing', { exact: false })
  screen.getByText(/Client Scripts/)
  screen.getByText('Client Name', { exact: false })
  screen.getByText('description', { exact: false })
})
