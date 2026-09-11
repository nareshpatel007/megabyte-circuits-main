/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "ik.imagekit.io",
                pathname: "/**",
            },
        ],
    },
    async redirects() {
        return [
            {
                source: '/:path*.html',
                destination: '/:path*',
                permanent: true,
            },
        ];
    },
};

module.exports = nextConfig;
