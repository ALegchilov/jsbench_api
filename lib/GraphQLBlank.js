class GraphQLBlank {

    /**
     * Creates a New GraphQLBlank object.
     * @constructor
     * @return {GraphQLBlank} New GraphQLBlank object
     * @param {string} graphQLQuery - Requested Query
     **/
    constructor(graphQLQuery) {
        this.operationName = null;
        this.variables = {};
        this.query = graphQLQuery;
    }
}

module.exports = GraphQLBlank;
