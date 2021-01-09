module.exports = {
  exportPathMap: async function () {
    return {
      '/': { page: '/' },
      '/paypal/login': { page: '/paypal/login' },
    }
  },
}