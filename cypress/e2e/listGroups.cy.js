/// <reference types="cypress" />

import groupsRequests from "../Requests/groupsRequests"
import groupsData from "../fixtures/Groups/groupsData.json"
import requestStatus from "../fixtures/Groups/groupRequestStatus.json"


describe("Group listing", function(){


    it('[+] Correctly list the created groups', function(){
        const groupData = groupsData.CorrectData
        const expectedResponse = requestStatus.listGroup.Successful

        var createdGroupsList = []

        groupData.forEach(function(group){
            groupsRequests.populateGroups(group.GroupName)
            createdGroupsList.push(group.GroupName)
        })

        groupsRequests.getGroupList(expectedResponse)

        createdGroupsList.forEach(function(expectedItem){
             cy.groupExistsInList(expectedItem,true)
        })
    })

    it('[-] List a deleted group', function(){

        const groupData = groupsData.CorrectData
        const expectedResponse = requestStatus.listGroup.DontExist

        const group = 'Grupo Teste'

        groupsRequests.populateGroups(group)
        groupsRequests.cleanGroups(group)

        groupsRequests.getGroupList(expectedResponse)

        cy.groupExistsInList(group,false)


    })

    it('[-] List when there are no groups', function(){

        const expectedResponse = requestStatus.listGroup
        
        groupsRequests.getGroupList(expectedResponse.Successful)
        cy.deleteAllGroups()

        groupsRequests.getGroupList(expectedResponse.DontExist)



    })
    







})
