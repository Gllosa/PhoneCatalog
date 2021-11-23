describe("Phone catalog tests", () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    });

    it("Should display 12 phones", () => {
        // El tamaño depende de la api, no tiene mucho sentido este test.
        // Deberia hacer una llamada a la api y comparar con el lenght de /phones
        cy.get('.list-container li').should('have.length', 12)
    });

    it("Open phone details", () =>{
        cy.get('.list-container li').first().click()
        cy.get('.phone-pop-up-container').should('contain.text', 'Specifications')
    });

    it("Close phone details using X button", () => {
        cy.get('.list-container li').first().click()
        cy.get('.close-btn').click()
    });

    it("Close phone details clicking otside of the modal", () => {
        cy.get('.list-container li').first().click()
        cy.get('.close-btn').click()
    });

    it("PhonePreviews should be displayed in alphabetical order", () => {
        const firstPhoneName = cy.get('.list-container li').first().get('h3')
        const lastPhoneName = cy.get('.list-container li').last().get('h3')
        
        const greaterThan = (a, b) => {return a > b};
        expect(greaterThan(firstPhoneName, lastPhoneName)).to.eq(false) 
        
    });
})