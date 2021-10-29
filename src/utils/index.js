var utilMapping = {};

const utils = require.context('./', true, /\.js$/);
console.log(utils.keys(), 1123);
utils.keys().forEach(key => {
  if (key !== './index.js') {
    console.log(utils(key), 211);
    const utilName = key.substring(key.lastIndexOf('/') + 1, key.lastIndexOf('.'))
    const util = utils(key).default ? utils(key).default : {};
    utilMapping[utilName] = util;
  }
});

if (window.Utils === undefined) {
  window.Utils = utilMapping;
} else {
  window.Utils = Object.assign(window.Utils, utilMapping);
}
