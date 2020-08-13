describe('Visit start page', () => {
  it('Should be able to visit home page', () => {
    cy.visit('/');

    cy.get('.header').should('contain', 'Total of pokemon:');

    cy.get('[data-cy=page-title]').should('contain', 'PokeDex');
  });
});
