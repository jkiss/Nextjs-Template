/* 
 * @Author: Mr.B 
 * @Date: 2022-03-04 11:41:37 
 * @Last Modified by: Mr.B
 * @Last Modified time: 2022-03-30 19:49:21
 */

const path = require('path')

/** @type {import('next').NextConfig} */
module.exports = {
    reactStrictMode: true,
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
        config.resolve.alias['@'] = __dirname

        // Important: return the modified config
        return config
    },
}