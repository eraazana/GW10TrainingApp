package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/training/UserAndAssignedContactsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class UserAndAssignedContactsLVExpressions {
  @javax.annotation.Generated("config/web/pcf/training/UserAndAssignedContactsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends UserAndAssignedContactsLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=UserName_Cell) at UserAndAssignedContactsLV.pcf: line 16, column 38
    function valueRoot_4 () : java.lang.Object {
      return aUser
    }
    
    // 'value' attribute on TextCell (id=UserName_Cell) at UserAndAssignedContactsLV.pcf: line 16, column 38
    function value_3 () : java.lang.String {
      return aUser.DisplayName
    }
    
    // 'value' attribute on TextCell (id=Department_Cell) at UserAndAssignedContactsLV.pcf: line 20, column 37
    function value_6 () : java.lang.String {
      return aUser.Department
    }
    
    // 'value' attribute on TextCell (id=NumberOfContacts_Cell) at UserAndAssignedContactsLV.pcf: line 25, column 42
    function value_9 () : java.lang.Integer {
      return trainingapp.base.AssignedUserUtil.countAssignedContacts(aUser)
    }
    
    property get aUser () : User {
      return getIteratedValue(1) as User
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/training/UserAndAssignedContactsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class UserAndAssignedContactsLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=UserName_Cell) at UserAndAssignedContactsLV.pcf: line 16, column 38
    function sortValue_0 (aUser :  User) : java.lang.Object {
      return aUser.DisplayName
    }
    
    // 'value' attribute on TextCell (id=Department_Cell) at UserAndAssignedContactsLV.pcf: line 20, column 37
    function sortValue_1 (aUser :  User) : java.lang.Object {
      return aUser.Department
    }
    
    // 'value' attribute on TextCell (id=NumberOfContacts_Cell) at UserAndAssignedContactsLV.pcf: line 25, column 42
    function sortValue_2 (aUser :  User) : java.lang.Object {
      return trainingapp.base.AssignedUserUtil.countAssignedContacts(aUser)
    }
    
    // 'value' attribute on RowIterator at UserAndAssignedContactsLV.pcf: line 11, column 64
    function value_11 () : gw.api.database.IQueryBeanResult<User> {
      return trainingapp.base.AssignedUserUtil.findAllContactManagers()
    }
    
    
  }
  
  
}