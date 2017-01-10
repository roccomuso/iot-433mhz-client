"use strict"
const argv = require('./argv') // validating CLI argv
const IotClient = require('./IotClient')

module.exports = function(cb){
  var iot = new IotClient()
  iot.loadConfig(__dirname+'/localConfig.json')
  // TODO

}
