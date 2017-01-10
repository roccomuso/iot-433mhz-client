# iot-433mhz-client
:video_game: CLI tool for the iot-433mhz system.


[![Standard - JavaScript Style Guide](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)

# Install

    $ npm install -g iot-433mhz-client

or

    $ npm install --save iot-433mhz-client

# Standalone Usage

After a global install launch it with:

    $ iot

If launched for the first time, you'll be redirected to the configuration step.



# Embedded

The **iot-433mhz-client** module can be embedded and used as node module.

```JavaScript
const IotClient = require('iot-433mhz-client');

var iot = new IotClient({
  host: '',
  port: 8080,
  user: 'root',
  pass: 'root'
});

iot.getCardsList({type: 'alarm'}).then(function(o){
  console.log(o)
}, function(err){
  console.log(err)
})

iot.getCard('card-name').then(function(card){
  console.log(card)
}, function(err){
  console.error(err)
})

iot.toggleSwitch('card-name').then(function(o){
  console.log(o)
}, function(err){
  console.error(err)
})

iot.setSwitch('card-name', false).then(function(o){
  console.log(o)
}, function(err){
  console.error(err)
})

iot.getAlarmStatus('card-name').then(function(o){
  console.log(o) // { ... }
}, function(err){
  console.error(err)
})

```

## API




# Author

Rocco Musolino - @roccomuso
