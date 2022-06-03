package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/training/integration/IntegrationPluginsLG.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class IntegrationPluginsLGExpressions {
  @javax.annotation.Generated("config/web/pcf/training/integration/IntegrationPluginsLG.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IntegrationPluginsLGExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex () : int {
      return 0
    }
    
    // 'location' attribute on LocationGroup (id=IntegrationPluginsLG) at IntegrationPluginsLG.pcf: line 9, column 57
    function action_0 () : void {
      pcf.IntegrationPredefinedPluginDemoPage.go()
    }
    
    // 'location' attribute on LocationGroup (id=IntegrationPluginsLG) at IntegrationPluginsLG.pcf: line 9, column 57
    function action_dest_1 () : pcf.api.Destination {
      return pcf.IntegrationPredefinedPluginDemoPage.createDestination()
    }
    
    // LocationGroup (id=IntegrationPluginsLG) at IntegrationPluginsLG.pcf: line 7, column 69
    static function firstVisitableChildDestinationMethod_5 () : pcf.api.Destination {
      var dest : pcf.api.Destination
      dest = pcf.IntegrationPredefinedPluginDemoPage.createDestination()
      if (dest.canVisitSelf()) {
        return dest
      }
      return null
    }
    
    // LocationGroup (id=IntegrationPluginsLG) at IntegrationPluginsLG.pcf: line 7, column 69
    static function parent_2 () : pcf.api.Destination {
      return pcf.Admin.createDestination()
    }
    
    // 'tabBar' attribute on LocationGroup (id=IntegrationPluginsLG) at IntegrationPluginsLG.pcf: line 7, column 69
    function tabBar_onEnter_3 (def :  pcf.TabBar) : void {
      def.onEnter()
    }
    
    // 'tabBar' attribute on LocationGroup (id=IntegrationPluginsLG) at IntegrationPluginsLG.pcf: line 7, column 69
    function tabBar_refreshVariables_4 (def :  pcf.TabBar) : void {
      def.refreshVariables()
    }
    
    override property get CurrentLocation () : pcf.IntegrationPluginsLG {
      return super.CurrentLocation as pcf.IntegrationPluginsLG
    }
    
    
  }
  
  
}