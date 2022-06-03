package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
uses gw.api.path.Paths
uses gw.api.database.QuerySelectColumns
@javax.annotation.Generated("config/web/pcf/training/integration/IntegrationPredefinedPluginDemoPage.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class IntegrationPredefinedPluginDemoPageExpressions {
  @javax.annotation.Generated("config/web/pcf/training/integration/IntegrationPredefinedPluginDemoPage.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IntegrationPredefinedPluginDemoPageExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex () : int {
      return 0
    }
    
    // 'action' attribute on Link (id=DisplayInstructions) at IntegrationPredefinedPluginDemoPage.pcf: line 16, column 81
    function action_0 () : void {
      PredefinedPluginDemoExitPoint.push()
    }
    
    // 'action' attribute on ToolbarButton (id=ToolbarButton) at IntegrationPredefinedPluginDemoPage.pcf: line 33, column 87
    function action_2 () : void {
      gw.api.util.CurrencyUtil.invokeMarketExchangeRateSetPlugin()
    }
    
    // 'action' attribute on Link (id=DisplayInstructions) at IntegrationPredefinedPluginDemoPage.pcf: line 16, column 81
    function action_dest_1 () : pcf.api.Destination {
      return pcf.PredefinedPluginDemoExitPoint.createDestination()
    }
    
    // 'def' attribute on PanelRef at IntegrationPredefinedPluginDemoPage.pcf: line 28, column 32
    function def_onEnter_3 (def :  pcf.ExchangeRateLV) : void {
      def.onEnter()
    }
    
    // 'def' attribute on PanelRef at IntegrationPredefinedPluginDemoPage.pcf: line 28, column 32
    function def_refreshVariables_4 (def :  pcf.ExchangeRateLV) : void {
      def.refreshVariables()
    }
    
    // Page (id=IntegrationPredefinedPluginDemoPage) at IntegrationPredefinedPluginDemoPage.pcf: line 8, column 68
    static function parent_5 () : pcf.api.Destination {
      return pcf.IntegrationPluginsLG.createDestination()
    }
    
    override property get CurrentLocation () : pcf.IntegrationPredefinedPluginDemoPage {
      return super.CurrentLocation as pcf.IntegrationPredefinedPluginDemoPage
    }
    
    
    
          function queryExchangeRates(): gw.api.database.IQueryBeanResult<entity.ExchangeRate> {
            var erQuery = gw.api.database.Query.make(ExchangeRate)
            var resultSet = erQuery.select()
            resultSet.orderByDescending(QuerySelectColumns.path(Paths.make(ExchangeRate#ID)))
            resultSet.thenBy(QuerySelectColumns.path(Paths.make(ExchangeRate#BaseCurrency)))
            resultSet.thenBy(QuerySelectColumns.path(Paths.make(ExchangeRate#PriceCurrency)))
            return resultSet
          }
    
    
  }
  
  
}