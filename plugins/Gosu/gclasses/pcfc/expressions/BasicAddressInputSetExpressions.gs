package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/training/BasicAddressInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class BasicAddressInputSetExpressions {
  @javax.annotation.Generated("config/web/pcf/training/BasicAddressInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class BasicAddressInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextInput (id=City_Input) at BasicAddressInputSet.pcf: line 29, column 31
    function defaultSetter_10 (__VALUE_TO_SET :  java.lang.Object) : void {
      anAddress.City = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=County_Input) at BasicAddressInputSet.pcf: line 34, column 33
    function defaultSetter_14 (__VALUE_TO_SET :  java.lang.Object) : void {
      anAddress.County = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TypeKeyInput (id=State_Input) at BasicAddressInputSet.pcf: line 41, column 34
    function defaultSetter_19 (__VALUE_TO_SET :  java.lang.Object) : void {
      anAddress.State = (__VALUE_TO_SET as typekey.State)
    }
    
    // 'value' attribute on TextInput (id=AddressLine1_Input) at BasicAddressInputSet.pcf: line 18, column 39
    function defaultSetter_2 (__VALUE_TO_SET :  java.lang.Object) : void {
      anAddress.AddressLine1 = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=PostalCode_Input) at BasicAddressInputSet.pcf: line 46, column 37
    function defaultSetter_24 (__VALUE_TO_SET :  java.lang.Object) : void {
      anAddress.PostalCode = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TypeKeyInput (id=Country_Input) at BasicAddressInputSet.pcf: line 52, column 36
    function defaultSetter_28 (__VALUE_TO_SET :  java.lang.Object) : void {
      anAddress.Country = (__VALUE_TO_SET as typekey.Country)
    }
    
    // 'value' attribute on TextInput (id=Description_Input) at BasicAddressInputSet.pcf: line 57, column 38
    function defaultSetter_32 (__VALUE_TO_SET :  java.lang.Object) : void {
      anAddress.Description = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on DateInput (id=ValidUntil_Input) at BasicAddressInputSet.pcf: line 62, column 37
    function defaultSetter_36 (__VALUE_TO_SET :  java.lang.Object) : void {
      anAddress.ValidUntil = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on TextInput (id=AddressLine2_Input) at BasicAddressInputSet.pcf: line 23, column 39
    function defaultSetter_6 (__VALUE_TO_SET :  java.lang.Object) : void {
      anAddress.AddressLine2 = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'initialValue' attribute on Variable at BasicAddressInputSet.pcf: line 13, column 23
    function initialValue_0 () : boolean {
      return showUSSpecificFields()
    }
    
    // 'value' attribute on TextInput (id=AddressLine1_Input) at BasicAddressInputSet.pcf: line 18, column 39
    function valueRoot_3 () : java.lang.Object {
      return anAddress
    }
    
    // 'value' attribute on TextInput (id=AddressLine1_Input) at BasicAddressInputSet.pcf: line 18, column 39
    function value_1 () : java.lang.String {
      return anAddress.AddressLine1
    }
    
    // 'value' attribute on TextInput (id=County_Input) at BasicAddressInputSet.pcf: line 34, column 33
    function value_13 () : java.lang.String {
      return anAddress.County
    }
    
    // 'value' attribute on TypeKeyInput (id=State_Input) at BasicAddressInputSet.pcf: line 41, column 34
    function value_18 () : typekey.State {
      return anAddress.State
    }
    
    // 'value' attribute on TextInput (id=PostalCode_Input) at BasicAddressInputSet.pcf: line 46, column 37
    function value_23 () : java.lang.String {
      return anAddress.PostalCode
    }
    
    // 'value' attribute on TypeKeyInput (id=Country_Input) at BasicAddressInputSet.pcf: line 52, column 36
    function value_27 () : typekey.Country {
      return anAddress.Country
    }
    
    // 'value' attribute on TextInput (id=Description_Input) at BasicAddressInputSet.pcf: line 57, column 38
    function value_31 () : java.lang.String {
      return anAddress.Description
    }
    
    // 'value' attribute on DateInput (id=ValidUntil_Input) at BasicAddressInputSet.pcf: line 62, column 37
    function value_35 () : java.util.Date {
      return anAddress.ValidUntil
    }
    
    // 'value' attribute on TextInput (id=AddressLine2_Input) at BasicAddressInputSet.pcf: line 23, column 39
    function value_5 () : java.lang.String {
      return anAddress.AddressLine2
    }
    
    // 'value' attribute on TextInput (id=City_Input) at BasicAddressInputSet.pcf: line 29, column 31
    function value_9 () : java.lang.String {
      return anAddress.City
    }
    
    // 'visible' attribute on TypeKeyInput (id=State_Input) at BasicAddressInputSet.pcf: line 41, column 34
    function visible_17 () : java.lang.Boolean {
      return ShowUSSpecificFields
    }
    
    property get ShowUSSpecificFields () : boolean {
      return getVariableValue("ShowUSSpecificFields", 0) as java.lang.Boolean
    }
    
    property set ShowUSSpecificFields ($arg :  boolean) {
      setVariableValue("ShowUSSpecificFields", 0, $arg)
    }
    
    property get anAddress () : Address {
      return getRequireValue("anAddress", 0) as Address
    }
    
    property set anAddress ($arg :  Address) {
      setRequireValue("anAddress", 0, $arg)
    }
    
    /* function returns  local variable for PCF; use local variables where possible for ScriptParameters */
    function showUSSpecificFields() : boolean {
      if (ScriptParameters.ShowUSSpecificFields !=null) {
        return ScriptParameters.ShowUSSpecificFields
      }
      return true
    } 
    
    
  }
  
  
}