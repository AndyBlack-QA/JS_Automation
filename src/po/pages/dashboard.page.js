/* eslint-disable require-jsdoc */
const BasePage = require('./base.page');
const {SideMenu} = require('../components');

// eslint-disable-next-line require-jsdoc
class DashboardPage extends BasePage {
  constructor() {
    super('/showcase/angular/appointmentplanner/#/dashboard');
    this.sideMenu = new SideMenu();
  }
}

module.exports = DashboardPage;
