/// <reference types="cypress" />

describe('Funcionalidade página de produtos', () => {
  beforeEach(() => {
    cy.visit('/produtos')
  })

  it('Selecionar um produto da lista', () => {
    cy.get('[class="product-block grid"]')
      // .first()
      // .last()
      // .eq(3)
      .contains('Ariel Roll Sleeve Sweatshirt')
      .click()
  })

  it('Adicionar produto ao carrinho', () => {
    let quantidade = 3

    cy.get('[class="product-block grid"]')
    cy.contains('Argus All-Weather Tank').click()
    cy.get('.button-variable-item-M').click()
    cy.get(':nth-child(2) > .value > .variable-items-wrapper > .variable-item').click()
    cy.get('.input-text').clear().type(quantidade)
    cy.get('.single_add_to_cart_button').click()

    cy.get('.dropdown-toggle > .mini-cart-items').should('contain', quantidade)
    cy.get('.woocommerce-message').should('contain', quantidade + ' × “Argus All-Weather Tank” foram adicionados no seu carrinho.')
  })

  it.only('Adicionar produto ao carrinho com comando customizado', () => {
    let produto = 'Aether Gym Pant'
    let tamanho = '33'
    let cor = 'Green'
    let quantidade = 2
    
    cy.product(produto, cor, tamanho, quantidade)

    cy.get('.dropdown-toggle > .mini-cart-items').should('contain', quantidade)
    cy.get('.woocommerce-message').should('contain', quantidade + ' × “Aether Gym Pant” foram adicionados no seu carrinho.')
  })

})