package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/training/dummyLG.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class dummyLGExpressions {
  @javax.annotation.Generated("config/web/pcf/training/dummyLG.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class dummyLGExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex () : int {
      return 0
    }
    
    // 'location' attribute on LocationGroup (id=dummyLG) at dummyLG.pcf: line 10, column 36
    function action_0 () : void {
      pcf.PendingChanges.go()
    }
    
    // 'location' attribute on LocationGroup (id=dummyLG) at dummyLG.pcf: line 12, column 35
    function action_2 () : void {
      pcf.MergeContacts.go()
    }
    
    // 'location' attribute on LocationGroup (id=dummyLG) at dummyLG.pcf: line 10, column 36
    function action_dest_1 () : pcf.api.Destination {
      return pcf.PendingChanges.createDestination()
    }
    
    // 'location' attribute on LocationGroup (id=dummyLG) at dummyLG.pcf: line 12, column 35
    function action_dest_3 () : pcf.api.Destination {
      return pcf.MergeContacts.createDestination()
    }
    
    // LocationGroup (id=dummyLG) at dummyLG.pcf: line 8, column 42
    static function firstVisitableChildDestinationMethod_6 () : pcf.api.Destination {
      var dest : pcf.api.Destination
      dest = pcf.PendingChanges.createDestination()
      if (dest.canVisitSelf()) {
        return dest
      }
      dest = pcf.MergeContacts.createDestination()
      if (dest.canVisitSelf()) {
        return dest
      }
      return null
    }
    
    // 'tabBar' attribute on LocationGroup (id=dummyLG) at dummyLG.pcf: line 8, column 42
    function tabBar_onEnter_4 (def :  pcf.TabBar) : void {
      def.onEnter()
    }
    
    // 'tabBar' attribute on LocationGroup (id=dummyLG) at dummyLG.pcf: line 8, column 42
    function tabBar_refreshVariables_5 (def :  pcf.TabBar) : void {
      def.refreshVariables()
    }
    
    override property get CurrentLocation () : pcf.dummyLG {
      return super.CurrentLocation as pcf.dummyLG
    }
    
    
  }
  
  
}