const Card = require('./Card')

/*
SWITCH type

"device":{"on_code":1111,"off_code":2222,"notification_sound":true,"is_on":false}

*/

class Switch extends Card {

  constructor ({active, date, _id, type, headline, shortname, card_body, background_color, img, room, device}) {
    super({active, date, _id, type, headline, shortname, card_body, background_color, img, room})
    Object.assign(this, device)
  }

  getOnCode () {
    return this.on_code;
  }

  getOffCode () {
    return this.off_code;
  }

  on () {
    // TODO : http request

  }

  turnOn () {
    return this.on()
  }

  off () {
    // TODO : http request

  }

  turnOff () {
    return this.off()
  }

  toggle () {
    // TODO : http request

  }

  getStatus () {
    // TODO : http request

  }

}

module.exports = Switch
