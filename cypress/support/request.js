Cypress.Commands.add('createGroup',(groupName,expectedResponse) =>{
    cy.request({
        method: 'POST',
        url: "http://teste-qa-95b5bac5.octax.co:8003/group/"+groupName,
        failOnStatusCode: false
    })
    .then(response => {
        cy.AssertRequsition(expectedResponse,response)
    })
})


Cypress.Commands.add('getGroupList',(expectedResponse) =>{
    cy.request({
        method: 'GET',
        url: `http://teste-qa-95b5bac5.octax.co:8003/group/list`,
    }).then(response => {
        cy.AssertListRequsition(expectedResponse,response)
        cy.writeFile('cypress/fixtures/groupListSave.json',response.body)
    })
   
})


Cypress.Commands.add('deleteGroup',(groupName,expectedResponse) =>{
    cy.request({
        method: 'DELETE',
        url: 'http://teste-qa-95b5bac5.octax.co:8003/group/'+groupName,
        failOnStatusCode: false,
    })
    .then(response => {
        cy.AssertRequsition(expectedResponse,response)
     })
})

Cypress.Commands.add('cleanGroups',(groupName) =>{
    cy.request({
        method: 'DELETE',
        url: 'http://teste-qa-95b5bac5.octax.co:8003/group/'+groupName,
        failOnStatusCode: false
    })
})

Cypress.Commands.add('populateGroups',(groupName) =>{
    cy.request({
        method: 'POST',
        url: "http://teste-qa-95b5bac5.octax.co:8003/group/"+groupName,
        failOnStatusCode: false
    })
})