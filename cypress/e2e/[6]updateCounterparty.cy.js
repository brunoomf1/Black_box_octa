/// <reference types="cypress" />

import counterpartyRequestStatus from "../fixtures/Counterparty/counterpartyRequestStatus.json"
import counterpartyNameData from "../fixtures/Counterparty/counterpartyData.json"



describe("Criar uma contraparte", function(){

    context('[-] Atualizar uma contraparte com mesmos dados',function(){
        const Expectedstatus = counterpartyRequestStatus.createCounterparty.WrongData
        const counterpartyData = counterpartyNameData.CorrectData
        
        
        counterpartyData.forEach(function(counterparty){
          
            it(`[+] Atualizar uma contraparte com mesmos dados com ${counterparty.test}`,function(){

                cy.populateGroups(counterparty.data.group_name)
                cy.populateCounterparty(counterparty.data)
                cy.updateCounterparty(counterparty.data,Expectedstatus)
                
                cy.getGroupListToDelete()
                cy.getCounterpartyListToDelete()
                cy.deleteAllGroups()
                cy.deleteAllCounterpartys()

            })
        })
    })
    
    context('[-] falha ao atualizar uma contraparte com campo vazio',function(){
        const Expectedstatus = counterpartyRequestStatus.createCounterparty.Empty
        const counterpartyData = counterpartyNameData.Empty
        
        counterpartyData.forEach(function(counterparty){
          
            it(`[-] falha ao atualizar uma contraparte por ${counterparty.test}`,function(){

                cy.populateGroups(counterparty.data.group_name)
                cy.populateCounterparty(counterparty.data)
                cy.updateCounterparty(counterparty.data,Expectedstatus)

                cy.getGroupListToDelete()
                cy.getCounterpartyListToDelete()
                cy.deleteAllGroups()
                cy.deleteAllCounterpartys()
                
            })
        })
    })


    context('[-] falha ao atualizar uma contraparte com campo errado',function(){
        const Expectedstatus = counterpartyRequestStatus.createCounterparty.WrongData
        const counterpartyData = counterpartyNameData.WrongData
        
        counterpartyData.forEach(function(counterparty){
          
            it(`[-] falha ao crirar uma contraparte por ${counterparty.test}`,function(){

                cy.populateGroups(counterparty.data.group_name)
                cy.populateCounterparty(counterparty.data)
                cy.updateCounterparty(counterparty.data,Expectedstatus)
                
                
            })
        })
    })

    context('[-] falha ao crirar uma contraparte com campo onde o dado é invalido',function(){
        const Expectedstatus = counterpartyRequestStatus.createCounterparty.Validation
        const counterpartyData = counterpartyNameData.Validation
        
        counterpartyData.forEach(function(counterparty){
          
            it(`[-] falha ao crirar uma contraparte por ${counterparty.test}`,function(){

                cy.populateGroups(counterparty.data.group_name)
                cy.populateCounterparty(counterparty.data)
                cy.updateCounterparty(counterparty.data,Expectedstatus)
                
            })
        })
    })

})