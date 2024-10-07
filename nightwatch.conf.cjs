module.exports = {
  src_folders: ['tests/e2e'],
  webdriver: {
    start_process: true,
    server_path: require('chromedriver').path,
    port: 9515
  },
  test_settings: {
    default: {
      launch_url: `http://localhost:${process.env.CI ? '4173' : '5173'}`,
      desiredCapabilities: {
        browserName: 'chrome'
      }
    }
  }
}
