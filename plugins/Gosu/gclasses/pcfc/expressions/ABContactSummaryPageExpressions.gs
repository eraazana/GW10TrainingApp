package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/training/ABContact/ABContactSummaryPage.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ABContactSummaryPageExpressions {
  @javax.annotation.Generated("config/web/pcf/training/ABContact/ABContactSummaryPage.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ABContactSummaryPageExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (anABContact :  ABContact) : int {
      return 0
    }
    
    // 'def' attribute on PanelRef at ABContactSummaryPage.pcf: line 21, column 48
    function def_onEnter_1 (def :  pcf.ABContactSummaryCV) : void {
      def.onEnter(anABContact)
    }
    
    // 'def' attribute on PanelRef at ABContactSummaryPage.pcf: line 21, column 48
    function def_refreshVariables_2 (def :  pcf.ABContactSummaryCV) : void {
      def.refreshVariables(anABContact)
    }
    
    // EditButtons at ABContactSummaryPage.pcf: line 18, column 23
    function label_0 () : java.lang.Object {
      return gw.api.util.LocationUtil.hasOwnBundle(CurrentLocation) ? DisplayKey.get("Button.Update") : DisplayKey.get("Button.OK")
    }
    
    // Page (id=ABContactSummaryPage) at ABContactSummaryPage.pcf: line 9, column 160
    static function parent_3 (anABContact :  ABContact) : pcf.api.Destination {
      return pcf.ABContactLG.createDestination(anABContact)
    }
    
    // 'title' attribute on Page (id=ABContactSummaryPage) at ABContactSummaryPage.pcf: line 9, column 160
    static function title_4 (anABContact :  ABContact) : java.lang.Object {
      return User.util.getCurrentUser().UseHelperLabels ? DisplayKey.get("Training.SummaryDVHelper") : DisplayKey.get("Training.SummaryDV")
    }
    
    override property get CurrentLocation () : pcf.ABContactSummaryPage {
      return super.CurrentLocation as pcf.ABContactSummaryPage
    }
    
    property get anABContact () : ABContact {
      return getVariableValue("anABContact", 0) as ABContact
    }
    
    property set anABContact ($arg :  ABContact) {
      setVariableValue("anABContact", 0, $arg)
    }
    
    
  }
  
  
}