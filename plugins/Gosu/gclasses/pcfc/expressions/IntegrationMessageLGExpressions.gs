package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/training/integration/IntegrationMessageLG.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class IntegrationMessageLGExpressions {
  @javax.annotation.Generated("config/web/pcf/training/integration/IntegrationMessageLG.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IntegrationMessageLGExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex () : int {
      return 0
    }
    
    // 'location' attribute on LocationGroup (id=IntegrationMessageLG) at IntegrationMessageLG.pcf: line 11, column 49
    function action_0 () : void {
      pcf.IntegrationMessageTablePage.go()
    }
    
    // 'location' attribute on LocationGroup (id=IntegrationMessageLG) at IntegrationMessageLG.pcf: line 21, column 59
    function action_10 () : void {
      pcf.IntegrationMessageAcknowledgementPage.go()
    }
    
    // 'location' attribute on LocationGroup (id=IntegrationMessageLG) at IntegrationMessageLG.pcf: line 23, column 49
    function action_12 () : void {
      pcf.IntegrationMessageAdminPage.go()
    }
    
    // 'location' attribute on LocationGroup (id=IntegrationMessageLG) at IntegrationMessageLG.pcf: line 13, column 56
    function action_2 () : void {
      pcf.IntegrationMessageHistoryTablePage.go()
    }
    
    // 'location' attribute on LocationGroup (id=IntegrationMessageLG) at IntegrationMessageLG.pcf: line 15, column 53
    function action_4 () : void {
      pcf.IntegrationMessageGeneratorPage.go()
    }
    
    // 'location' attribute on LocationGroup (id=IntegrationMessageLG) at IntegrationMessageLG.pcf: line 17, column 53
    function action_6 () : void {
      pcf.IntegrationMessageExceptionPage.go()
    }
    
    // 'location' attribute on LocationGroup (id=IntegrationMessageLG) at IntegrationMessageLG.pcf: line 19, column 56
    function action_8 () : void {
      pcf.IntegrationMessageSafeOrderingPage.go()
    }
    
    // 'location' attribute on LocationGroup (id=IntegrationMessageLG) at IntegrationMessageLG.pcf: line 11, column 49
    function action_dest_1 () : pcf.api.Destination {
      return pcf.IntegrationMessageTablePage.createDestination()
    }
    
    // 'location' attribute on LocationGroup (id=IntegrationMessageLG) at IntegrationMessageLG.pcf: line 21, column 59
    function action_dest_11 () : pcf.api.Destination {
      return pcf.IntegrationMessageAcknowledgementPage.createDestination()
    }
    
    // 'location' attribute on LocationGroup (id=IntegrationMessageLG) at IntegrationMessageLG.pcf: line 23, column 49
    function action_dest_13 () : pcf.api.Destination {
      return pcf.IntegrationMessageAdminPage.createDestination()
    }
    
    // 'location' attribute on LocationGroup (id=IntegrationMessageLG) at IntegrationMessageLG.pcf: line 13, column 56
    function action_dest_3 () : pcf.api.Destination {
      return pcf.IntegrationMessageHistoryTablePage.createDestination()
    }
    
    // 'location' attribute on LocationGroup (id=IntegrationMessageLG) at IntegrationMessageLG.pcf: line 15, column 53
    function action_dest_5 () : pcf.api.Destination {
      return pcf.IntegrationMessageGeneratorPage.createDestination()
    }
    
    // 'location' attribute on LocationGroup (id=IntegrationMessageLG) at IntegrationMessageLG.pcf: line 17, column 53
    function action_dest_7 () : pcf.api.Destination {
      return pcf.IntegrationMessageExceptionPage.createDestination()
    }
    
    // 'location' attribute on LocationGroup (id=IntegrationMessageLG) at IntegrationMessageLG.pcf: line 19, column 56
    function action_dest_9 () : pcf.api.Destination {
      return pcf.IntegrationMessageSafeOrderingPage.createDestination()
    }
    
    // LocationGroup (id=IntegrationMessageLG) at IntegrationMessageLG.pcf: line 7, column 71
    static function firstVisitableChildDestinationMethod_17 () : pcf.api.Destination {
      var dest : pcf.api.Destination
      dest = pcf.IntegrationMessageTablePage.createDestination()
      if (dest.canVisitSelf()) {
        return dest
      }
      dest = pcf.IntegrationMessageHistoryTablePage.createDestination()
      if (dest.canVisitSelf()) {
        return dest
      }
      dest = pcf.IntegrationMessageGeneratorPage.createDestination()
      if (dest.canVisitSelf()) {
        return dest
      }
      dest = pcf.IntegrationMessageExceptionPage.createDestination()
      if (dest.canVisitSelf()) {
        return dest
      }
      dest = pcf.IntegrationMessageSafeOrderingPage.createDestination()
      if (dest.canVisitSelf()) {
        return dest
      }
      dest = pcf.IntegrationMessageAcknowledgementPage.createDestination()
      if (dest.canVisitSelf()) {
        return dest
      }
      dest = pcf.IntegrationMessageAdminPage.createDestination()
      if (dest.canVisitSelf()) {
        return dest
      }
      return null
    }
    
    // LocationGroup (id=IntegrationMessageLG) at IntegrationMessageLG.pcf: line 7, column 71
    static function parent_14 () : pcf.api.Destination {
      return pcf.Admin.createDestination()
    }
    
    // 'tabBar' attribute on LocationGroup (id=IntegrationMessageLG) at IntegrationMessageLG.pcf: line 7, column 71
    function tabBar_onEnter_15 (def :  pcf.TabBar) : void {
      def.onEnter()
    }
    
    // 'tabBar' attribute on LocationGroup (id=IntegrationMessageLG) at IntegrationMessageLG.pcf: line 7, column 71
    function tabBar_refreshVariables_16 (def :  pcf.TabBar) : void {
      def.refreshVariables()
    }
    
    override property get CurrentLocation () : pcf.IntegrationMessageLG {
      return super.CurrentLocation as pcf.IntegrationMessageLG
    }
    
    
  }
  
  
}