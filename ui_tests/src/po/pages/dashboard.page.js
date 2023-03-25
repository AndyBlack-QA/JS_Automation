const BasePage = require("./../pages/base.page");


class  DashboardPage extends BasePage{

    constructor(){
        super("/showcase/angular/appointmentplanner/#/dashboard");
    }

}
module.exports = DashboardPage;