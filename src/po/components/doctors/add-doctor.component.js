/* eslint-disable valid-jsdoc */
/* eslint-disable require-jsdoc */
const BaseComponent = require('../common/base.component');

class AddDoctorComponent extends BaseComponent {
  constructor() {
    super('.new-doctor-dialog');
  }

  get closeBtn() {
    return this.rootEl.$('.button-container button.e-btn:not(.e-primary)');
  }

  get saveBtn() {
    return this.rootEl.$('.button-container button.e-primary');
  }

  /**
   * @param button {'save' | 'close'}
   */
  async clickButton(button) {
    if (button.toLowerCase() === 'save') {
      await this.saveBtn.click();
    } else {
      await this.closeBtn.click();
    }
  }
  /**
   *
   * @param button ('save' | 'close')
   */
  async clickButton(button) {
    if (button.toLowerCase()==='save') {
      await this.saveBtn.click();
    } else {
      await this.closeBtn.click();
    }
  }

  /**
   * @param name {'name' | 'phone' | 'email' | 'education' | 'designation'}
   */
  input(name) {
    const selectors = {
      name: '#Name input',
      phone: 'input#DoctorMobile',
      email: 'input[name="Email"]',
      education: 'input[name="Education"]',
      designation: 'input[name="Designation"]',
    };

    return this.rootEl.$(selectors[name.toLowerCase()]);
  }
}

module.exports = AddDoctorComponent;
