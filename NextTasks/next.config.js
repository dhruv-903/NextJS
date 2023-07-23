/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig

module.exports = {
    async headers() {
      return [
        {
          source: '/user/login',
          headers: [
            {
              key: 'firstHeader',
              value: 'my custom header value',
            },
          ],
        },
      ]
    },
  }