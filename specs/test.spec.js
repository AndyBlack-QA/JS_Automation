const {sendRequest} = require ("../helpers/api.helper");

const testData = require("../config/data.json");
const { expect } = require("chai");

//Read (using get() method): list all resources / get a resource / filter resources;
describe("API test suite", ()=>{
    it ("GET post /1", async () => {
        const response = await sendRequest("posts/1")
        expect(response.data.userId).to.equal(1);
        expect(response.status).to.equal(200);
    });

    it("Post posts",async()=>{
        const response = await sendRequest("posts",testData.postData,"post");
        expect(response.status).to.equal(201);
    });
});

    //Create a resource (using post() method);
    describe("Post test",()=>{
    it("Should create a new resource",async()=>{
        testingData = {
            "title": "Andy",
            "body": "bar",
            "userId": 455
        }
        const response = await sendRequest("posts",testData.testingData,"post")
        expect(response.data.title).to.equal("Andy")
        expect(response.data.userId).to.equal(455)
        expect(response.data.userId).not.to.equal(500)
    })
});
    
//Update a resource (using put() method);
    describe("Put to update",()=>{
    it("Should update a new resource",async()=>{
        const responsik = await sendRequest("posts/1",testData.testikData,"put")
        expect(responsik.data.title).to.equal("updated")
    })
    });

    describe("Delete method",()=>{
    it("should delete Resouce",async()=>{
        const responsikk = await sendRequest("posts/1",null,"delete")
        expect(responsikk.status).to.equal(200)
        expect(responsikk.data).to.eql({ })
    })
})

//negative scenario
    describe("post to unexisting record",()=>{
    it ("Should return an error 404", async () => {
        const response = await sendRequest("posts/700")
        expect(response.status).to.equal(404)
    });
});