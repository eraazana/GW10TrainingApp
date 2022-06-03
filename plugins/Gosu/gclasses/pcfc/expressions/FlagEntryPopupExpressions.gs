package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/training/ABContact/FlagEntry/FlagEntryPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class FlagEntryPopupExpressions {
  @javax.annotation.Generated("config/web/pcf/training/ABContact/FlagEntry/FlagEntryPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class FlagEntryPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (aFlagEntry :  FlagEntry) : int {
      return 0
    }
    
    // 'beforeCommit' attribute on Popup (id=FlagEntryPopup) at FlagEntryPopup.pcf: line 10, column 60
    function beforeCommit_4 (pickedValue :  java.lang.Object) : void {
      aFlagEntry.closeEntry()
    }
    
    // 'def' attribute on PanelRef at FlagEntryPopup.pcf: line 22, column 40
    function def_onEnter_2 (def :  pcf.FlagEntryDV) : void {
      def.onEnter(aFlagEntry)
    }
    
    // 'def' attribute on PanelRef at FlagEntryPopup.pcf: line 22, column 40
    function def_refreshVariables_3 (def :  pcf.FlagEntryDV) : void {
      def.refreshVariables(aFlagEntry)
    }
    
    // EditButtons at FlagEntryPopup.pcf: line 19, column 23
    function label_0 () : java.lang.Object {
      return gw.api.util.LocationUtil.hasOwnBundle(CurrentLocation) ? DisplayKey.get("Button.Update") : DisplayKey.get("Button.OK")
    }
    
    // 'visible' attribute on Toolbar at FlagEntryPopup.pcf: line 18, column 41
    function visible_1 () : java.lang.Boolean {
      return aFlagEntry.IsEditable
    }
    
    override property get CurrentLocation () : pcf.FlagEntryPopup {
      return super.CurrentLocation as pcf.FlagEntryPopup
    }
    
    property get aFlagEntry () : FlagEntry {
      return getVariableValue("aFlagEntry", 0) as FlagEntry
    }
    
    property set aFlagEntry ($arg :  FlagEntry) {
      setVariableValue("aFlagEntry", 0, $arg)
    }
    
    
  }
  
  
}