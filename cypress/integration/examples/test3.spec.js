describe("Test API from the Fake JSON server", () => {

    it("Test POST functionality", () => {

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

            // verify that the user was made and has the same properties associated to those elements
            expect(res.body).has.property("name", "test")
            expect(res.body).has.property("salary", "123")
            expect(res.body).has.property("age", "23")
        })

    })
})   