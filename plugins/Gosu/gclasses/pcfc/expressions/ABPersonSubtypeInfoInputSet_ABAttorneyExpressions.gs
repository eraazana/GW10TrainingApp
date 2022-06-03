package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/training/ABPerson/ABPersonSubtypeInfoInputSet.ABAttorney.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ABPersonSubtypeInfoInputSet_ABAttorneyExpressions {
  @javax.annotation.Generated("config/web/pcf/training/ABPerson/ABPersonSubtypeInfoInputSet.ABAttorney.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ABPersonSubtypeInfoInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextInput (id=LawLicense_Input) at ABPersonSubtypeInfoInputSet.ABAttorney.pcf: line 18, column 60
    function defaultSetter_1 (__VALUE_TO_SET :  java.lang.Object) : void {
      (anABContact as ABAttorney).AttorneyLicense = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TypeKeyInput (id=Specialty_Input) at ABPersonSubtypeInfoInputSet.ABAttorney.pcf: line 24, column 43
    function defaultSetter_5 (__VALUE_TO_SET :  java.lang.Object) : void {
      (anABContact as ABAttorney).AttorneySpecialty = (__VALUE_TO_SET as typekey.LegalSpecialty)
    }
    
    // 'value' attribute on TextInput (id=LawLicense_Input) at ABPersonSubtypeInfoInputSet.ABAttorney.pcf: line 18, column 60
    function valueRoot_2 () : java.lang.Object {
      return (anABContact as ABAttorney)
    }
    
    // 'value' attribute on TextInput (id=LawLicense_Input) at ABPersonSubtypeInfoInputSet.ABAttorney.pcf: line 18, column 60
    function value_0 () : java.lang.String {
      return (anABContact as ABAttorney).AttorneyLicense
    }
    
    // 'value' attribute on TypeKeyInput (id=Specialty_Input) at ABPersonSubtypeInfoInputSet.ABAttorney.pcf: line 24, column 43
    function value_4 () : typekey.LegalSpecialty {
      return (anABContact as ABAttorney).AttorneySpecialty
    }
    
    property get anABContact () : ABContact {
      return getRequireValue("anABContact", 0) as ABContact
    }
    
    property set anABContact ($arg :  ABContact) {
      setRequireValue("anABContact", 0, $arg)
    }
    
    
  }
  
  
}