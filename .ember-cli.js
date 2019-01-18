'use strict';

process.env.EMBER_CLI_MODULE_UNIFICATION = true;
process.env.EMBER_CLI_BROCCOLI_2 = true;
process.env.EMBER_CLI_SYSTEM_TEMP = true;

module.exports = {
  /**
    Ember CLI sends analytics information by default. The data is completely
    anonymous, but there are times when you might want to disable this behavior.

    Setting `disableAnalytics` to true will prevent any data from being sent.
  */
  "disableAnalytics": false
}
