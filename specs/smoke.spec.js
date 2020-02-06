const sendRequest = require("../lib/request");
const example = require("../examples/base");
const data = require("../data/getREST");

describe("Verify the service availability", function () {
    let response;

    beforeAll(async function () {
        response = await sendRequest(data);
    });

    it("should status code 200", async function () {
        const statusCode = await response.statusCode;
        expect(statusCode).toEqual(200);
    });

    it("should have 3 types of data(characters, location, episode)", function () {
        expect(Object.keys(response.body).length).toEqual(3);
    });

    it('should have the same body as example', function () {
        expect(response.body).toEqual(example);
    });
});
