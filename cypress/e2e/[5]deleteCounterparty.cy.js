/// <reference types="cypress" />

import counterpartyRequestStatus from "../fixtures/Counterparty/counterpartyRequestStatus.json"
import counterpartyNameData from "../fixtures/Counterparty/counterpartyData.json"


describe('Deleção de Contrapartes', () => {


    it('[+] Deletar Contrapartes existentes com sucesso',function() {
        const Expectedstatus = counterpartyRequestStatus.deleteCounterparty.Successful
        const counterpartyData = counterpartyNameData.CorrectData

        counterpartyData.forEach(function(counterparty){
            cy.populateCounterpart(counterparty)

            cy.deleteCounterpart(counterparty.cnpj,Expectedstatus)

            cy.cleanCounterparty(counterparty.cnpj)

        })

    })

    it('[-] Deletar uma contraparte que não existe',function(){
        const Expectedstatus = counterpartyRequestStatus.deleteCounterparty.DontExist
        const counterpartyData = counterpartyNameData.CorrectData
        
        cy.deleteCounterpart(counterpartyData.cnpj,Expectedstatus)

    })


})
