import type { NextConfig } from 'next'

const config: NextConfig = {
  reactStrictMode: true,
  typedRoutes: true,
  transpilePackages: ['@my-project/shared-utils'],
}

export default config
