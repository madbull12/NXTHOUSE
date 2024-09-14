import { paraglide } from '@inlang/paraglide-next/plugin'

/** @type {import('next').NextConfig} */
export const nextConfig = {
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
            {
              protocol: 'https',
              hostname: 'https://lh3.googleusercontent.com/',
              port: '',
              pathname: '/**',
            },
          ],
    }
}

export default paraglide({
  paraglide: {
    project: './project.inlang',
    outdir: './src/paraglide'
  },
  ...nextConfig
})


