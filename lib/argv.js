var argv = require('yargs')
  .usage('Usage: iot -d [debug] -p [serverPort] -u [username] -P [password]')
  .help('help')
  .alias('help', 'h')
  .option('debug', {
        alias: 'd',
        demand: false,
        describe: 'Debug Mode (aka Verbose mode).',
        type: 'boolean'
    })
  .default('debug', undefined)
  .option('host', {
        alias: 'H',
        demand: false,
        describe: 'iot-433mhz Host',
        type: 'string'
    })
  .option('user', {
        alias: 'u',
        demand: false,
        describe: 'Username for Web Interface and API',
        type: 'string'
    })
  .option('pass', {
        alias: 'P',
        demand: false,
        describe: 'Password for Web Interface and API',
        type: 'string'
    })
  .implies('user', 'pass')
  .implies('pass', 'user')
  .option('port', {
        alias: 'p',
        demand: false,
        describe: 'HTTP Server Port.',
        type: 'number'
    })
  .example('iot-433mhz -d false', 'Choose to enable or not Debug Mode')
  .example('iot-433mhz -s COM4', 'Start the system using arduino on the specified serial port')
  .example('iot-433mhz -u username -P password', 'Start the system setting custom username and password')
  .example('iot-433mhz -p 8080', 'Start the system server on the specified port')
  .epilogue('@Author: Rocco Musolino - github.com/roccomuso/iot-433mhz-client - @Copyright 2017')
  .argv


module.exports = argv
