const debug = require('debug')
const validator = require('validator')
const APIClient = require('./APIClient')
const CardType = require('./lib/cardTypes')

function _validate () {
  // TODO
  if (validator.isURL(this.host) || validator.isIP(this.host)) {
    debug('Valid host:', this.host)
  } else throw new Error('Host must be a valid URL or IP')
}

class IotClient {

  constructor ({host, port, user, pass} = {host: 'localhost', port: 8080, user: 'root', pass: 'root'}) {
    Object.assign(this, {host, port, user, pass})
    // TODO: arguments override config and save in current execution
    _validate.bind(this)()
    this.client = new APIClient({host, port, user, pass})
  }

  loadConfig () {
    // TODO load config from disk

  }

  getCardsList (filter) {
    var self = this
    return new Promise(function (resolve, reject) {
      // TODO
      let alarmCard = new CardType.Alarm()
      alarmCard._initClient(self.client)
      resolve(alarm)
    })
  }

  setHost (host) {
    this.host = host
    // NOTE: Returning this for chaining
    return this
  }

  setPort (port) {
    this.port = port
    // NOTE: Returning this for chaining
    return this
  }

  sendCode () {
    // TODO : http request

  }

}

module.exports = IotClient
