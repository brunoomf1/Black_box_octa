/// <reference types="cypress" />

import groupsData from "../fixtures/Groups/groupsData.json"
import requestStatus from "../fixtures/Groups/groupRequestStatus.json"


describe('Criação de grupos', () => {


    it('[+] Deletar grupos existentes com sucesso',function() {
        const groupData = groupsData.CorrectData
        const expectedResponse = requestStatus.deleteGroup.Successful

        groupData.forEach(function(group){
            cy.populateGroups(group.GroupName)

            cy.deleteGroup(group.GroupName,expectedResponse)

            cy.cleanGroups(group.GroupName)

        })

    })

    it('[-] Deletar um grupo que não existe',function(){
        const expectedResponse = requestStatus.deleteGroup.DontExist
        const groupData = "Groupo Teste"
        
        cy.deleteGroup(groupData.GroupName,expectedResponse)

    })

    it("[-] Deletar um grupo onde o nome não é string", function(){
    
        const expectedResponse = requestStatus.deleteGroup.Validation
        const groupData = groupsData.WrongData

        groupData.forEach(function(group){
            cy.deleteGroup(group.GroupName,expectedResponse)
        })

    })

    it('[-] Deletar um Grupo com nome vazio',function() {
        const expectedResponse = requestStatus.deleteGroup.Validation
        const groupData = ""
        cy.populateGroups(groupData,expectedResponse)
        
    })

})
