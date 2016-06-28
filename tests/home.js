module.exports = {
  before: function(browser) {
    browser.resizeWindow(1920, 1080);
  },
  'Home Page' : function (client) {
    client
      .url('http://www.orainteractive.com')
      .waitForElementVisible('body', 1000)
      .waitForElementVisible('.local-scroll a.jumpr', 3000)
      .click('.local-scroll a.rounder')
      .pause(2000)
      .waitForElementVisible('#welcome .container .row .twelve p.subtitle', 5000)
      .assert.containsText('#welcome .container .row .twelve p.subtitle', 'Hello there, we are')
      .end();
  }
};
