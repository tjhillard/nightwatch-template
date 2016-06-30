slack = function(test) {
  require('dotenv').config();
  var Slack = require('slack-node');

  webhookUri = "https://hooks.slack.com/services/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";
  slack = new Slack();
  slack.setWebhook(webhookUri);

  console.log(test);

  slack.webhook({
    channel: "@tjhillard",
    username: "NightBot",
    text: "Uh oh! The " + test.name + " Test failed! { Failed: " + test.results.failed + " Passed: " + test.results.passed + " }"
  }, function(err, response) {
    console.log('Slack message sent!');
  });
};

exports.slack = slack;
