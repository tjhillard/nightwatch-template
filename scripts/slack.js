slack = function(test) {
  require('dotenv').config();
  var Slack = require('slack-node');

  webhookUri = "{{your-slack-web-hook-uri}}";
  slack = new Slack();
  slack.setWebhook(webhookUri);

  console.log(test);

  slack.webhook({
    channel: "#general",
    username: "NightBot",
    text: "Uh oh! The " + test.name + " Test failed! { Failed: " + test.results.failed + " Passed: " + test.results.passed + " }"
  }, function(err, response) {
    console.log('Slack message sent!');
  });
};

exports.slack = slack;
