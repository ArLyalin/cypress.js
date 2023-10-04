describe('Тестирование покемонов', function () {
    
    it('Покупка нового фото для своего тренера', function () {
        cy.visit('https://pokemonbattle.me/login');
        cy.get(':nth-child(1) > .auth__input').type('m4rlboro97@yandex.ru');
        cy.get('#password').type('ZRHs6Q8xLrsr3Rh');
        cy.get('.auth__button').click();
        cy.get('.header__btns > [href="/shop"]').click();
        cy.get(':nth-child(12) > .shop__button').click();
        cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('5100000000000008');
        cy.get(':nth-child(1) > .pay_base-input-v2').type('1228');
        cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125');
        cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('abc def');
        cy.get('.pay-btn').click();
        cy.get('#cardnumber').type('56456');
        cy.get('.payment__submit-button').click();
        cy.contains('Покупка прошла успешно').should('be.visible');
        cy.get('.payment__adv').should('be.visible');
        cy.get('.payment__adv').click();
        cy.get(':nth-child(4) > .shop__button').click();
        cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('5100000000000008');
        cy.get(':nth-child(1) > .pay_base-input-v2').type('1228');
        cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125');
        cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('abc def');
        cy.get('.pay-btn').click();
        cy.get('#cardnumber').type('56456');
        cy.get('.payment__submit-button').click();
        cy.contains('Покупка прошла успешно').should('be.visible');
        cy.get('.payment__adv').should('be.visible');
         })
})