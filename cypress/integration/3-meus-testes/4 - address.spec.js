/// <reference types="cypress" />
import EnderecoPage from '../../support/pages/address.page'
const dadosEndereco = require('../../fixtures/address.json')

describe('Funcionalidade Endereço de Entrega', () => {
  beforeEach(() => {
    cy.visit('minha-conta')
    cy.fixture('perfil').then(dados => {
      cy.login(dados.usuario, dados.senha)
    })
  })

  it('Cadastro com sucesso', () => { 
    let nome = 'Dani'
    let sobrenome = 'Lua'
    let empresa = 'Terra'
    let uf = 'Brasil'
    let endereco = 'Rua das Flores'
    let numero = '303'
    let cidade = 'Itajubá'
    let estado = 'Minas Gerais'
    let cep = '37500000'
    let telefone  = '35999887766'
    let email = 'dani@mail.net'
    EnderecoPage.editarEnderecoFaturamento(nome, sobrenome, empresa, uf, endereco, numero, cidade, estado, cep, telefone, email)
    cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso')
  })

  it.only('Cadastro com sucesso', () => { 
    EnderecoPage.editarEnderecoFaturamento(
      dadosEndereco[2].nome,
      dadosEndereco[2].sobrenome,
      dadosEndereco[2].empresa,
      dadosEndereco[2].uf,
      dadosEndereco[2].endereco,
      dadosEndereco[2].numero,
      dadosEndereco[2].cidade,
      dadosEndereco[2].estado,
      dadosEndereco[2].cep,
      dadosEndereco[2].telefone,
      dadosEndereco[2].email
      )
  })
})