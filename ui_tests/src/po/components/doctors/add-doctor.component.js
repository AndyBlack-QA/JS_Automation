const BaseComponent = require("./../common/base.component")

class AddDoctorComponent extends BaseComponent {
    constructor(){
        super(".new-doctor-dialog")
    }

    get saveBtn(){
        return this.rootEl.$("//div/button[text()='Save']")
    }

    get closeBtn(){
        return this.rootEl.$(".e-dlg-closeicon-btn")
    }

    /**
     * @param {'names'|'phone', |'email',|'education'} 
     * @returns 
     */

    input (name){
        const selectors ={
            name :'[name="Name"]',
            phone:'#DoctorMobile',
            email:'[name="Email"]',
            education:"[name='Education']",
        }
        return this.rootEl.$(selectors[name.toLowerCase()])
    }
}

module.exports = AddDoctorComponent;