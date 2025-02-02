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
        unoptimized: true,
    },
    trailingSlash: true,
    output: 'export',
    pageExtensions: ['js', 'jsx', 'ts', 'tsx'],
    webpack: (config) => {
        config.module.rules.push({
            test: /\.html$/,
            loader: 'html-loader',
        });
        return config
    },

}

module.exports = nextConfig
