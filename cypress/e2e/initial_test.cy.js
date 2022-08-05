import Requests from "../support/Requests"
import groups from "../fixtures/groups.json"


describe('empty spec', () => {
  it('passes', () => {
    
    Requests.createGroupRequest(groups.group,"Grupo já cadastrado")
    Requests.getGroupList()
    Requests.deleteGroupRequest(groups.group)
  })
})