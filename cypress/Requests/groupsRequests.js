class groupsRequests {

    createGroup(groupName,expectedResponse){
        cy.request({
            method: 'POST',
            url: "http://teste-qa-95b5bac5.octax.co:8003/group/"+groupName,
            failOnStatusCode: false
        })
        .then(response => {
           cy.AssertRequsition(groupName,expectedResponse,response)
        })
    }

    getGroupList(){
        cy.request({
           
            method: 'GET',
            url: `http://teste-qa-95b5bac5.octax.co:8003/group/list`,
       
        }).then(response => {
            
            cy.writeFile('cypress/fixtures/groupList.json', response.body)

        })
       
    }

    deleteGroup(groupName,expectedResponse){
        cy.request({
            method: 'DELETE',
            url: 'http://teste-qa-95b5bac5.octax.co:8003/group/'+groupName,
            failOnStatusCode: false,
        })
        .then(response => {
            cy.AssertRequsition(groupName,expectedResponse,response)
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