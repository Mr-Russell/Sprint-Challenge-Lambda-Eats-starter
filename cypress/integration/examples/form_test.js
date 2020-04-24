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
        cy.get('input[name="pepperoni"]')
        .check()

        cy.get('input[name="bacon"]')
        .check()

        cy.get('input[name="exCheese"]')
        .check()
    })

    it ('Can enter "Special instructions"', ()=>{
        cy.get('input[name="instructions"]')
        .type('Extra cirspy, Dude!')
    })

    it ('Can submit order form', ()=>{
        cy.contains('Submit Your Order!')
        .click()
    })

    it ('Can anvigate back to the home page after form submission', ()=>{
        cy.contains('Back to Home Page')
        .click()
    })
    
})