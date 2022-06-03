package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/training/ABContact/ABContactHistoryPage.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ABContactHistoryPageExpressions {
  @javax.annotation.Generated("config/web/pcf/training/ABContact/ABContactHistoryPage.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ABContactHistoryPageExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (anABContact :  ABContact) : int {
      return 0
    }
    
    // 'def' attribute on PanelRef at ABContactHistoryPage.pcf: line 18, column 47
    function def_onEnter_0 (def :  pcf.ABContactHistoryLV) : void {
      def.onEnter(anABContact)
    }
    
    // 'def' attribute on PanelRef at ABContactHistoryPage.pcf: line 18, column 47
    function def_refreshVariables_1 (def :  pcf.ABContactHistoryLV) : void {
      def.refreshVariables(anABContact)
    }
    
    // Page (id=ABContactHistoryPage) at ABContactHistoryPage.pcf: line 9, column 58
    static function parent_2 (anABContact :  ABContact) : pcf.api.Destination {
      return pcf.ABContactLG.createDestination(anABContact)
    }
    
    override property get CurrentLocation () : pcf.ABContactHistoryPage {
      return super.CurrentLocation as pcf.ABContactHistoryPage
    }
    
    property get anABContact () : ABContact {
      return getVariableValue("anABContact", 0) as ABContact
    }
    
    property set anABContact ($arg :  ABContact) {
      setVariableValue("anABContact", 0, $arg)
    }
    
    
  }
  
  
}