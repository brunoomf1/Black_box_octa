import Requests from "../Requests/Requests"
import groupsData from "../fixtures/Groups/groupsData.json"
import requestStatus from "../fixtures/Groups/groupRequestStatus.json"
describe('Criando grupos', () => {

  it('Criar Grupos com sucesso',function() {
    var status = requestStatus.createGroup.Successful

    groupsData.forEach(function(group){
      Requests.createGroupRequest(group.GroupName,status.code,status.message)
    })
    
  })

  it('Não é possivel criar grupos que já existem', function() {
    var status = requestStatus.createGroup.Bad
    groupsData.forEach(function(group){
      Requests.createGroupRequest(group.GroupName,status.code,status.message)
    })

  })
  
})

after(function(){
  var groups = groupsData
  groups.forEach(function(group){
    Requests.cleanGroups(group.GroupName) 
  })
})