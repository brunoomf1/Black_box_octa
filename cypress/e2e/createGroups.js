import groupsRequests from "../Requests/groupsRequests"
import groupsData from "../fixtures/Groups/groupsData.json"
import requestStatus from "../fixtures/Groups/groupRequestStatus.json"



describe('Criação de grupos', () => {

  it('[+] Criar Grupos com sucesso',function() {
    const groupData = groupsData.CorrectData
    const status = requestStatus.createGroup.Successful

    groupData.forEach(function(group){
      groupsRequests.cleanGroups(group.GroupName) 
    })
    
    groupData.forEach(function(group){
      groupsRequests.createGroupRequest(group.GroupName,status.code,status.message)
    })
  })


  it('[-] Adicionar um grupo com nome Já existente', function() {

    const status = requestStatus.createGroup.AlredyExists
    const groupData = groupsData.CorrectData

    groupData.forEach(function(group){
      groupsRequests.createGroupRequest(group.GroupName,status.code,status.message)
    })

    groupData.forEach(function(group){
      groupsRequests.cleanGroups(group.GroupName) 
    })
  })


  it('[-] Adicionar um grupo onde o nome não é string',function() {
    const status = requestStatus.createGroup.Validation
    const groupData = groupsDatagit.WrongData

    groupData.forEach(function(group){
      groupsRequests.createGroupRequest(group.GroupName,status.code,status.message)
    })
  })

  it('[-] Adicionar um grupo com nome vazio',function() {
    const status = requestStatus.createGroup.Validation
    const groupData = ""

    groupData.forEach(function(group){
      groupsRequests.createGroupRequest(group.GroupName,status.code,status.message)
    })
  })  
})
