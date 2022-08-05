class Requests {

    docTypeGenarator(docTypeList){
        let docs = docTypeList
        cy.readFile("cypress/fixtures/auth.json").then(file =>{
            var token = file.token
            docs.forEach(function(docType){
                cy.request({
                    method: 'POST',
                    url: 'https://dev01-erp.voalle.com.br:45701/api/v1/Suite/DocumentationTypes',
                    auth: {bearer:`${token}`},
                    body: {hash:"",code:`${docType}`,title:`${docType}`,de6scription:"TESTE",defaultText:"<p>TESTE</p>",useType:"2",active:true}
                })
            cy.log(docType) 
            })
        })
    }



    createGroupRequest(groupName,message,statusCode){
        cy.request({
            method: 'POST',
            url: "http://teste-qa-95b5bac5.octax.co:8003/group/"+ groupName,
            failOnStatusCode: false,
        }).then(function(response){
            
            expect(response.status.code).to.eq(statusCode)
            expect(response.body.message).to.eq(message)
            
        })
git*
    }

    getGroupList(){
        cy.request({
            method: 'GET',
            url: `http://teste-qa-95b5bac5.octax.co:8003/group/list`,
        }).then(response => {
            cy.writeFile('cypress/fixtures/groupList.json', response.body)
            cy.readFile("cypress/fixtures/groupList.json").then(file =>{
                cy.log(file[1])
            })
        })
    }

    deleteGroupRequest(groupName){
        cy.readFile("cypress/fixtures/groupList.json").then(file =>{
            cy.request({
                method: 'DELETE',
                url: `http://teste-qa-95b5bac5.octax.co:8003/group/${groupName}`,
            }).then(response => {
                cy.log(response)
                })
        })
    }
}

export default new Requests;