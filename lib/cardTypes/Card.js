
class Card {

  constructor ({active, date, _id, type, headline, shortname, card_body, background_color, img, room}) {
    Object.assign(this, {active, date, _id, type, headline, shortname, card_body, background_color, img, room})
    this.client = null // APIClient instance
  }

  _initClient (client) {
    this.client = client
  }

  getType () {
    return this.type;
  }

  getDescription () {
    return this.card_body;
  }

  getShortname () {
    return this.shortname;
  }

  getHeadline () {
    return this.headline;
  }

  getColor () {
    return this.background_color;
  }

  getImage () {
    return this.img;
  }

}

module.exports = Card
