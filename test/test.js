// test/test.js
import {
  isNode,
  isBrowser,
  detectPlatform,
  detectOperatingSystem,
  detectBrowser,
  detectApiSupport,
  detectNetworkInfo,
  getEnvironmentInfo,
} from '../src/jsEnv.js';

// Manual inspection and simple assertions for testing
console.assert(
  isNode() === true || isBrowser() === true,
  'Error: Environment not detected correctly',
);
console.log('Platform:', detectPlatform());
console.log('Operating System:', detectOperatingSystem());
console.log('Browser:', detectBrowser());
console.log('API Support:', detectApiSupport());
console.log('Network Info:', detectNetworkInfo());
console.log('Full Environment Info:', getEnvironmentInfo());
