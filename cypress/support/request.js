//Requisições enviadas para a API

//CRIAR UM GRUPO E VERIFICAR A RESPOSTA
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

//PEGA A LISTA DE GRUPOS, CHECA A RESPOSTA E SALVA EM UM JSON
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

//PEGA A LISTA DE GRUPOS E SALVA EM UM JSON
Cypress.Commands.add('getGroupListToDelete',() =>{
    cy.request({
        method: 'GET',
        url: `http://teste-qa-95b5bac5.octax.co:8003/group/list`,
        failOnStatusCode: false,
    }).then(response => {
        cy.writeFile('cypress/fixtures/Groups/groupListSave.json',response.body)
    })
   
})

//DELETA UM GRUPO E CHECA A RESPSOTA
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

//DELTA UM GRUPO CRIADO
Cypress.Commands.add('cleanGroups',(groupName) =>{
    cy.request({
        method: 'DELETE',
        url: 'http://teste-qa-95b5bac5.octax.co:8003/group/'+groupName,
        failOnStatusCode: false
    })
})

//CRIA UM NOVO GRUPO
Cypress.Commands.add('populateGroups',(groupName) =>{
    cy.request({
        method: 'POST',
        url: "http://teste-qa-95b5bac5.octax.co:8003/group/"+groupName,
        failOnStatusCode: false
    })
})


//Counterparty -----------------------------

//CRIA UMA CONTRAPARTE E VERIFICA A RESPOSTA
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

//ATUALIZA UMA CONTRAPARTE E VERIFICA A RESPOSTA
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

//DELETA UMA CONTRAPARTE PELO CNJP E VERIFICA A RESPOSTA
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

//PEGA UMA LISTA DE CONTRAPARTES, SALVA EM JSON E CHECA A RESPOSTA
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

//PEGA UMA LISTA DE CONTRAPARTES, SALVA EM JSON
Cypress.Commands.add('getCounterpartyListToDelete',() =>{
    cy.request({
        method: 'GET',
        url: `http://teste-qa-95b5bac5.octax.co:8003/counterparty/list`,
        failOnStatusCode: false,
    }).then(response => {
        cy.writeFile('cypress/fixtures/Counterparty/counterpartyListSave.json',response.body)
    })
   
})

//CRIA UMA CONTRAPARTE
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

//DELETA UMA CONTRAPARTE
Cypress.Commands.add('cleanCounterparty',(counterpartyCNPJ) =>{
        cy.request({
            method: 'DELETE',
            url: 'http://teste-qa-95b5bac5.octax.co:8003/counterparty/'+counterpartyCNPJ,
            failOnStatusCode: false
        }) 
})