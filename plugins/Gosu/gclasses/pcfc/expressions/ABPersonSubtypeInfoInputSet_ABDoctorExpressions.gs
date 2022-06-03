package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/training/ABPerson/ABPersonSubtypeInfoInputSet.ABDoctor.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ABPersonSubtypeInfoInputSet_ABDoctorExpressions {
  @javax.annotation.Generated("config/web/pcf/training/ABPerson/ABPersonSubtypeInfoInputSet.ABDoctor.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ABPersonSubtypeInfoInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TypeKeyInput (id=DoctorCategory_Input) at ABPersonSubtypeInfoInputSet.ABDoctor.pcf: line 19, column 47
    function defaultSetter_1 (__VALUE_TO_SET :  java.lang.Object) : void {
      (anABContact as ABDoctor).DoctorCategory = (__VALUE_TO_SET as typekey.DoctorCategoryType)
    }
    
    // 'value' attribute on TypeKeyInput (id=DoctorSpecialty_Input) at ABPersonSubtypeInfoInputSet.ABDoctor.pcf: line 25, column 42
    function defaultSetter_5 (__VALUE_TO_SET :  java.lang.Object) : void {
      (anABContact as ABDoctor).DoctorSpecialty = (__VALUE_TO_SET as typekey.SpecialtyType)
    }
    
    // 'value' attribute on TypeKeyInput (id=DoctorCategory_Input) at ABPersonSubtypeInfoInputSet.ABDoctor.pcf: line 19, column 47
    function valueRoot_2 () : java.lang.Object {
      return (anABContact as ABDoctor)
    }
    
    // 'value' attribute on TypeKeyInput (id=DoctorCategory_Input) at ABPersonSubtypeInfoInputSet.ABDoctor.pcf: line 19, column 47
    function value_0 () : typekey.DoctorCategoryType {
      return (anABContact as ABDoctor).DoctorCategory
    }
    
    // 'value' attribute on TypeKeyInput (id=DoctorSpecialty_Input) at ABPersonSubtypeInfoInputSet.ABDoctor.pcf: line 25, column 42
    function value_4 () : typekey.SpecialtyType {
      return (anABContact as ABDoctor).DoctorSpecialty
    }
    
    property get anABContact () : ABContact {
      return getRequireValue("anABContact", 0) as ABContact
    }
    
    property set anABContact ($arg :  ABContact) {
      setRequireValue("anABContact", 0, $arg)
    }
    
    
  }
  
  
}