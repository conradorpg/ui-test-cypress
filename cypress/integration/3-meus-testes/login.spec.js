/// <reference types="cypress" />

context('Funcionalidade Login', () => {

  beforeEach(() => {
    cy.visit('http://lojaebac.ebaconline.art.br/minha-conta') 
  })

  afterEach(() => {
    cy.screenshot()
  })
  
  it('Login com sucesso', () => {
      cy.get('#username').type('aluno_ebac@teste.com')
      cy.get('#password').type('teste@teste.com')
      cy.get('.woocommerce-form > .button').click()
      cy.get('.woocommerce-MyAccount-navigation-link--customer-logout > a').should('contain', 'Sair')
  })

  it('Login senha errada', () => {
      cy.get('#username').type('aluno_ebac@teste.com')
      cy.get('#password').type('senha-errada@teste.com')
      cy.get('.woocommerce-form > .button').click()
      cy.get('.woocommerce-error > li').should('contain', 'Perdeu a senha?')      
  })

  it('Login usuario errado', () => {
      cy.get('#username').type('usuario-errado@teste.com')
      cy.get('#password').type('teste@teste.com')
      cy.get('.woocommerce-form > .button').click()
      cy.get('.woocommerce-error > li').should('contain', 'Endereço de e-mail desconhecido')      
  })

})