/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa");

module.exports = withPWA({
  basePath: '/pashword',
  pwa: {
    dest: "public",
    register: true,
  },
});
