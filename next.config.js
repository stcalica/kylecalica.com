/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'placehold.co',
                port: '',
            }
        ],
    },
    webpack: (config) => {
        config.module.rules.push({
            test: /\.html$/,
            loader: 'html-loader',
        });
        return config
    },

}

module.exports = nextConfig
