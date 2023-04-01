/// <reference types="cypress" />

context('Funcionalidade Login', () => {

    beforeEach(() => {
      cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/');
    });
  
    it('Deve fazer login com sucesso', () => {
      cy.get('#password').type('teste@teste.com');
      cy.get('.woocommerce-form > .button').click();
      cy.get('.page-title').should('contain', 'Minha conta');
    });
  
    it('Deve exibir uma mensagem de erro ao inserir usuario invalido', () => {
      cy.get('#username').type('aluno_ebac@erro.com');
      cy.get('#password').type('teste@teste.com');
      cy.get('.woocommerce-form > .button').click();
      cy.get('.woocommerce-error > li').should('contain', 'Endereço de e-mail desconhecido.')
    });
  
    it('Deve exibir uma mensagem de erro ao inserir senha invalida', () => {
      cy.get('#username').type('aluno_ebac@teste.com');
      cy.get('#password').type('teste@erro.com');
      cy.get('.woocommerce-form > .button').click();
      cy.get('.woocommerce-error > li').should('contain', 'Erro: a senha fornecida para')
    });
  
  
  })