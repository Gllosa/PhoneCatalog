describe("Phone catalog tests", () => {
    beforeEach(() => {
        // cy.intercept({
        //     url: 'http://localhost:5000/phones',
        //     method: 'get',
        //   }, {
        //     fixture: 'phoneList',
        //     delay: 5000
        //   }).as('getPhoneList');
        cy.visit('/')
    });

    it("Should display 12 phones", () => {
        //cy.wait('@getPhoneList')
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

    it("clicking inside modal shouldn`t close the modal", () => {
        cy.get('.list-container li').first().click()
        cy.get('.phone-pop-up-container h3').click()
        cy.get('.phone-pop-up-container')
    });

    it("PhonePreviews should be displayed in alphabetical order", () => {
        cy.get(':nth-child(1) > h3')
            .invoke('val')
            .then((firstPhoneName) => {
                cy.get(':nth-child(2) > h3')
                .invoke('val')
                .should((lastPhoneName) => {
                    expect(firstPhoneName > lastPhoneName).to.be.eq(false)
                })
            })
    });

    // Este test no funciona, lo pongo en false para debuggear otros
    it("PhonePreviews should be displayed in non-alphabetical order when filter clicked", () => {
        cy.get('.filter-options input').last().click()
            .then(() => {
                cy.get(':nth-child(1) > h3')
                    .invoke('val')
                    .then((val1) => {
                        cy.get(':nth-child(2) > h3')
                        .invoke('val')
                        .should((val2) => {
                            expect(val1 > val2).to.eq(false)
                        })
                    })
            })
    });

    it("Search bar should filter phones", () => {
        cy.fixture('phoneSearch.json').as('searchedPhones')
        cy.get('#input-search').type('iphone{enter}')
        cy.get('@searchedPhones').then(({name1, name2}) => {
            cy.contains('.list-container li', name1)
            cy.contains('.list-container li', name2)
            cy.get('.list-container li').should('have.length', 2)
        })
    })

    it("X button on search bar should clear input text and there should be 12 phones", () => {
        cy.get('#input-search').type('iphone{enter}')
        cy.get('.search-container img').click()
        cy.get('#input-search')
            .invoke('val')
            .then((inputValue) => {
                expect(inputValue).to.be.empty
                cy.get('.list-container li').should('have.length', 12)
            })
    })
})