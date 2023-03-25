const BaseComponent = require("./../common/base.component");

class DoctorListHeaderComponent extends BaseComponent{

    constructor(){
        super(".specialization-types");
    }

    get addNewDoctorBtn(){
        return this.rootEl.$("button.e-control");
    }
}

module.exports = DoctorListHeaderComponent;