module.exports = {
  before: function(browser) {
    // before
  },
  'Home Page' : function (client) {
    // Test
    client
      .url('http://www.orainteractive.com')
      .waitForElementVisible('body', 1000)
      .waitForElementVisible('.local-scroll a.jumpr', 3000)
      .pause(1000)
      .useXpath()
      .click('//*[@id="vid"]/div[2]/div/div/div/a')
      .useCss()
      .pause(2000)
      .waitForElementVisible('#welcome .container .row .twelve p.subtitle', 5000)
      .assert.containsText('#welcome .container .row .twelve p.subtitle', 'Hello there, we are')
      .end();
  }
};
