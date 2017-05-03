const env = require('../env.json');
const cryptoKey = require('../cryptoKey.js');
const encryptedP = cryptoKey.encrypt(env.dev.SLACK_APP_NAME);
