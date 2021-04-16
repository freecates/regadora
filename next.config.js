const withPWA = require('next-pwa');
const runtimeCaching = require('next-pwa/cache');

module.exports = withPWA({
    images: {
        domains: ['regadora-data.vercel.app', 'api.regadora.cat'],
    },
    pwa: {
        dest: 'public',
        runtimeCaching,
    },
});
