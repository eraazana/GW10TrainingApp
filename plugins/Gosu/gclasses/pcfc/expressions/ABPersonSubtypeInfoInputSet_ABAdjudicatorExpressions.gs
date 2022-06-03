package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/training/ABPerson/ABPersonSubtypeInfoInputSet.ABAdjudicator.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ABPersonSubtypeInfoInputSet_ABAdjudicatorExpressions {
  @javax.annotation.Generated("config/web/pcf/training/ABPerson/ABPersonSubtypeInfoInputSet.ABAdjudicator.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ABPersonSubtypeInfoInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextInput (id=AdjudicatorLicense_Input) at ABPersonSubtypeInfoInputSet.ABAdjudicator.pcf: line 18, column 66
    function defaultSetter_1 (__VALUE_TO_SET :  java.lang.Object) : void {
      (anABContact as ABAdjudicator).AdjudicatorLicense = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TypeKeyInput (id=AdjudicatorDomain_Input) at ABPersonSubtypeInfoInputSet.ABAdjudicator.pcf: line 24, column 47
    function defaultSetter_5 (__VALUE_TO_SET :  java.lang.Object) : void {
      (anABContact as ABAdjudicator).AdjudicativeDomain = (__VALUE_TO_SET as typekey.AdjudicativeDomain)
    }
    
    // 'value' attribute on TextInput (id=AdjudicatorLicense_Input) at ABPersonSubtypeInfoInputSet.ABAdjudicator.pcf: line 18, column 66
    function valueRoot_2 () : java.lang.Object {
      return (anABContact as ABAdjudicator)
    }
    
    // 'value' attribute on TextInput (id=AdjudicatorLicense_Input) at ABPersonSubtypeInfoInputSet.ABAdjudicator.pcf: line 18, column 66
    function value_0 () : java.lang.String {
      return (anABContact as ABAdjudicator).AdjudicatorLicense
    }
    
    // 'value' attribute on TypeKeyInput (id=AdjudicatorDomain_Input) at ABPersonSubtypeInfoInputSet.ABAdjudicator.pcf: line 24, column 47
    function value_4 () : typekey.AdjudicativeDomain {
      return (anABContact as ABAdjudicator).AdjudicativeDomain
    }
    
    property get anABContact () : ABContact {
      return getRequireValue("anABContact", 0) as ABContact
    }
    
    property set anABContact ($arg :  ABContact) {
      setRequireValue("anABContact", 0, $arg)
    }
    
    
  }
  
  
}