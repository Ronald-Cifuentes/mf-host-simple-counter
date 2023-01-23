describe('Counter', () => {
  beforeEach(() => {
    cy.visit('https://mf-host-simple-counter.vercel.app/');
  });

  it('#1. test if Count increment in local Counter', () => {
    cy.get('.mt-10 > .border-2 > div').contains('Counter: 0');
    for (let i = 0; i < 10; i++) {
      cy.get('.border-2 > .bg-indigo-800').click();
    }
    cy.get('.mt-10 > .border-2 > div').contains('Counter: 10');
  });

  it('#2. test if Count increment in remote Header', () => {
    cy.get('div.py-2').contains('0');
    for (let i = 0; i < 10; i++) {
      cy.get('.border-2 > .bg-indigo-800').click();
    }
    cy.get('div.py-2').contains('10');
  });
});
