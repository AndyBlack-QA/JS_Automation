const  {DoctorListHeader,AddDoctorModal,SpecialistCardComponent}= require("./../components");
const BasePage = require("./base.page");

class DoctorsPage extends BasePage{

    constructor(){
        super('/showcase/angular/appointmentplanner/#/doctors');
        this.doctorList = new DoctorListHeader();
        this.AddDoctorModalWindow = new AddDoctorModal();
    }

    specilistCard(id){
        return new SpecialistCardComponent(id);
    }

}

module.exports = DoctorsPage;

