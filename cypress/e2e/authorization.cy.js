// npx cypress open

describe('Тестирование формы авторизации', function () {
    
    it('Позитивный кейс авторизации', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').click().type('german@dolnikov.ru');
        cy.get('#pass').click().type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.contains('Авторизация прошла успешно').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
         })

    it('Проверка логики восстановления пароля', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#forgotEmailButton').click();
        cy.get('#mailForgot').type('abcd@mail.ru');
        cy.get('#restoreEmailButton').click();
        cy.contains('Успешно отправили пароль на e-mail').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
         })

    it('Негативный кейс авторизации - правильный логин, неправильный пароль', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').click().type('german@dolnikov.ru');
        cy.get('#pass').click().type('iLoveqastudio');
        cy.get('#loginButton').click();
        cy.contains('Такого логина или пароля нет').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
         })

    it('Негативный кейс авторизации - неправильный логин, правильный пароль', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').click().type('abc@dolnikov.ru');
        cy.get('#pass').click().type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.contains('Такого логина или пароля нет').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
         })

    it('Негативный кейс авторизации - логин без @, правильный пароль', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').click().type('germandolnikov.ru');
        cy.get('#pass').click().type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.contains('Нужно исправить проблему валидации').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
         })

    it('Ппроверка на приведение к строчным буквам в логине', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').click().type('GERman@Dolnikov.ru');
        cy.get('#pass').click().type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.contains('Авторизация прошла успешно').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
         })
})
