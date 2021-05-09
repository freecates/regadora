const withPWA = require('next-pwa');
const withImages = require('next-images');
const runtimeCaching = require('next-pwa/cache');

module.exports = withImages(
    withPWA({
        images: {
            domains: ['regadora-data.vercel.app', 'api.regadora.cat'],
        },
        pwa: {
            dest: 'public',
            runtimeCaching,
            disable: process.env.NODE_ENV === 'development',
        },
        future: {
            webpack5: true,
        },
    })
);
