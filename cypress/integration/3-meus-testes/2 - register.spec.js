/// <reference types="cypress" />
const {faker} = require('@faker-js/faker')

describe('Realizar registro do usuário', () => {
  beforeEach(() => {
    cy.visit('/minha-conta')
  })
  
  
  it('Registrar usuário com sucesso', () => {
    let nome = faker.name.firstName()
    let sobrenome = faker.name.lastName()
    let email = faker.internet.email(nome)

    cy.get('#reg_email').type(email)
    cy.get('#reg_password').type('test@123')
    cy.get(':nth-child(4) > .button').click()

    cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
    cy.get('#account_first_name').type(nome)
    cy.get('#account_last_name').type(sobrenome)
	  // cy.get('#account_display_name').type('TestCy')
	  // cy.get('#account_email').type('test+8@mail.com')
	  cy.get('.woocommerce-Button').click()

    cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso')
    cy.get('.woocommerce-MyAccount-navigation-link--customer-logout > a').should('contain', 'Sair')
    cy.screenshot()  
  })

  it('Registrar usuário usando comandos personalizados', () => {
    let nome = faker.name.firstName()
    let sobrenome = faker.name.lastName()
    let email = faker.internet.email(nome)
    cy.register(email, 'test@123', nome, sobrenome)

    cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso')
    cy.get('.woocommerce-MyAccount-navigation-link--customer-logout > a').should('contain', 'Sair')
    cy.screenshot()
  })

})

