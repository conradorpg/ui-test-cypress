/// <reference types="cypress" />
import EnderecoPage from '../../support/pages/address.page'

describe('Funcionalidade Endereço de Entrega', () => {
  beforeEach(() => {
    cy.visit('minha-conta')
    cy.fixture('perfil').then(dados => {
      cy.login(dados.usuario, dados.senha)
    })
  })

  it('Cadastro com sucesso', () => {
    EnderecoPage.editarEnderecoFaturamento('Dani', 'Lua', 'Terra', 'Brasil', 'Rua das Flores', '303', 'Itajubá', 'Minas Gerais', '37500000', '35999887766', 'dani@mail.net')
  })
})