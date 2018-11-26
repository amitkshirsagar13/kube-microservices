// config.js
const env = process.env.NODE_ENV || 'dev'; // 'development' or 'test'

const development = {
    app: {
        env: 'development',
        port: parseInt(process.env.DEV_APP_PORT) || 3000
    }
};
const test = {
    app: {
        env: 'test',
        port: parseInt(process.env.TEST_APP_PORT) || 4000
    }
};

const config = {
    development,
    test
};

module.exports = config[env];
