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
        return true


    })

    it('[-] List when there are no groups', function(){
        return true


    })
    







})
