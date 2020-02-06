const sendRequest = require("../lib/request");
const data = require("../data/postGraphQL");
const GraphQLBlank = require("../lib/GraphQLBlank");

describe("Verify GraphQL responses.", function () {
    let response;

    it("should return all alive characters with name 'rick' ", async function () {
        data.body = new GraphQLBlank("{characters(filter:{gender:\"male\",status:\"alive\",name:\"rick\",species:\"human\"}){info{count pages}results{name origin{name}}}}");
        response = await sendRequest(data);
        expect(response.body.data.characters.info.count).toEqual(19);
    });

    [{id: 1, count: 31}, {id: 35, count: 4}].forEach(inputData => {
        it('should return amount of episodes with predefined character', async function () {
            data.body = new GraphQLBlank(`query { character(id: ${inputData.id}) { episode{name}}}`);
            response = await sendRequest(data);
            expect(response.body.data.character.episode.length).toEqual(inputData.count);
        });
    });


    it('"Created Date" field should match ISO 8601 Extended format YYYY-MM-DDTHH:mm:ss:sssZ', async function () {
        data.body = new GraphQLBlank("query{locations{results{created}}}");
        response = await sendRequest(data);
        let dateArr = response.body.data.locations.results.map(object => object.created);

        dateArr.forEach(date => expect(date).toMatch(/^(\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3})Z$/));
    });
});
