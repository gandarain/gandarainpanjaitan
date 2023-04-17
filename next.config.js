/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    EMAIL: process.env.EMAIL,
    PHONE: process.env.PHONE,
    TEXT: process.env.TEXT,
    TELEGRAM: process.env.TELEGRAM,
    SERVICE_ID: process.env.SERVICE_ID,
    TEMPLATE_ID: process.env.TEMPLATE_ID,
    PUBLIC_KEY: process.env.PUBLIC_KEY
  }
}

module.exports = nextConfig
