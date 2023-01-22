describe('Doctors page', ()=>{
    beforeEach(async()=>{
        await browser.url("https://ej2.syncfusion.com/showcase/angular/appointmentplanner/#/dashboard");
    })

    it('Check the corectness of the page title',async()=>{
      await expect(browser).toHaveTitle('Appointment Planner - Syncfusion Angular Components Showcase App')
    })

    it('Open modal window for adding a new doctor',async()=>{

        
        await $("div[class='sidebar-item doctors']").click();
    
        await $(".specialization-types button.e-control").click();

        await $(".new-doctor-dialog").isDisplayed();
        
        await expect($(".new-doctor-dialog")).toBeDisplayed();
    })

    it('Add New doctor', async()=>{
        await $("div[class='sidebar-item doctors']").click();
    
        await $(".specialization-types button.e-control").click();

        await $(".new-doctor-dialog").waitForDisplayed();

        await $('[name="Name"]').setValue('John Doe')

        await $('#DoctorMobile').setValue('11111111111111111')

        await $('[name="Email"]').setValue('AndyGudkoff@yandex.by')

        await $("[name='Education']").setValue('Polytech')

        await $(".e-footer-content button.e-primary").click()

        await expect($(".new-doctor-dialog")).not.toBeDisplayed()

        await expect($('#Specialist_8').$('.name')).toHaveTextContaining('John Doe')

        await expect($('#Specialist_8').$('.education')).toHaveText('Polytech',{ignoreCase:true})

    })

    it('close modal window', async ()=>{

        await $("div[class='sidebar-item doctors']").click();
    
        await $(".specialization-types button.e-control").click();

        await $(".new-doctor-dialog").waitForDisplayed();

        await $(".e-dlg-closeicon-btn").click();

        await expect($(".new-doctor-dialog")).not.toBeDisplayed()
    })
    
})