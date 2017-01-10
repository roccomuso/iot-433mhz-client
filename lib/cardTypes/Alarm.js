const Card = require('./Card')

/*
"device":
  {"last_alert":false,"notification_sound":true,"armed":true,"trigger_code":3333}
*/

class Alarm extends Card {

  constructor ({active, date, _id, type, headline, shortname, card_body, background_color, img, room, device}) {
    super({active, date, _id, type, headline, shortname, card_body, background_color, img, room})
    Object.assign(this, device)
  }

  arm () {
    // TODO

  }

  disarm () {
    // TODO

  }

  getLastAlert () {
    // TODO: momentify: date format
    return this.last_alert || 'Never fired'
  }

  getTriggerCode () {
    return this.trigger_code
  }

  isArmed () {
    return this.armed
  }

}

module.exports = Alarm
