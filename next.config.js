/** @type {import('next').NextConfig} */
const nextConfig = {
    // experimental:{
    //     serverComponentsExternalPackages:["bcrypt"]
    // },
    images:{
        remotePatterns: [
            {
              protocol: 'https',
              hostname: 'images.unsplash.com',
              port: '',
              pathname: '/**',
            },
          ],
    }
}

module.exports = nextConfig
