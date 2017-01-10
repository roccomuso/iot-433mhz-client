const debug = require('debug')
const validator = require('validator')

function _validate(){
  if (validator.isURL(this.host) || validator.isIP(this.host)) {
    debug('Valid host:', this.host)
  } else throw new Error('Host must be a valid URL or IP')
}

class IotClient {

  constructor ({host, port, user, pass} = {host: 'localhost', port: 8080, user: 'root', pass: 'root'}) {
    Object.assign(this, {host, port, user, pass})
    // TODO: arguments override config and save in current execution
    _validate.bind(this)();
  }

  loadConfig () {
    // load config from disk

  }

  setHost(host){
    this.host = host;
    // NOTE: Returning this for chaining
    return this
  }

  setPort(port){
    this.port = port;
    // NOTE: Returning this for chaining
    return this
  }

}



module.exports = IotClient;
