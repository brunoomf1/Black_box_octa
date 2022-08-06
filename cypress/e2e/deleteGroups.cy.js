import groupsRequests from "../Requests/groupsRequests"
import groupsData from "../fixtures/Groups/groupsData.json"
import requestStatus from "../fixtures/Groups/groupRequestStatus.json"





describe('Criação de grupos', () => {


    it('[+] Deletar grupos existentes com sucesso',function() {
        const groupData = groupsData.CorrectData
        const expectedResponse = requestStatus.deleteGroup.Successful

        groupData.forEach(function(group){
            groupsRequests.populateGroups(group.GroupName)

            groupsRequests.deleteGroup(group.GroupName,expectedResponse)

            groupsRequests.cleanGroups(group.GroupName)

        })

    })

    it('[-] Deletar um grupo que não existe',function(){
        const expectedResponse = requestStatus.deleteGroup.DontExist
        const groupData = "Groupo Teste"
        
        groupsRequests.deleteGroup(groupData.GroupName,expectedResponse)

    })

    it("[-] Deletar um grupo onde o nome não é string", function(){
    
        const expectedResponse = requestStatus.deleteGroup.Validation
        const groupData = groupsData.WrongData

        groupData.forEach(function(group){
            groupsRequests.deleteGroup(group.GroupName,expectedResponse)
        })

    })

    it('[-] Deletar um Grupo com nome vazio',function() {
        const expectedResponse = requestStatus.deleteGroup.Validation
        const groupData = ""
        groupsRequests.populateGroups(groupData,expectedResponse)
        
    })

})
