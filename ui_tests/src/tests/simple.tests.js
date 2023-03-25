const {pages} = require('./../po');

describe('dashboard page', ()=>{
    beforeEach(async()=>{

       await pages('dashboard').open();

    })

    it('Check the corectness of the page title',async()=>{

      await expect(browser).toHaveTitle('Appointment Planner - Syncfusion Angular Components Showcase App');

    })

    it('Open modal window for adding a new doctor',async()=>{

        await pages('dashboard').sideMenu.item('doctors').click(pages('dashboard').sideMenu.item('doctors').waitForDisplayed());
    
        await pages('doctors').doctorList.addNewDoctorBtn.click(pages('doctors').doctorList.addNewDoctorBtn.waitForDisplayed());

        await expect(pages('doctors').AddDoctorModalWindow.rootEl).toBeDisplayed();
    })

    it('Add New doctor', async()=>{
        await pages('dashboard').sideMenu.item('doctors').click(pages('dashboard').sideMenu.item('doctors').waitForDisplayed());
    
        await pages('doctors').doctorList.addNewDoctorBtn.click(pages('doctors').doctorList.addNewDoctorBtn.waitForDisplayed());

        await pages('doctors').AddDoctorModalWindow.rootEl.waitForDisplayed();

        await pages('doctors').AddDoctorModalWindow.input('name').setValue('John Doe');

        await pages('doctors').AddDoctorModalWindow.input('phone').setValue('11111111111111111');

        await pages('doctors').AddDoctorModalWindow.input('email').setValue('AndyGudkoff@yandex.by');

        await pages('doctors').AddDoctorModalWindow.input('education').setValue('Polytech');

        await pages('doctors').AddDoctorModalWindow.saveBtn.click(pages('doctors').AddDoctorModalWindow.saveBtn.waitForDisplayed());

        await expect(pages('doctors').AddDoctorModalWindow.rootEl).not.toBeDisplayed();

        await pages('doctors').specilistCard(8).name;

        await expect(pages('doctors').specilistCard(8).name).toHaveTextContaining('John Doe');

        await expect(pages('doctors').specilistCard(8).education).toHaveText('Polytech',{ignoreCase:true});

    })

    it('close modal window', async ()=>{

        await pages('dashboard').sideMenu.item('doctors').click(pages('dashboard').sideMenu.item('doctors').waitForDisplayed());
    
        await pages('doctors').doctorList.addNewDoctorBtn.click(pages('doctors').doctorList.addNewDoctorBtn.waitForDisplayed());

        await pages('doctors').AddDoctorModalWindow.rootEl.waitForDisplayed();

        await pages('doctors').AddDoctorModalWindow.closeBtn.click(pages('doctors').AddDoctorModalWindow.closeBtn.waitForDisplayed());

        await expect(pages('doctors').AddDoctorModalWindow.rootEl).not.toBeDisplayed();
    })
//basic scenario for HW
    it('Is modal window displayed? or exist on doctors page', async()=>{
        await pages('dashboard').sideMenu.item('doctors').click();
        await expect(pages('doctors').AddDoctorModalWindow.rootEl.isDisplayed());
        await expect(pages('doctors').AddDoctorModalWindow.rootEl.isExisting());
        await pages('doctors').doctorList.addNewDoctorBtn.click(pages('doctors').AddDoctorModalWindow.rootEl.waitForDisplayed());
        await pages('doctors').AddDoctorModalWindow.input('name').setValue('John Doe');
        await pages('doctors').AddDoctorModalWindow.input('name').addValue('One More');
        await pages('doctors').AddDoctorModalWindow.input('name').setValue('Basic command');
        await pages('doctors').AddDoctorModalWindow.closeBtn.click(pages('doctors').AddDoctorModalWindow.closeBtn.waitForDisplayed());
           await expect(pages('doctors').AddDoctorModalWindow.rootEl).not.toBeDisplayed();
           
    })

    //Advance commands

    it('Change Border of doctor choose dropdown', async () => {
        await pages('dashboard').sideMenu.item('doctors').click(pages('dashboard').sideMenu.item('doctors').waitForDisplayed());
        const docChoose = await pages('doctors').doctorList.addNewDoctorBtn;
        await browser.execute(function(docChoose){
            docChoose.style.border='red solid 2px';
        },docChoose)
        await browser.pause(4000);
    });
it('waitUntil', async() => {
    
    await pages('circular').open();
    const f = await pages('circular').circularsss.circle;
    await pages('circular').circularsss.reloadBtn.click(pages('circular').circularsss.reloadBtn.waitForDisplayed());
    await browser.waitUntil(
        async ()=>(await f.getText())==="100%",
        {
            timeout:4000,
            interval:600,
            timeoutMsg:'Not loaded',
        }
    )
});

    
    it('Choose Period of time in Calendar', async() => {
        await pages('dashboard').sideMenu.item('schedule').click(pages('dashboard').sideMenu.item('schedule').waitForDisplayed());
        const shift = '\uE008';
        await await pages('schedule').AppointmentTable.input('one').click(pages('schedule').AppointmentTable.input('one').waitForDisplayed());
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
        await await pages('schedule').AppointmentTable.input('four').click(pages('schedule').AppointmentTable.input('four').waitForDisplayed())
        await browser.pause(5000);
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
        await browser.pause(5000);
    });

    it('Cookie Actions', async() => {


        await browser.setCookies([{name: "andyCookie", value: "coookieActions"}]);

        await browser.pause(1500);

        console.log(await browser.getCookies(["andyCookie"]));

        await browser.pause(1500);

        await browser.deleteCookies(["andyCookie"]);

        await browser.pause(1500);
    });
    
})