const withPWA = require('next-pwa');
const runtimeCaching = require('next-pwa/cache');

module.exports = withPWA({
    images: {
        domains: ['regadora-data.vercel.app', '68.183.219.78'],
    },
    pwa: {
        dest: 'public',
        runtimeCaching,
    },
});
