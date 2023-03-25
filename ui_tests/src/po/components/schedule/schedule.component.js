const BaseComponent = require ("./../common/base.component");

class AppointmentTable extends BaseComponent{
    constructor(){
        super(".schedule-container");
    }

    input (name){
        const selectors ={
            one :'td [data-date ="1596344400000"]',
            four:'td [data-date ="1596349800000"]',
        }
        return this.rootEl.$(selectors[name.toLowerCase()]);
    }
}

module.exports = AppointmentTable;