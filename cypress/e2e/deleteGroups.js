import groupsRequests from "../Requests/groupsRequests"
import groupsData from "../fixtures/Groups/groupsData.json"
import requestStatus from "../fixtures/Groups/groupRequestStatus.json"





describe('Criação de grupos', () => {


    it('[+] Deletar grupos existentes com sucesso',function() {
        const groupData = groupsData.CorrectData
        const status = requestStatus.deleteGroup.Successful

        groupData.forEach(function(group){
            groupsRequests.populateGroups(group)

            groupsRequests.deleteGroup(group.groupName,status.code,status.message)    

            groupsRequests.cleanGroups(group)

        })

    })

    it('[-] Deletar um grupo que não existe',function(){
        const status = requestStatus.deleteGroup.DontExist
        const group = "Groupo Teste"

        groupsRequests.deleteGroup(group, status.code, status.message)

    })

    it("[-] Deletar um grupo onde o nome não é string", function(){
    
        const status = requestStatus.deleteGroup.Validation
        const groupData = groupsDatagit.WrongData

        groupData.forEach(function(group){
            groupsRequests.deleteGroup(group.GroupName, status.code, status.message)
        })

    })

    it('[-] Deletar um Grupo com nome vazio',function() {
        const status = requestStatus.deleteGroup.Validation
        const groupData = ""
    
        groupData.forEach(function(group){
          groupsRequests.createGroupRequest(group.GroupName,status.code,status.message)
        })
    })

})

