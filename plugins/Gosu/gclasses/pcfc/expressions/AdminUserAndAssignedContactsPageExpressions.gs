package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/training/Admin/AdminUserAndAssignedContactsPage.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class AdminUserAndAssignedContactsPageExpressions {
  @javax.annotation.Generated("config/web/pcf/training/Admin/AdminUserAndAssignedContactsPage.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class AdminUserAndAssignedContactsPageExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex () : int {
      return 0
    }
    
    // Page (id=AdminUserAndAssignedContactsPage) at AdminUserAndAssignedContactsPage.pcf: line 9, column 72
    static function parent_6 () : pcf.api.Destination {
      return pcf.AdminAssignedUserLG.createDestination()
    }
    
    // 'value' attribute on RowIterator (id=aUserIterator) at AdminUserAndAssignedContactsPage.pcf: line 21, column 70
    function value_5 () : gw.api.database.IQueryBeanResult<User> {
      return trainingapp.base.AssignedUserUtil.findAllContactManagers()
    }
    
    override property get CurrentLocation () : pcf.AdminUserAndAssignedContactsPage {
      return super.CurrentLocation as pcf.AdminUserAndAssignedContactsPage
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/training/Admin/AdminUserAndAssignedContactsPage.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends AdminUserAndAssignedContactsPageExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=UserName_Cell) at AdminUserAndAssignedContactsPage.pcf: line 28, column 30
    function valueRoot_1 () : java.lang.Object {
      return aUser
    }
    
    // 'value' attribute on TextCell (id=UserName_Cell) at AdminUserAndAssignedContactsPage.pcf: line 28, column 30
    function value_0 () : java.lang.String {
      return aUser.DisplayName
    }
    
    // 'value' attribute on TextCell (id=NumberOfContacts_Cell) at AdminUserAndAssignedContactsPage.pcf: line 36, column 48
    function value_3 () : java.lang.Integer {
      return trainingapp.base.AssignedUserUtil.countAssignedContacts(aUser)
    }
    
    property get aUser () : User {
      return getIteratedValue(1) as User
    }
    
    
  }
  
  
}