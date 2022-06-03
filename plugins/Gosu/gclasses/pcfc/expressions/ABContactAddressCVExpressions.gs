package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/training/ABContact/Address/ABContactAddressCV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ABContactAddressCVExpressions {
  @javax.annotation.Generated("config/web/pcf/training/ABContact/Address/ABContactAddressCV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ABContactAddressCVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on InputSetRef (id=globalAddressContainer) at ABContactAddressCV.pcf: line 33, column 47
    function def_onEnter_11 (def :  pcf.GlobalAddressInputSet_default) : void {
      def.onEnter(new gw.api.address.SecondaryAddressOwner(anAddress))
    }
    
    // 'def' attribute on InputSetRef (id=globalAddressContainer) at ABContactAddressCV.pcf: line 33, column 47
    function def_onEnter_7 (def :  pcf.GlobalAddressInputSet_BigToSmall) : void {
      def.onEnter(new gw.api.address.SecondaryAddressOwner(anAddress))
    }
    
    // 'def' attribute on InputSetRef (id=globalAddressContainer) at ABContactAddressCV.pcf: line 33, column 47
    function def_onEnter_9 (def :  pcf.GlobalAddressInputSet_PostCodeBeforeCity) : void {
      def.onEnter(new gw.api.address.SecondaryAddressOwner(anAddress))
    }
    
    // 'def' attribute on InputSetRef (id=globalAddressContainer) at ABContactAddressCV.pcf: line 33, column 47
    function def_refreshVariables_10 (def :  pcf.GlobalAddressInputSet_PostCodeBeforeCity) : void {
      def.refreshVariables(new gw.api.address.SecondaryAddressOwner(anAddress))
    }
    
    // 'def' attribute on InputSetRef (id=globalAddressContainer) at ABContactAddressCV.pcf: line 33, column 47
    function def_refreshVariables_12 (def :  pcf.GlobalAddressInputSet_default) : void {
      def.refreshVariables(new gw.api.address.SecondaryAddressOwner(anAddress))
    }
    
    // 'def' attribute on InputSetRef (id=globalAddressContainer) at ABContactAddressCV.pcf: line 33, column 47
    function def_refreshVariables_8 (def :  pcf.GlobalAddressInputSet_BigToSmall) : void {
      def.refreshVariables(new gw.api.address.SecondaryAddressOwner(anAddress))
    }
    
    // 'value' attribute on TypeKeyInput (id=AddressType_Input) at ABContactAddressCV.pcf: line 23, column 46
    function defaultSetter_1 (__VALUE_TO_SET :  java.lang.Object) : void {
      anAddress.AddressType = (__VALUE_TO_SET as typekey.AddressType)
    }
    
    // 'mode' attribute on InputSetRef (id=globalAddressContainer) at ABContactAddressCV.pcf: line 33, column 47
    function mode_13 () : java.lang.Object {
      return gw.api.address.AddressCountrySettings.getSettings(new gw.api.address.SecondaryAddressOwner(anAddress).SelectedCountry).PCFMode
    }
    
    // 'value' attribute on TypeKeyInput (id=AddressType_Input) at ABContactAddressCV.pcf: line 23, column 46
    function valueRoot_2 () : java.lang.Object {
      return anAddress
    }
    
    // 'value' attribute on TypeKeyInput (id=AddressType_Input) at ABContactAddressCV.pcf: line 23, column 46
    function value_0 () : typekey.AddressType {
      return anAddress.AddressType
    }
    
    property get anABContact () : ABContact {
      return getRequireValue("anABContact", 0) as ABContact
    }
    
    property set anABContact ($arg :  ABContact) {
      setRequireValue("anABContact", 0, $arg)
    }
    
    property get anAddress () : Address {
      return getRequireValue("anAddress", 0) as Address
    }
    
    property set anAddress ($arg :  Address) {
      setRequireValue("anAddress", 0, $arg)
    }
    
    
  }
  
  
}