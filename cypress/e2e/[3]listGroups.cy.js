/// <reference types="cypress" />

import groupsData from "../fixtures/Groups/groupsData.json"
import requestStatus from "../fixtures/Groups/groupRequestStatus.json"


describe("Group listing", function(){


    it('[+] Listar grupos corretamente', function(){
        const groupData = groupsData.CorrectData
        const expectedResponse = requestStatus.listGroup.Successful

        var createdGroupsList = []

        groupData.forEach(function(group){
            cy.populateGroups(group.GroupName)
            createdGroupsList.push(group.GroupName)
        })

        cy.getGroupList(expectedResponse)

        createdGroupsList.forEach(function(expectedItem){
             cy.groupExistsInList(expectedItem,true)
        })
    })

    it('[-] Listar um grupo deletado', function(){

        const expectedResponse = requestStatus.listGroup.DontExist

        const group = 'Grupo Teste'

        cy.populateGroups(group)
        cy.cleanGroups(group)

        cy.getGroupList(expectedResponse)

        cy.groupExistsInList(group,false)


    })

    it('[-] Listar quando não há grupos', function(){

        const expectedResponse = requestStatus.listGroup
        
        cy.getGroupList(expectedResponse.Successful)
        cy.deleteAllGroups()

        cy.getGroupList(expectedResponse.DontExist)



    })
    







})
