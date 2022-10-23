// Refer to the online docs for more details:
// https://nightwatchjs.org/gettingstarted/configuration/
//

//  _   _  _         _      _                     _          _
// | \ | |(_)       | |    | |                   | |        | |
// |  \| | _   __ _ | |__  | |_ __      __  __ _ | |_   ___ | |__
// | . ` || | / _` || '_ \ | __|\ \ /\ / / / _` || __| / __|| '_ \
// | |\  || || (_| || | | || |_  \ V  V / | (_| || |_ | (__ | | | |
// \_| \_/|_| \__, ||_| |_| \__|  \_/\_/   \__,_| \__| \___||_| |_|
//             __/ |
//            |___/

module.exports = {
  // An array of folders (excluding subfolders) where your tests are located;
  // if this is not specified, the test source must be passed as the second argument to the test runner.
  src_folders: ['tests/e2e'],

  // See https://nightwatchjs.org/guide/concepts/page-object-model.html
  page_objects_path: ['nightwatch/page-objects', 'page-objects'],

  // See https://nightwatchjs.org/guide/extending-nightwatch/adding-custom-commands.html
  custom_commands_path: ['nightwatch/custom-commands'],

  // See https://nightwatchjs.org/guide/extending-nightwatch/adding-custom-assertions.html
  custom_assertions_path: ['nightwatch/custom-assertions'],

  // See https://nightwatchjs.org/guide/extending-nightwatch/adding-plugins.html
  // plugins: [],
  
  // See https://nightwatchjs.org/guide/concepts/test-globals.html
  globals_path: 'globals.js',

  webdriver: {},

  test_workers: {
    enabled: true
  },

  test_settings: {
    default: {
      skip_testcases_on_fail: false,
      disable_error_log: false,
      launch_url: 'https://www.saucedemo.com/',
      screenshots: {
        enabled: true,
        path: 'screens',
        on_failure: true
      },

      desiredCapabilities: {
        "browserName" : "chrome",
        "javascriptEnabled" : true,
        "acceptSslCerts" : true,
        "chromeOptions" : {
          "args" : ["start-maximized"]
        }
      },
      
      webdriver: {
        start_process: true,
        server_path: ''
      },
    },
    apitests : {
      unit_tests_mode : true,
      src_folders: ['tests/api-tests'],
      screenshots: {
        enabled: false
      },
    },
    firefox: {
      desiredCapabilities: {
        browserName: 'firefox',
        alwaysMatch: {
          acceptInsecureCerts: true,
          'moz:firefoxOptions': {
            args: [
              // '-headless',
              // '-verbose'
            ]
          }
        }
      },
      webdriver: {
        start_process: true,
        server_path: '',
        cli_args: [
          // very verbose geckodriver logs
          // '-vv'
        ]
      }
    },
    
  },

  usage_analytics: {
    enabled: false,
    log_path: './logs/analytics',
    client_id: '3d6ab70c-976b-46e3-aacc-2608555ba96e'
  }
};
