describe("Test suite ", () => {
    
    it('First test', async () => {
        await browser.url("https://ej2.syncfusion.com/showcase/angular/appointmentplanner/#/dashboard")
        const pageTitle= await browser.getTitle();
        expect(pageTitle).toEqual("Appointment Planner - Syncfusion Angular Components Showcase App");
    })

    it("second Test", async() => {
        await $("div.doctors").click();
        await $("//button[text()='Add New Doctor']").click();
        await $("input[name='Name']").setValue('John Doe');
        await $("//button[text()='Save']").click();

        const emailError= await $("label#Email-info")

        expect(await emailError.getText()).toEqual("Enter valid email")
    })

    it("Check that 'Add New Doctor is clickable'", async() => {
        await $("//button[text()='Cancel']").click();
        const addNewDoctor = await $("//button[text()='Add New Doctor']")
        await expect(addNewDoctor).toBeClickable() 

    })
    it("Check URL contain calendar", async () =>{
     await $("span[title='calendar']").click();
     const dateValue = await $("span[class='e-tbar-btn-text']")
     await expect(dateValue).toHaveTextContaining('2020')
    })

    it('urlContain CALENDAR', async () => {
        await expect(browser).toHaveUrlContaining('calendar')
    });
})