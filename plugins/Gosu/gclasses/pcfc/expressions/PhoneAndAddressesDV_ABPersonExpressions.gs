package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/training/ABContact/Details/PhoneAndAddressesDV.ABPerson.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class PhoneAndAddressesDV_ABPersonExpressions {
  @javax.annotation.Generated("config/web/pcf/training/ABContact/Details/PhoneAndAddressesDV.ABPerson.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PhoneAndAddressesDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on InputSetRef (id=BasicAddressInputSet) at PhoneAndAddressesDV.ABPerson.pcf: line 42, column 36
    function def_onEnter_18 (def :  pcf.AddressOwnerInputSet) : void {
      def.onEnter(anABContact.AddressOwner, true)
    }
    
    // 'def' attribute on InputSetRef (id=BasicAddressInputSet) at PhoneAndAddressesDV.ABPerson.pcf: line 42, column 36
    function def_refreshVariables_19 (def :  pcf.AddressOwnerInputSet) : void {
      def.refreshVariables(anABContact.AddressOwner, true)
    }
    
    // 'value' attribute on TypeKeyInput (id=PrimaryPhone_Input) at PhoneAndAddressesDV.ABPerson.pcf: line 20, column 47
    function defaultSetter_1 (__VALUE_TO_SET :  java.lang.Object) : void {
      (anABContact as ABPerson).PrimaryPhone = (__VALUE_TO_SET as typekey.PrimaryPhoneType)
    }
    
    // 'value' attribute on TextInput (id=HomePhone_Input) at PhoneAndAddressesDV.ABPerson.pcf: line 31, column 48
    function defaultSetter_10 (__VALUE_TO_SET :  java.lang.Object) : void {
      anABContact.HomePhone = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=BusinessPhone_Input) at PhoneAndAddressesDV.ABPerson.pcf: line 36, column 40
    function defaultSetter_15 (__VALUE_TO_SET :  java.lang.Object) : void {
      anABContact.WorkPhone = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=FaxPhone_Input) at PhoneAndAddressesDV.ABPerson.pcf: line 25, column 39
    function defaultSetter_5 (__VALUE_TO_SET :  java.lang.Object) : void {
      anABContact.FaxPhone = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TypeKeyInput (id=PrimaryPhone_Input) at PhoneAndAddressesDV.ABPerson.pcf: line 20, column 47
    function valueRoot_2 () : java.lang.Object {
      return (anABContact as ABPerson)
    }
    
    // 'value' attribute on TextInput (id=FaxPhone_Input) at PhoneAndAddressesDV.ABPerson.pcf: line 25, column 39
    function valueRoot_6 () : java.lang.Object {
      return anABContact
    }
    
    // 'value' attribute on TypeKeyInput (id=PrimaryPhone_Input) at PhoneAndAddressesDV.ABPerson.pcf: line 20, column 47
    function value_0 () : typekey.PrimaryPhoneType {
      return (anABContact as ABPerson).PrimaryPhone
    }
    
    // 'value' attribute on TextInput (id=BusinessPhone_Input) at PhoneAndAddressesDV.ABPerson.pcf: line 36, column 40
    function value_14 () : java.lang.String {
      return anABContact.WorkPhone
    }
    
    // 'value' attribute on TextInput (id=FaxPhone_Input) at PhoneAndAddressesDV.ABPerson.pcf: line 25, column 39
    function value_4 () : java.lang.String {
      return anABContact.FaxPhone
    }
    
    // 'value' attribute on TextInput (id=HomePhone_Input) at PhoneAndAddressesDV.ABPerson.pcf: line 31, column 48
    function value_9 () : java.lang.String {
      return anABContact.HomePhone
    }
    
    // 'visible' attribute on TextInput (id=HomePhone_Input) at PhoneAndAddressesDV.ABPerson.pcf: line 31, column 48
    function visible_8 () : java.lang.Boolean {
      return anABContact typeis ABPerson
    }
    
    property get anABContact () : ABContact {
      return getRequireValue("anABContact", 0) as ABContact
    }
    
    property set anABContact ($arg :  ABContact) {
      setRequireValue("anABContact", 0, $arg)
    }
    
    
  }
  
  
}