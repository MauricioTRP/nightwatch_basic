describe('Home Visit', function () {
  before((browser) => {
    browser.init()
  })

  it('visits the app root url', function () {
    browser.assert.textContains('.green', 'You did it!')
  })

  after((browser) => browser.end())
})
