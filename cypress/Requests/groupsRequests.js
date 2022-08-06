class groupsRequests {

    createGroup(groupName,expectedResponse){
        cy.request({
            method: 'POST',
            url: "http://teste-qa-95b5bac5.octax.co:8003/group/"+groupName,
            failOnStatusCode: false
        })
        .then(response => {
            cy.AssertRequsition(expectedResponse,response)
        })
    }

    getGroupList(expectedResponse){
        cy.request({
            method: 'GET',
            url: `http://teste-qa-95b5bac5.octax.co:8003/group/list`,
        }).then(response => {
            cy.AssertListRequsition(expectedResponse,response)
            cy.writeFile('cypress/fixtures/groupListSave.json',response.body)
        })
       
    }

    deleteGroup(groupName,expectedResponse){
        cy.request({
            method: 'DELETE',
            url: 'http://teste-qa-95b5bac5.octax.co:8003/group/'+groupName,
            failOnStatusCode: false,
        })
        .then(response => {
            cy.AssertRequsition(expectedResponse,response)
         })
    }
    
    
    cleanGroups(groupName){
        cy.request({
            method: 'DELETE',
            url: 'http://teste-qa-95b5bac5.octax.co:8003/group/'+groupName,
            failOnStatusCode: false
        })
    }

    populateGroups(groupName){
        cy.request({
            method: 'POST',
            url: "http://teste-qa-95b5bac5.octax.co:8003/group/"+groupName,
            failOnStatusCode: false
        })
    }
}

export default new groupsRequests;