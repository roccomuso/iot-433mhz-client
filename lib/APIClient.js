const request = require('request')

// TODO ...

class APIClient {

  constructor (options) {
    this.host = options.host
    this.port = options.port
    this.user = options.user
    this.pass = options.pass
  }

  getHost () {
    return this.host
  }

  getList () {
    request.get('http://some.server.com/').auth('username', 'password', false)
  }

}

module.exports = APIClient;
