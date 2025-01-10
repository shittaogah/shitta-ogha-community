/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: '/shitta-ogha-community',
  output: 'export',
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_SMS_API_URL: process.env.NEXT_PUBLIC_SMS_API_URL,
    NEXT_PUBLIC_SMS_TOKEN: process.env.NEXT_PUBLIC_SMS_TOKEN,
    NEXT_PUBLIC_SMS_SENDER_ID: process.env.NEXT_PUBLIC_SMS_SENDER_ID,
  }
}

module.exports = nextConfig