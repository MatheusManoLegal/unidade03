describe('template spec', () => {
  it('passes', () => {
    beforeEach( () => {
			cy.visit('http://localhost:3000/')
		})
  })
  cy.getByData('titulo-principal')  
})