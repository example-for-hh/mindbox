/** @type {import('next').NextConfig} */


const path = require('path');

module.exports = {
    compiler: {
        styledComponents: {

            displayName: true,
        
            ssr: true,
          
          },
    },
    webpack: (config, { isServer }) => {
        config.module.rules.push({
            test: /\.(ttf|eot|woff|woff2)$/,
            use: {
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: 'static/fonts/',
                    publicPath: '/_next/static/fonts/',
                },
            },
        });

        return config;
    },
};