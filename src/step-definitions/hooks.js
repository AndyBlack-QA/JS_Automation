/* eslint-disable new-cap */
const {Before} = require('@wdio/cucumber-framework');

Before({name: 'console log', tags: '@1'}, ()=>{
  return console.log('before hook');
});
