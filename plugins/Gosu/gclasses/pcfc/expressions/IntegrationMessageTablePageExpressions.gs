package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/training/integration/IntegrationMessageTablePage.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class IntegrationMessageTablePageExpressions {
  @javax.annotation.Generated("config/web/pcf/training/integration/IntegrationMessageTablePage.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IntegrationMessageTablePageExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex () : int {
      return 0
    }
    
    // 'checkedRowAction' attribute on CheckedValuesToolbarButton (id=SkipSelectedMessageButton) at IntegrationMessageTablePage.pcf: line 25, column 80
    function checkedRowAction_1 (element :  entity.Message, CheckedValue :  entity.Message) : void {
      skipSelectedMessage(CheckedValue)
    }
    
    // 'def' attribute on PanelRef at IntegrationMessageTablePage.pcf: line 18, column 27
    function def_onEnter_2 (def :  pcf.MessageLV) : void {
      def.onEnter()
    }
    
    // 'def' attribute on PanelRef at IntegrationMessageTablePage.pcf: line 18, column 27
    function def_refreshVariables_3 (def :  pcf.MessageLV) : void {
      def.refreshVariables()
    }
    
    // 'label' attribute on Label at IntegrationMessageTablePage.pcf: line 14, column 91
    function label_0 () : java.lang.String {
      return DisplayKey.get("Training.MessageCount", allMessageCount())
    }
    
    // Page (id=IntegrationMessageTablePage) at IntegrationMessageTablePage.pcf: line 7, column 63
    static function parent_4 () : pcf.api.Destination {
      return pcf.IntegrationMessageLG.createDestination()
    }
    
    override property get CurrentLocation () : pcf.IntegrationMessageTablePage {
      return super.CurrentLocation as pcf.IntegrationMessageTablePage
    }
    
    function allMessageCount() : int {
      var queryObj = gw.api.database.Query.make(Message)
      return queryObj.select().Count
    }
    
    function skipAllMessages() : void {
      var allMessages = gw.api.database.Query.make(Message).select() 
      gw.transaction.Transaction.runWithNewBundle( \ newBundle -> {
        for (currentMessage in allMessages) {
          newBundle.add(currentMessage)
          currentMessage.skip()
        } // end for
      } ) // end runWithNewBundle
    }
    
    function skipSelectedMessage(aMessage : Message) : void {
      gw.transaction.Transaction.runWithNewBundle( \ newBundle -> {aMessage.skip()} )
    } // end skipSelectedMessage  
      
    
    
  }
  
  
}