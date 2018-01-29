describe('Figuring out input form', () => {
	beforeEach(() => {
		cy.visit('/')
	})

	it.only('Submits stubbed route?', () => {
		cy.server()	

		cy.get('input[name=UID]').type(12149)
		cy.get('input[name=PCode]').type('M6G 2R3')

		cy.route({
			method: 'POST',
			url: '/graphql',
			response: {
			  "data": {
			    "evaluationsFor": {
			      "yearBuilt": "1894"
			    }
			  }
			}
		})
		
		cy.get('form').submit()
	})
})