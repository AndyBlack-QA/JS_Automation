const  {AppointmentTable}= require("./../components")
const BasePage = require("./base.page")

class Schedule extends BasePage{
    constructor(){
        super ("/showcase/angular/appointmentplanner/#/calendar")
        this.AppointmentTable = new AppointmentTable();
    }

}

module.exports = Schedule;