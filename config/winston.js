const { createLogger, format, transports } = require('winston');

const logger = createLogger({
  level: 'info',
  format: format.json(),
  transports: [
    new transports.Console({ format: format.combine(format.colorize(), format.simple()) })
  ]
});

module.exports = logger;
