import {
  CHECK_FOR_VALID_LICENSE,
  CHECK_FOR_VALID_LICENSE_RESPONSE,
  ACTIVATE_CHECK_USER_API,
  ACTIVATE_CHECK_LICENCE_API_VALID,
  ACTIVATE_CHECK_USER_LICENSE_KEY_RESPONSE,
  ACTIVATE_CHECK_USER_LICENSE_KEY,
  ACTIVATE_CHECK_IS_CONFIG_VALID_RESPONSE,
  UPLOAD_NEW_SSA_TOKEN,
  UPLOAD_NEW_SSA_TOKEN_RESPONSE,
  GENERATE_TRIAL_LICENSE_KEY_RESPONSE,
  GENERATE_TRIAL_LICENSE_KEY
} from '../actions/types'
import reducerRegistry from './ReducerRegistry'

const INIT_STATE = {
  isLicenseValid: false,
  islicenseCheckResultLoaded: false,
  isLicenseActivationResultLoaded: false,
  isLicenceAPIkeyValid: false,
  isLoading: false,
  isConfigValid:null,
  error: '',
  errorSSA: '',
  generatingTrialKey: false
}

const reducerName = 'licenseReducer'

export default function licenseReducer(state = INIT_STATE, action) {
  switch (action.type) {
    case CHECK_FOR_VALID_LICENSE:
      return {
        ...state,
        islicenseCheckResultLoaded: false,
      }
    case ACTIVATE_CHECK_USER_API:
      return {
        ...state,
        isLoading: true,
        error: '',
      }
    case ACTIVATE_CHECK_USER_LICENSE_KEY:
      return {
        ...state,
        isLoading: true,
        error: '',
      }
    case ACTIVATE_CHECK_IS_CONFIG_VALID_RESPONSE:
      return {
        ...state,
        isLoading: false,
        isConfigValid: action.payload || false,
      }
    case UPLOAD_NEW_SSA_TOKEN_RESPONSE:
      return {
        ...state,
        isLoading: false,
        errorSSA: action?.payload,
      }
    case UPLOAD_NEW_SSA_TOKEN:
      return {
        ...state,
        isLoading: true,
        errorSSA: '',
      }

    case ACTIVATE_CHECK_USER_LICENSE_KEY_RESPONSE:
      if (action.payload.apiResult) {
        return {
          ...state,
          isLicenseValid: action.payload.apiResult,
          error: '',
          isLoading: false,
        }
      } else {
        return {
          ...state,
          error: action.payload.responseMessage,
          isLoading: false,
        }
      }
    case CHECK_FOR_VALID_LICENSE_RESPONSE:
      if (action.payload.isLicenseValid) {
        return {
          ...state,
          isLicenseValid: action.payload.isLicenseValid,
          islicenseCheckResultLoaded: true,
        }
      } else {
        return {
          ...state,
          islicenseCheckResultLoaded: true,
        }
      }
    case GENERATE_TRIAL_LICENSE_KEY:
        return {
          ...state,
          generatingTrialKey: true
        }
    case GENERATE_TRIAL_LICENSE_KEY_RESPONSE:
        return {
          ...state,
          generatingTrialKey: false
        }

    default:
      return {
        ...state,
      }
  }
}
reducerRegistry.register(reducerName, licenseReducer)