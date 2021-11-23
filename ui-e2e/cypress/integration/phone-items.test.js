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
        cy.get('.phone-pop-up-container').should('not.exist')
    });

    it("Close phone details clicking otside of the modal", () => {
        cy.get('.list-container li').first().click()
        cy.get('body').click(0, 0)
        cy.get('.phone-pop-up-container').should('not.exist')
    });

    it("PhonePreviews should be displayed in alphabetical order", () => {
        cy.get('.list-container li h3').first().as("firstPhoneName")
        cy.get('.list-container li h3').last().as("lastPhoneName")
            .then(() => expect("@firstPhoneName" > "@lastPhoneName").to.eq(false))
        
    });

    it("PhonePreviews should be displayed in non-alphabetical order when filter clicked", () => {
        cy.get('.filter-options input').last().click()
            .then(() => {
                cy.get(':nth-child(1) > h3').as("firstPhoneName")
                cy.get(':nth-child(2) > h3').as("lastPhoneName")
                expect("@firstPhoneName" > "@lastPhoneName").to.eq(true)
            })
    });
})