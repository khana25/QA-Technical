describe("Test API from the Fake JSON server", () => {

    it("Test POST functionality of JSON server", () => {

        cy.server();

        cy.route({
            method: 'POST',
            url: "http://dummy.restapiexample.com/create",
            body: {
                "name": "test",
                "salary": "123",
                "age": "23"

            }

        }).then((res) => {
            expect(res.body).has.property("age", "23")
        })

    })
})   