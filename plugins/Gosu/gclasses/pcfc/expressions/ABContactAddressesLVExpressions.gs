package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/training/ABContact/Address/ABContactAddressesLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ABContactAddressesLVExpressions {
  @javax.annotation.Generated("config/web/pcf/training/ABContact/Address/ABContactAddressesLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ABContactAddressesLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on RadioButtonCell (id=IsPrimaryAddress_Cell) at ABContactAddressesLV.pcf: line 31, column 23
    function sortValue_0 (currentAddress :  Address) : java.lang.Object {
      return currentAddress == anABContact.PrimaryAddress
    }
    
    // 'value' attribute on TypeKeyCell (id=AddressType_Cell) at ABContactAddressesLV.pcf: line 36, column 44
    function sortValue_1 (currentAddress :  Address) : java.lang.Object {
      return currentAddress.AddressType
    }
    
    // 'toAdd' attribute on RowIterator at ABContactAddressesLV.pcf: line 22, column 29
    function toAdd_11 (currentAddress :  Address) : void {
      anABContact.addAddress(currentAddress)
    }
    
    // 'toRemove' attribute on RowIterator at ABContactAddressesLV.pcf: line 22, column 29
    function toRemove_12 (currentAddress :  Address) : void {
      anABContact.removeAddress(currentAddress)
    }
    
    // 'value' attribute on RowIterator at ABContactAddressesLV.pcf: line 22, column 29
    function value_13 () : Address[] {
      return anABContact.AllAddresses
    }
    
    property get anABContact () : ABContact {
      return getRequireValue("anABContact", 0) as ABContact
    }
    
    property set anABContact ($arg :  ABContact) {
      setRequireValue("anABContact", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/training/ABContact/Address/ABContactAddressesLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends ABContactAddressesLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on RadioButtonCell (id=IsPrimaryAddress_Cell) at ABContactAddressesLV.pcf: line 31, column 23
    function action_2 () : void {
      anABContact.makePrimaryAddress( currentAddress )
    }
    
    // 'value' attribute on TypeKeyCell (id=AddressType_Cell) at ABContactAddressesLV.pcf: line 36, column 44
    function valueRoot_6 () : java.lang.Object {
      return currentAddress
    }
    
    // 'value' attribute on RadioButtonCell (id=IsPrimaryAddress_Cell) at ABContactAddressesLV.pcf: line 31, column 23
    function value_3 () : java.lang.Boolean {
      return currentAddress == anABContact.PrimaryAddress
    }
    
    // 'value' attribute on TypeKeyCell (id=AddressType_Cell) at ABContactAddressesLV.pcf: line 36, column 44
    function value_5 () : typekey.AddressType {
      return currentAddress.AddressType
    }
    
    // 'value' attribute on TextCell (id=DisplayName_Cell) at ABContactAddressesLV.pcf: line 39, column 47
    function value_8 () : java.lang.String {
      return currentAddress.DisplayName
    }
    
    property get currentAddress () : Address {
      return getIteratedValue(1) as Address
    }
    
    
  }
  
  
}