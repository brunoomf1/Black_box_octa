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

// PEGA A DATA E A HORA DO SISTEMA
Cypress.Commands.add('dateTime', () => {
    var today = new Date();
    var date = (today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear());
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date+' '+time;
    return dateTime
})

//CRIA LOG NO ARQUIVO log.txt DE UM TEXTO E DA HORA.
Cypress.Commands.add('requestLog', (text) => {
    cy.dateTime().then(dateTime => {
        cy.writeFile('cypress/support/logs.txt',`${text} -- ${dateTime} \n`, { flag: 'a+' })
    })
})

//CHECA A RESPOSTA DA REQUISIÇÃO E ENVIA O LOG PARA SER SALVO.
Cypress.Commands.add('AssertRequsition', (expectedStatus,response) => {
    
    const jsonbody = response.body
  
    cy.requestLog(`Responsestatus: ${JSON.stringify(response.status)}|Expectedstatus: ${JSON.stringify(expectedStatus.code)} --- message ${JSON.stringify(jsonbody.message)}`)
    
    expect(response.status).to.eq(expectedStatus.code)
    
})

//CHECA SE UM GRUPO EXISTE EM UMA LISTA DE GRUPOS
Cypress.Commands.add('groupExistsInList', (expectedItem,assert) => {

    cy.readFile('cypress/fixtures/Groups/groupListSave.json').then(groupListJson =>{
        var groupListSave = []
        groupListJson.forEach(function(i){
            groupListSave.push(i.group_name)
        })

        var assertion = groupListSave.includes(`${expectedItem}`)
        expect(assertion).to.eq(assert)
     
    })
})

// CHECA SE UMA CONTRAPARTE EXISTE EM UMA LISTA
Cypress.Commands.add('counterpartyExistsInList', (expectedItem,assert) => {

    cy.readFile('cypress/fixtures/Counterparty/counterpartyListSave.json').then(ListJson =>{
        var ListSave = []
        ListJson.forEach(function(i){
            ListSave.push(i.cnpj)
        })
          
        var assertion = ListSave.includes(`${expectedItem}`)
        expect(assertion).to.eq(assert)

    })
})

//CHECA AS RESPSOTA DAS REQUISIÇÕES DE UMA LISTA E SE A LISTA NÃO ESTÁ VAZIA
Cypress.Commands.add('AssertListRequsition', (expectedStatus,response) => {
    
    expect(response.status).to.eq(expectedStatus.code)
    expect(response.body).to.not.empty
    
    cy.requestLog(`Responsestatus: ${JSON.stringify(response.status)}|Expectedstatus: ${JSON.stringify(expectedStatus.code)} --- message ${JSON.stringify(response.body.message)}`)
})

//DELETA TODOS OS GRUPOS EXISTENTES NECESSARIO LISTAR OS GRUPOS ANTES
Cypress.Commands.add('deleteAllGroups', () => {

    cy.readFile('cypress/fixtures/Groups/groupListSave.json').then(groupListJson =>{
        groupListJson.forEach(function(group){
            cy.cleanGroups(group.group_name)
        })
     
    })
})

//DELETA TODOS AS CONTRAPARTE EXISTENTES NECESSARIO LISTAR AS CONTRAPARTE ANTES
Cypress.Commands.add('deleteAllCounterpartys', () => {

    cy.readFile('cypress/fixtures/Counterparty/counterpartyListSave.json').then(groupListJson =>{
        groupListJson.forEach(function(group){
            cy.cleanCounterparty(group.cnpj)
        })
     
    })
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