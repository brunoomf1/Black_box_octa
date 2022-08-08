/// <reference types="cypress" />

import counterpartyRequestStatus from "../fixtures/Counterparty/counterpartyRequestStatus.json"
import counterpartyNameData from "../fixtures/Counterparty/counterpartyData.json"



describe("Criar uma contraparte", function(){

    context('Criar uma contraparte com sucesso',function(){
        const Expectedstatus = counterpartyRequestStatus.createCounterparty.Successful
        const counterpartyData = counterpartyNameData.CorrectData
        
        
        counterpartyData.forEach(function(counterparty){
          
            it(`[+] Criar uma contraparte com sucesso com ${counterparty.test}`,function(){

                cy.populateGroups(counterparty.data.group_name)
                cy.createCounterparty(counterparty.data,Expectedstatus)
                
                cy.getGroupListToDelete()
                cy.getCounterpartyListToDelete()
                cy.deleteAllGroups()
                cy.deleteAllCounterpartys()

            })
        })
    })
    
    context('[-] falha ao crirar uma contraparte com campo vazio',function(){
        const Expectedstatus = counterpartyRequestStatus.createCounterparty.Empty
        const counterpartyData = counterpartyNameData.Empty
        
        counterpartyData.forEach(function(counterparty){
          
            it(`[-] falha ao crirar uma contraparte por ${counterparty.test}`,function(){

                cy.populateGroups(counterparty.data.group_name)
                cy.createCounterparty(counterparty.data,Expectedstatus)

                cy.getGroupListToDelete()
                cy.getCounterpartyListToDelete()
                cy.deleteAllGroups()
                cy.deleteAllCounterpartys()
                
            })
        })
    })


    context('[-] falha ao crirar uma contraparte com campo errado',function(){
        const Expectedstatus = counterpartyRequestStatus.createCounterparty.WrongData
        const counterpartyData = counterpartyNameData.WrongData
        
        counterpartyData.forEach(function(counterparty){
          
            it(`[-] falha ao crirar uma contraparte por ${counterparty.test}`,function(){

                cy.populateGroups(counterparty.data.group_name)
                cy.createCounterparty(counterparty.data,Expectedstatus)
                
                
            })
        })
    })

    context('[-] falha ao crirar uma contraparte com campo onde o dado é invalido',function(){
        const Expectedstatus = counterpartyRequestStatus.createCounterparty.Validation
        const counterpartyData = counterpartyNameData.Validation
        
        counterpartyData.forEach(function(counterparty){
          
            it(`[-] falha ao crirar uma contraparte por ${counterparty.test}`,function(){

                cy.populateGroups(counterparty.data.group_name)
                cy.createCounterparty(counterparty.data,Expectedstatus)
                
            })
        })
    })

    context('[-] Cadastrar uma contraparte ja cadastada',function(){
        const Expectedstatus = counterpartyRequestStatus.createCounterparty.duplicated
        const counterpartyData = counterpartyNameData.duplicated
        
        it(`[-] falha ao crirar uma contraparte duplicada`,function(){

            cy.populateGroups(counterpartyData.data.group_name)
            cy.populateCounterparty(counterpartyData.data)
            cy.createCounterparty(counterpartyData.data,Expectedstatus)
                


            cy.getGroupListToDelete()
            cy.getCounterpartyListToDelete()
            cy.deleteAllGroups()
            cy.deleteAllCounterpartys()
            })
    })



})