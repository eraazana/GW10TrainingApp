package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/training/ABContact/ABContactSummaryCV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ABContactSummaryCVExpressions {
  @javax.annotation.Generated("config/web/pcf/training/ABContact/ABContactSummaryCV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ABContactSummaryCVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ToolbarButton (id=SuggestLeastBusyUserButton) at ABContactSummaryCV.pcf: line 20, column 80
    function action_1 () : void {
      trainingapp.base.AssignedUserUtil.selectLeastBusyUser(anABContact)
    }
    
    // 'available' attribute on ToolbarButton (id=SuggestLeastBusyUserButton) at ABContactSummaryCV.pcf: line 20, column 80
    function available_0 () : java.lang.Boolean {
      return CurrentLocation.InEditMode
    }
    
    // 'def' attribute on PanelRef at ABContactSummaryCV.pcf: line 14, column 47
    function def_onEnter_2 (def :  pcf.ABContactSummaryDV) : void {
      def.onEnter(anABContact)
    }
    
    // 'def' attribute on PanelRef at ABContactSummaryCV.pcf: line 14, column 47
    function def_refreshVariables_3 (def :  pcf.ABContactSummaryDV) : void {
      def.refreshVariables(anABContact)
    }
    
    property get anABContact () : ABContact {
      return getRequireValue("anABContact", 0) as ABContact
    }
    
    property set anABContact ($arg :  ABContact) {
      setRequireValue("anABContact", 0, $arg)
    }
    
    
  }
  
  
}