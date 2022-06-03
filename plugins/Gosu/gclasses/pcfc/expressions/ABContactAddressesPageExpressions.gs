package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/training/ABContact/Address/ABContactAddressesPage.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ABContactAddressesPageExpressions {
  @javax.annotation.Generated("config/web/pcf/training/ABContact/Address/ABContactAddressesPage.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ABContactAddressesPageExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (anABContact :  ABContact) : int {
      return 0
    }
    
    // 'def' attribute on PanelRef at ABContactAddressesPage.pcf: line 20, column 51
    function def_onEnter_1 (def :  pcf.ABContactAddressesLDV) : void {
      def.onEnter(anABContact)
    }
    
    // 'def' attribute on PanelRef at ABContactAddressesPage.pcf: line 20, column 51
    function def_refreshVariables_2 (def :  pcf.ABContactAddressesLDV) : void {
      def.refreshVariables(anABContact)
    }
    
    // EditButtons at ABContactAddressesPage.pcf: line 17, column 23
    function label_0 () : java.lang.Object {
      return gw.api.util.LocationUtil.hasOwnBundle(CurrentLocation) ? DisplayKey.get("Button.Update") : DisplayKey.get("Button.OK")
    }
    
    // Page (id=ABContactAddressesPage) at ABContactAddressesPage.pcf: line 9, column 166
    static function parent_3 (anABContact :  ABContact) : pcf.api.Destination {
      return pcf.ABContactLG.createDestination(anABContact)
    }
    
    // 'title' attribute on Page (id=ABContactAddressesPage) at ABContactAddressesPage.pcf: line 9, column 166
    static function title_4 (anABContact :  ABContact) : java.lang.Object {
      return User.util.getCurrentUser().UseHelperLabels ? DisplayKey.get("Training.AddressesLDVHelper") : DisplayKey.get("Training.AddressesLDV")
    }
    
    override property get CurrentLocation () : pcf.ABContactAddressesPage {
      return super.CurrentLocation as pcf.ABContactAddressesPage
    }
    
    property get anABContact () : ABContact {
      return getVariableValue("anABContact", 0) as ABContact
    }
    
    property set anABContact ($arg :  ABContact) {
      setVariableValue("anABContact", 0, $arg)
    }
    
    
  }
  
  
}