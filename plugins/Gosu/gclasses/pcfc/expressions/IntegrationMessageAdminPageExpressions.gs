package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/training/integration/IntegrationMessageAdminPage.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class IntegrationMessageAdminPageExpressions {
  @javax.annotation.Generated("config/web/pcf/training/integration/IntegrationMessageAdminPage.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IntegrationMessageAdminPageExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex () : int {
      return 0
    }
    
    // 'action' attribute on ToolbarButton (id=MessagingDestinationControlList_RestartMessagingEngineButton) at IntegrationMessageAdminPage.pcf: line 41, column 27
    function action_2 () : void {
      gw.api.admin.MessagingUtil.restartMessageEngine()
    }
    
    // 'allCheckedRowsAction' attribute on CheckedValuesToolbarButton (id=MessagingDestinationControlList_SuspendButton) at IntegrationMessageAdminPage.pcf: line 27, column 27
    function allCheckedRowsAction_0 (CheckedValues :  gw.api.admin.MessageDestinationInfo[], CheckedValuesErrors :  java.util.Map) : void {
      gw.api.admin.MessagingUtil.suspendDestinations(CheckedValues)
    }
    
    // 'allCheckedRowsAction' attribute on CheckedValuesToolbarButton (id=MessagingDestinationControlList_ResumeButton) at IntegrationMessageAdminPage.pcf: line 34, column 27
    function allCheckedRowsAction_1 (CheckedValues :  gw.api.admin.MessageDestinationInfo[], CheckedValuesErrors :  java.util.Map) : void {
      gw.api.admin.MessagingUtil.resumeDestinations(CheckedValues)
    }
    
    // 'canVisit' attribute on Page (id=IntegrationMessageAdminPage) at IntegrationMessageAdminPage.pcf: line 8, column 72
    static function canVisit_5 () : java.lang.Boolean {
      return perm.System.integadmin or perm.System.eventmessageview
    }
    
    // 'def' attribute on PanelRef at IntegrationMessageAdminPage.pcf: line 19, column 48
    function def_onEnter_3 (def :  pcf.MessagingDestinationsControlLV) : void {
      def.onEnter()
    }
    
    // 'def' attribute on PanelRef at IntegrationMessageAdminPage.pcf: line 19, column 48
    function def_refreshVariables_4 (def :  pcf.MessagingDestinationsControlLV) : void {
      def.refreshVariables()
    }
    
    // Page (id=IntegrationMessageAdminPage) at IntegrationMessageAdminPage.pcf: line 8, column 72
    static function parent_6 () : pcf.api.Destination {
      return pcf.IntegrationMessageLG.createDestination()
    }
    
    override property get CurrentLocation () : pcf.IntegrationMessageAdminPage {
      return super.CurrentLocation as pcf.IntegrationMessageAdminPage
    }
    
    
  }
  
  
}