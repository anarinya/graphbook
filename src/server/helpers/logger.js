import winston from 'winston'

let transports = [
  // Generate an error log where only real errors are saved
  new winston.transports.File({
    filename: 'error.log',
    level: 'error'
  }),
  // Generate a combined log with all messages, including warnings and info logs
  new winston.transports.File({
    filename: 'combined.log',
    level: 'verbose'
  })
]

// In dev, directly log all messages to the console
if (process.env.NODE_ENV !== 'production') {
  transports.push(new winston.transports.Console())
}

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports
})

export default logger