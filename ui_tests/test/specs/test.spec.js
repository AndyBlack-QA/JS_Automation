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
    
    
    //HomeTask WebDriverIO Commands/Advanced
    
    it('Change Border of doctor choose dropdown', async () => {
        const docChoose = await $("span[class='e-input-group e-control-wrapper e-specialist-doctors e-ddl e-lib e-keyboard']")
        await browser.execute(function(docChoose){
            docChoose.style.border='red solid 2px';
            
        },docChoose)
        await browser.pause(4000);
    });
    it('waitUntil', async() => {
        await browser.url("https://ej2.syncfusion.com/react/demos/progress-bar/semi-circular/")
        await $("#reLoad").click()
        await browser.waitUntil(
            async ()=>(await $("#point1").getText())==="100%",
            {
                timeout:5000,
                interval:600,
                timeoutMsg:'Not loaded',
            }
        )
    });
    it('Choose Period of time in Calendar', async() => {
        await browser.url('https://ej2.syncfusion.com/demos/#/bootstrap5/schedule/overview.html')
        const firstSlot= await $("tr [data-date = '1674369000000']")
        const secondSlot= await $("tr [data-date = '1674379800000']") 
        const shift = '\uE008'
        await firstSlot.click()
        await browser.performActions([
            {
            type:'key',
            id:'keyboard',
            actions:[
                {
                    type:"keyDown",
                    value:shift
                }
            ]
        }
        ]
        )
        await secondSlot.click()
        await browser.pause(5000)
        await browser.performActions([
            {
            type:'key',
            id:'keyboard',
            actions:[
                {
                    type:'keyUp',
                    value:shift
                }
            ]
        }
        ])
        await browser.pause(5000)
    });
    it('Cookie Actions', async() => {

        await browser.url("https://ej2.syncfusion.com/showcase/angular/appointmentplanner/#/dashboard")

        await browser.setCookies([{name: "andyCookie", value: "coookieActions"}]);

        await browser.pause(1500)

        console.log(await browser.getCookies(["andyCookie"]));

        await browser.pause(1500)

        await browser.deleteCookies(["andyCookie"]);

        await browser.pause(1500)
    });

})