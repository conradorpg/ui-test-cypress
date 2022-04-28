class EnderecoPage {
  editarEnderecoFaturamento(nome, sobrenome, empresa, uf, endereco, numero, cidade, estado, cep, telefone, email) {
    // let nome = 'Maria'
    // let sobrenome = 'Da Silva'
    // let empresa = 'EBAC'
    // let uf = 'Mongólia'
    // let endereco = 'Av. São João'
    // let numero = '405'
    // let cep = '01001000'
    // let telefone  = '11999887766'
    // let email = 'maria@mail.net'
    // let cidade = 'São Paulo'
    // let estado = 'São Paulo'

    cy.get('.woocommerce-MyAccount-navigation-link--edit-address > a').click()
    cy.get(':nth-child(1) > .title > .edit').click()

    cy.get('#billing_first_name').clear().type(nome)
    cy.get('#billing_last_name').clear().type(sobrenome)
    cy.get('#billing_company').clear().type(empresa)

    cy.get('#select2-billing_country-container').click().type(uf)
    cy.get('.select2-results').should('contain', uf).click()
    cy.get('#billing_address_1').clear().type(endereco)
    cy.get('#billing_address_2').clear().type(numero)
    cy.get('#billing_city').clear().type(cidade)
    cy.get('#select2-billing_state-container').click().type(estado)
    cy.get('#select2-billing_state-results').should('contain', estado).click()
    cy.get('#billing_postcode').clear().type(cep)
    cy.get('#billing_phone').clear().type(telefone)
    cy.get('#billing_email').clear().type(email)
    cy.get('.button').click()

    cy.contains('Endereço alterado com sucesso.')
    cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso.')
  }

  editarEnderecoEntrega () {
    //elementos + ações
  }
}

export default new EnderecoPage()