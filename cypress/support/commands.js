// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
Cypress.Commands.add('dateTime', () => {
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date+' '+time;
    return dateTime
})


Cypress.Commands.add('requestLog', (text) => {
    cy.dateTime().then(dateTime => {
        cy.writeFile('cypress/support/logs.txt',`${text} -- ${dateTime} \n`, { flag: 'a+' })
    })
})


Cypress.Commands.add('AssertRequsition', (groupName,expectedStatus,response) => {
    
    const jsonMessage = response.body.message

    expect(response.status).to.eq(expectedStatus.code)
    expect(jsonMessage).to.eq(expectedStatus.message)
    
    cy.requestLog(`${groupName} status: ${response.status} --- message ${JSON.stringify(jsonMessage)}`)
})


//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })