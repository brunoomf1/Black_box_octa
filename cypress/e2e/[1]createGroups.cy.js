/// <reference types="cypress" />

import groupsData from "../fixtures/Groups/groupsData.json"
import requestStatus from "../fixtures/Groups/groupRequestStatus.json"



describe('Criação de grupos', () => {


  it('[+] Criar Grupos com sucesso',function() {
    const groupData = groupsData.CorrectData
    const expectedResponse = requestStatus.createGroup.Successful

    groupData.forEach(function(group){
      cy.cleanGroups(group.GroupName) 
    })
    
    groupData.forEach(function(group){
      cy.createGroup(group.GroupName,expectedResponse)
    })
  })


  it('[-] Adicionar um grupo com nome Já existente', function() {

    const expectedResponse = requestStatus.createGroup.AlredyExists
    const groupData = groupsData.CorrectData

    groupData.forEach(function(group){
      cy.createGroup(group.GroupName,expectedResponse)
    })

    groupData.forEach(function(group){
      cy.cleanGroups(group.GroupName) 
    })
  })


   it('[-] Adicionar um grupo onde o nome não é string',function() {
    const expectedResponse = requestStatus.createGroup.Validation
    const groupData = groupsData.WrongData

    groupData.forEach(function(group){
      cy.createGroup(group.GroupName,expectedResponse)
    })
  }) 

  it('[-] Adicionar um grupo com nome vazio',function() {
    const expectedResponse = requestStatus.createGroup.Validation
    const groupData = ""

    cy.createGroup(groupData,expectedResponse)
   
  })

})
