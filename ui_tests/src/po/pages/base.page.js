/* eslint-disable require-jsdoc */
const {SideMenu, Header}= require('../components');

class BasePage {
  constructor(url) {
    this.url = url;
    this.header = new Header();
    this.sideMenu = new SideMenu();
  }
  open() {
    return browser.url(this.url);
  }
}

module.exports = BasePage;
