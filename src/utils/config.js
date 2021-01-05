module.exports = {
  siteName: 'YiChengInfo',
  copyright: 'Copyright ©2021 译诚信息Yicheng - 在线SAAS工具提供商',
  logoPath: '/logo.png',
  apiPrefix: '/api',
  fixedHeader: true, // sticky primary layout header

  /* Layout configuration, specify which layout to use for route. */
  layouts: [
    {
      name: 'primary',
      include: [/.*/],
      exclude: [/(\/(en|zh))*\/login/],
    },
  ]
}
