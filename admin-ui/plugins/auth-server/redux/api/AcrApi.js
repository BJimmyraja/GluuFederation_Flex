import { handleResponse } from 'Utils/ApiUtils'

export default class AcrApi {
  constructor(api) {
    this.api = api
  }

  // Get Acrs Config
  getAcrsConfig = () => {
    return new Promise((resolve, reject) => {
      this.api.getAcrs((error, data) => {
        handleResponse(error, reject, resolve, data)
      })
    })
  }

  // update Acrs Config
  updateAcrsConfig = (input) => {
    return new Promise((resolve, reject) => {
      this.api.putAcrs(input, (error, data) => {
        handleResponse(error, reject, resolve, data)
      })
    })
  }
}
