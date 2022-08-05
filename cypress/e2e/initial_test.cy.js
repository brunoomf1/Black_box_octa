import Requests from "../Requests/Requests"
import groupsData from "../fixtures/Groups/groupsData.json"
import requestStatus from "../fixtures/Groups/groupRequestStatus.json"



describe('Criando grupos', () => {

  it('Criar Grupos com sucesso',function() {
    const groupData = groupsData.CorrectData

    groupData.forEach(function(group){
      Requests.cleanGroups(group.GroupName) 
    })
    
    const status = requestStatus.createGroup.Successful

    groupData.forEach(function(group){
      Requests.createGroupRequest(group.GroupName,status.code,status.message)
    })
    
  })

  it('[+]Não é possivel criar grupos que já existem', function() {

    const status = requestStatus.createGroup.AlredyExists
    const groupData = groupsData.CorrectData

    groupData.forEach(function(group){
      Requests.createGroupRequest(group.GroupName,status.code,status.message)
    })

    groupData.forEach(function(group){
      Requests.cleanGroups(group.GroupName) 
    })

  })

  it('[-] Não deve ser possivel criar grupos utilizando dados de tipo não String',function() {
    const status = requestStatus.createGroup.Validation
    const groupData = groupsDatagit.WrongData

    groupData.forEach(function(group){
      Requests.createGroupRequest(group.GroupName,status.code,status.message)
    })

    groupData.forEach(function(group){
      Requests.cleanGroups(group.GroupName) 
    })
    
  })
  
})
