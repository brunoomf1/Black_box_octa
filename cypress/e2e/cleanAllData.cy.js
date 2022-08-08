describe('limpando dados',function(){
    it('limpando dados',function(){
        cy.getGroupListToDelete()
        cy.getCounterpartyListToDelete()
        cy.deleteAllGroups()
        cy.deleteAllCounterpartys()
    })


})