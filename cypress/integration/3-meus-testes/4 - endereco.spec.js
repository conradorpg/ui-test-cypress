/// <reference types="cypress" />

describe('Funcionalidade Endereço de Entrega', () => {
  beforeEach(() => {
    cy.visit('minha-conta')
    cy.fixture('perfil').then(dados => {
      cy.login(dados.usuario, dados.senha)
    })
  })

  it('Cadastro com sucesso', () => {
    // cadastro de endereço de entrega
  })
})