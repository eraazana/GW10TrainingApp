package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/training/integration/IntegrationMessageHistoryTablePage.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class IntegrationMessageHistoryTablePageExpressions {
  @javax.annotation.Generated("config/web/pcf/training/integration/IntegrationMessageHistoryTablePage.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IntegrationMessageHistoryTablePageExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex () : int {
      return 0
    }
    
    // 'checkedRowAction' attribute on CheckedValuesToolbarButton (id=DeleteSelectedMessageHistoryButton) at IntegrationMessageHistoryTablePage.pcf: line 25, column 90
    function checkedRowAction_1 (element :  entity.MessageHistory, CheckedValue :  entity.MessageHistory) : void {
      deleteSelectedMessageHistory(CheckedValue)
    }
    
    // 'def' attribute on PanelRef at IntegrationMessageHistoryTablePage.pcf: line 18, column 34
    function def_onEnter_2 (def :  pcf.MessageHistoryLV) : void {
      def.onEnter()
    }
    
    // 'def' attribute on PanelRef at IntegrationMessageHistoryTablePage.pcf: line 18, column 34
    function def_refreshVariables_3 (def :  pcf.MessageHistoryLV) : void {
      def.refreshVariables()
    }
    
    // 'label' attribute on Label at IntegrationMessageHistoryTablePage.pcf: line 14, column 91
    function label_0 () : java.lang.String {
      return DisplayKey.get("Training.MessageCount", allMessageCount())
    }
    
    // Page (id=IntegrationMessageHistoryTablePage) at IntegrationMessageHistoryTablePage.pcf: line 7, column 70
    static function parent_4 () : pcf.api.Destination {
      return pcf.IntegrationMessageLG.createDestination()
    }
    
    override property get CurrentLocation () : pcf.IntegrationMessageHistoryTablePage {
      return super.CurrentLocation as pcf.IntegrationMessageHistoryTablePage
    }
    
    function allMessageCount() : int {
      var queryObj = gw.api.database.Query.make(MessageHistory)
      return queryObj.select().Count
    }
    
    function deleteSelectedMessageHistory(aMessageHistory : MessageHistory) : void {
      gw.transaction.Transaction.runWithNewBundle( \ newBundle -> {aMessageHistory.remove()} )
    } // end deleteSelectedMessageHistory
    
    
  }
  
  
}