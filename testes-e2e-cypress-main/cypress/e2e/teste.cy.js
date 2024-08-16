describe('template spec', () => {
  beforeEach( () => {
		cy.visit('http://localhost:3000/')
  })
    it('Deve redenrizar h1 com texto correto!', () => {
      cy.getByData('titulo-principal').contains('Experimente mais liberdade no controle de sua vida financeira. Crie sua conta com a gente!')
  })
})