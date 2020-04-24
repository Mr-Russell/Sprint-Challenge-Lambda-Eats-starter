describe('Form Test', ()=>{
    
    it ('can navigate to webpage', ()=>{
        cy.visit('http://localhost:3000/')
    })

    it ('Can click on "Pizza" button', ()=>{
        cy.contains('Pizza?')
        .click()
    })

    it ('Can enter an "Order Name"', ()=>{
        cy.get('input[name="name"]')
        .type('Leonardo')
    })

    it ('Can select multiple toppings', ()=>{
        cy.get('input[name="pepperoni]')
        .check()

        cy.get('input[name="bacon"]')
        .check()

        cy.get('input[name="exCheese"]')
        .check()
    })

    it ('Can submit order form', ()=>{
        cy.contains('Submit Your Order!')
        .click()
    })
    
    // it('Can enter a "name"', ()=>{
    //     cy.get('input[name="name"]')
    //         .type('Lebowski')
    //         .should('have.value', 'Lebowski')
    // })

    // it ('Can enter an "email"', ()=>{
    //     cy.get('input[name="email"]')
    //         .type('jeffrey@lebowski.com')
    // })

    // it ('Can enter an "password"', ()=>{
    //     cy.get('input[name="password"]')
    //         .type('12345678')
    // })

    // it ('Can check "Terms of Service" box', ()=>{
    //     cy.get('input[name="tos"]')
    //         .check()
    // })
    
    // it ('Can Submit the completed form', ()=>{
    //     cy.contains('Submit')
    //         .click()
    // })

    // it ('Checks form validation if an input is left empty', ()=>{
    //     cy.get('input[name="name"]')
    //         .should('have.value', '')
        
    //         cy.get('.errors')
    //             .contains('A Username is Required!')
    //             .should('exist')

    //     cy.get('input[name="email"]')
    //         .type('a')
    //         .should('have.value', 'a')

    //         cy.get('.errors')
    //             .contains('Must Use a VALID Email Address')
    //             .should('exist')

    //     cy.get('input[name="password"]')
    //         .type('a')
    //         .should('have.value', 'a')

    //         cy.get('.errors')
    //             .contains('You Must Enter a Password to Proceed')
    //             .should('exist')
    // })
})