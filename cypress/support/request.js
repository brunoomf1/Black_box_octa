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
        failOnStatusCode: false,
    }).then(response => {
        cy.AssertListRequsition(expectedResponse,response)
        cy.writeFile('cypress/fixtures/Groups/groupListSave.json',response.body)
    })
   
})

Cypress.Commands.add('getGroupListToDelete',() =>{
    cy.request({
        method: 'GET',
        url: `http://teste-qa-95b5bac5.octax.co:8003/group/list`,
        failOnStatusCode: false,
    }).then(response => {
        cy.writeFile('cypress/fixtures/Groups/groupListSave.json',response.body)
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

//Counterparty -----------------------------

Cypress.Commands.add('createCounterparty',(counterpartyData,expectedResponse) =>{
    cy.request({
        method: 'POST',
        url: "http://teste-qa-95b5bac5.octax.co:8003/counterparty",
        body : {
            counterparty_name: counterpartyData.counterparty_name,
            cnpj: counterpartyData.cnpj,
            product_type: counterpartyData.product_type,
            automatic_flow: counterpartyData.automatic_flow,
            daily_limit: counterpartyData.daily_limit,
            group_name: counterpartyData.group_name
          },
        failOnStatusCode: false,  
    })
    .then(response => {
        cy.AssertRequsition(expectedResponse,response)
    })
})

Cypress.Commands.add('updateCounterparty',(counterpartyData,expectedResponse) =>{
    cy.request({
        method: 'PUT',
        url: "http://teste-qa-95b5bac5.octax.co:8003/counterparty",
        body : {
            counterparty_name: counterpartyData.counterparty_name,
            cnpj: counterpartyData.cnpj,
            product_type: counterpartyData.product_type,
            automatic_flow: counterpartyData.automatic_flow,
            daily_limit: counterpartyData.daily_limit,
            group_name: counterpartyData.group_name
          },
        failOnStatusCode: false
    })
    .then(response => {
        cy.AssertRequsition(expectedResponse,response)
    })
})

Cypress.Commands.add('deleteCounterparty',(counterpartyCNPJ,expectedResponse) =>{
    cy.request({
        method: 'DELETE',
        url: 'http://teste-qa-95b5bac5.octax.co:8003/counterparty'+counterpartyCNPJ,
        failOnStatusCode: false,
    })
    .then(response => {
        cy.AssertRequsition(expectedResponse,response)
     })
})

Cypress.Commands.add('getCounterpartyList',(expectedResponse) =>{
    cy.request({
        method: 'GET',
        url: `http://teste-qa-95b5bac5.octax.co:8003/counterparty/list`,
        failOnStatusCode: false,
    }).then(response => {
        cy.AssertListRequsition(expectedResponse,response)
        cy.writeFile('cypress/fixtures/Counterparty/counterpartyListSave.json',response.body)
    })
   
})

Cypress.Commands.add('getCounterpartyListToDelete',() =>{
    cy.request({
        method: 'GET',
        url: `http://teste-qa-95b5bac5.octax.co:8003/counterparty/list`,
        failOnStatusCode: false,
    }).then(response => {
        cy.writeFile('cypress/fixtures/Counterparty/counterpartyListSave.json',response.body)
    })
   
})

Cypress.Commands.add('populateCounterparty',(counterpartyData) =>{
    cy.request({
        method: 'POST',
        url: "http://teste-qa-95b5bac5.octax.co:8003/counterparty",
        body : {
            counterparty_name: counterpartyData.counterparty_name,
            cnpj: counterpartyData.counterpartyCNPJ,
            product_type: counterpartyData.product_type,
            automatic_flow: counterpartyData.automatic_flow,
            daily_limit: counterpartyData.daily_limit,
            group_name: counterpartyData.group_name
          },
        failOnStatusCode: false     
    })
})
Cypress.Commands.add('cleanCounterparty',(counterpartyCNPJ) =>{
        cy.request({
            method: 'DELETE',
            url: 'http://teste-qa-95b5bac5.octax.co:8003/counterparty/'+counterpartyCNPJ,
            failOnStatusCode: false
        }) 
})