class groupsRequests {

    createGroup(groupName,statusCode,message){
        cy.request({
            method: 'POST',
            url: "http://teste-qa-95b5bac5.octax.co:8003/group/"+groupName,
            failOnStatusCode: false
        })
        .then(response => {
           
            expect(response.status).to.eq(statusCode)
            expect(response.body.message).to.eq(message)

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

    deleteGroup(groupName,statusCode,message){
        cy.request({
            method: 'DELETE',
            url: 'http://teste-qa-95b5bac5.octax.co:8003/group/'+groupName,
            failOnStatusCode: false,
        })
        .then(response => {
           
            expect(response.status.code).to.eq(statusCode)
            expect(response.body.message).to.eq(message)
            
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