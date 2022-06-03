package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/training/ABContact/Details/ABContactDetailsPlaceDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ABContactDetailsPlaceDVExpressions {
  @javax.annotation.Generated("config/web/pcf/training/ABContact/Details/ABContactDetailsPlaceDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ABContactDetailsPlaceDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on InputSetRef at ABContactDetailsPlaceDV.pcf: line 21, column 53
    function def_onEnter_4 (def :  pcf.ContactInsightsInputSet) : void {
      def.onEnter(anABContact)
    }
    
    // 'def' attribute on InputSetRef at ABContactDetailsPlaceDV.pcf: line 21, column 53
    function def_refreshVariables_5 (def :  pcf.ContactInsightsInputSet) : void {
      def.refreshVariables(anABContact)
    }
    
    // 'value' attribute on TextInput (id=Name_Input) at ABContactDetailsPlaceDV.pcf: line 19, column 48
    function defaultSetter_1 (__VALUE_TO_SET :  java.lang.Object) : void {
      (anABContact as ABPlace).Name = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=Name_Input) at ABContactDetailsPlaceDV.pcf: line 19, column 48
    function valueRoot_2 () : java.lang.Object {
      return (anABContact as ABPlace)
    }
    
    // 'value' attribute on TextInput (id=Name_Input) at ABContactDetailsPlaceDV.pcf: line 19, column 48
    function value_0 () : java.lang.String {
      return (anABContact as ABPlace).Name
    }
    
    property get anABContact () : ABContact {
      return getRequireValue("anABContact", 0) as ABContact
    }
    
    property set anABContact ($arg :  ABContact) {
      setRequireValue("anABContact", 0, $arg)
    }
    
    
  }
  
  
}