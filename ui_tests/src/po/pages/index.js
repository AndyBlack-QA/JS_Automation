const DashboardPage = require("./dashboard.page");
const DoctorsPage = require("./doctors.page");
const Schedule = require("./schedule.page");
const CircularPG = require("./circularPG.page");

/**
 * @param {*} name {'dashboard'|'doctors' |'schedule'|'circular'}
 * @returns {DashboardPage | DoctorsPage | Schedule |CircularPG}
 */

function pages(name){
    const items={
        dashboard: new DashboardPage(),
        doctors: new DoctorsPage(),
        schedule : new Schedule(),
        circular : new CircularPG(),
    }
    return items[name.toLowerCase()];
}

module.exports={
    DashboardPage,
    DoctorsPage,
    Schedule,
    CircularPG,
    pages,
}