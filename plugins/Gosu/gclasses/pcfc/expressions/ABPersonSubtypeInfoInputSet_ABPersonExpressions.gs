package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/training/ABPerson/ABPersonSubtypeInfoInputSet.ABPerson.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ABPersonSubtypeInfoInputSet_ABPersonExpressions {
  @javax.annotation.Generated("config/web/pcf/training/ABPerson/ABPersonSubtypeInfoInputSet.ABPerson.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ABPersonSubtypeInfoInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextInput (id=DriversLicense_Input) at ABPersonSubtypeInfoInputSet.ABPerson.pcf: line 18, column 55
    function defaultSetter_1 (__VALUE_TO_SET :  java.lang.Object) : void {
      (anABContact as ABPerson).LicenseNumber = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TypeKeyInput (id=State_Input) at ABPersonSubtypeInfoInputSet.ABPerson.pcf: line 27, column 41
    function defaultSetter_6 (__VALUE_TO_SET :  java.lang.Object) : void {
      (anABContact as ABPerson).LicenseState = (__VALUE_TO_SET as typekey.Jurisdiction)
    }
    
    // 'required' attribute on TypeKeyInput (id=State_Input) at ABPersonSubtypeInfoInputSet.ABPerson.pcf: line 27, column 41
    function required_4 () : java.lang.Boolean {
      return (anABContact as ABPerson).LicenseNumber != null
    }
    
    // 'value' attribute on TextInput (id=DriversLicense_Input) at ABPersonSubtypeInfoInputSet.ABPerson.pcf: line 18, column 55
    function valueRoot_2 () : java.lang.Object {
      return (anABContact as ABPerson)
    }
    
    // 'value' attribute on TextInput (id=DriversLicense_Input) at ABPersonSubtypeInfoInputSet.ABPerson.pcf: line 18, column 55
    function value_0 () : java.lang.String {
      return (anABContact as ABPerson).LicenseNumber
    }
    
    // 'value' attribute on TypeKeyInput (id=State_Input) at ABPersonSubtypeInfoInputSet.ABPerson.pcf: line 27, column 41
    function value_5 () : typekey.Jurisdiction {
      return (anABContact as ABPerson).LicenseState
    }
    
    property get anABContact () : ABContact {
      return getRequireValue("anABContact", 0) as ABContact
    }
    
    property set anABContact ($arg :  ABContact) {
      setRequireValue("anABContact", 0, $arg)
    }
    
    
  }
  
  
}