const stake = require('./stake')
const rewards = require('./rewards')
const status = require('./status')

module.exports = app => {
  app.use('/stake', stake)
  app.use('/rewards', rewards)
  app.use('/status', status)
}