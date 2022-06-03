package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/training/Admin/AdminAssignedUserLG.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class AdminAssignedUserLGExpressions {
  @javax.annotation.Generated("config/web/pcf/training/Admin/AdminAssignedUserLG.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class AdminAssignedUserLGExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex () : int {
      return 0
    }
    
    // 'location' attribute on LocationGroup (id=AdminAssignedUserLG) at AdminAssignedUserLG.pcf: line 10, column 54
    function action_0 () : void {
      pcf.AdminUserAndAssignedContactsPage.go()
    }
    
    // 'location' attribute on LocationGroup (id=AdminAssignedUserLG) at AdminAssignedUserLG.pcf: line 12, column 48
    function action_2 () : void {
      pcf.AdminContactAssignmentPage.go()
    }
    
    // 'location' attribute on LocationGroup (id=AdminAssignedUserLG) at AdminAssignedUserLG.pcf: line 10, column 54
    function action_dest_1 () : pcf.api.Destination {
      return pcf.AdminUserAndAssignedContactsPage.createDestination()
    }
    
    // 'location' attribute on LocationGroup (id=AdminAssignedUserLG) at AdminAssignedUserLG.pcf: line 12, column 48
    function action_dest_3 () : pcf.api.Destination {
      return pcf.AdminContactAssignmentPage.createDestination()
    }
    
    // LocationGroup (id=AdminAssignedUserLG) at AdminAssignedUserLG.pcf: line 8, column 68
    static function firstVisitableChildDestinationMethod_6 () : pcf.api.Destination {
      var dest : pcf.api.Destination
      dest = pcf.AdminUserAndAssignedContactsPage.createDestination()
      if (dest.canVisitSelf()) {
        return dest
      }
      dest = pcf.AdminContactAssignmentPage.createDestination()
      if (dest.canVisitSelf()) {
        return dest
      }
      return null
    }
    
    // 'tabBar' attribute on LocationGroup (id=AdminAssignedUserLG) at AdminAssignedUserLG.pcf: line 8, column 68
    function tabBar_onEnter_4 (def :  pcf.TabBar) : void {
      def.onEnter()
    }
    
    // 'tabBar' attribute on LocationGroup (id=AdminAssignedUserLG) at AdminAssignedUserLG.pcf: line 8, column 68
    function tabBar_refreshVariables_5 (def :  pcf.TabBar) : void {
      def.refreshVariables()
    }
    
    override property get CurrentLocation () : pcf.AdminAssignedUserLG {
      return super.CurrentLocation as pcf.AdminAssignedUserLG
    }
    
    
  }
  
  
}