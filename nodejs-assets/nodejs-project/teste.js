const CDP = require('chrome-remote-interface');
const chromium = require('chromium');
const {execFile} = require('child_process');

function launchChrome() {
    execFile(
        chromium,
        '--headless',
        '--disable-gpu',
        '--remote-debugging-port=9222',
      )
}

