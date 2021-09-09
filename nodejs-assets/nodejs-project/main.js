// Rename this sample file to main.js to use on your project.
// The main.js file will be overwritten in updates/reinstalls.

var rn_bridge = require('rn-bridge');
var puppeteer = require('puppeteer');

// Echo every message received from react-native.
rn_bridge.channel.on('message', msg => {
  if (msg === 'start') {
    rn_bridge.channel.send('start');
    puppeteer.launch({ headless: true }).then(browser => {
      rn_bridge.channel.send('browser');
      browser.newPage().then(page => {
        rn_bridge.channel.send('page');
        page
          .goto('https://google.com', { waitUntil: 'networkidle0' })
          .then(() => {
            page.content(e => {
              console.log(e);
              browser.close();
            });
          });
      });
    });
  }
});

// Inform react-native node is initialized.
rn_bridge.channel.send('Node was initialized.');
