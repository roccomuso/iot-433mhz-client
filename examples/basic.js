"use strict"

const IotClient = require('iot-433mhz-client');

var iot = new IotClient({
  host: '192.168.88.111',
  port: 8080,
  user: 'root',
  pass: 'root'
});

iot.getCardsList({type: 'alarm'}).then(function(cards){
  // { "CardShortname": {CardObj}, ...}
}, function(err){
  console.log(err)
})

iot.getCard('card-name').then(function(card){
  console.log(card)
  card.off()
}, function(err){
  console.error(err)
})
