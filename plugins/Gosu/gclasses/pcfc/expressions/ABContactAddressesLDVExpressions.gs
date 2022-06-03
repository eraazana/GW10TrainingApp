package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/training/ABContact/Address/ABContactAddressesLDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ABContactAddressesLDVExpressions {
  @javax.annotation.Generated("config/web/pcf/training/ABContact/Address/ABContactAddressesLDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ABContactAddressesLDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ToolbarButton (id=DeleteSecondaryAddresses) at ABContactAddressesLDV.pcf: line 22, column 82
    function action_1 () : void {
      deleteABContactSecondaryAddresses()
    }
    
    // 'available' attribute on ToolbarButton (id=DeleteSecondaryAddresses) at ABContactAddressesLDV.pcf: line 22, column 82
    function available_0 () : java.lang.Boolean {
      return (anABContact.SecondaryAddresses.length > 0) and CurrentLocation.InEditMode
    }
    
    // 'def' attribute on PanelRef at ABContactAddressesLDV.pcf: line 13, column 47
    function def_onEnter_2 (def :  pcf.ABContactAddressesLV) : void {
      def.onEnter(anABContact)
    }
    
    // 'def' attribute on PanelRef at ABContactAddressesLDV.pcf: line 26, column 63
    function def_onEnter_4 (def :  pcf.ABContactAddressCV) : void {
      def.onEnter(SelectedAddress, anABContact)
    }
    
    // 'def' attribute on PanelRef at ABContactAddressesLDV.pcf: line 13, column 47
    function def_refreshVariables_3 (def :  pcf.ABContactAddressesLV) : void {
      def.refreshVariables(anABContact)
    }
    
    // 'def' attribute on PanelRef at ABContactAddressesLDV.pcf: line 26, column 63
    function def_refreshVariables_5 (def :  pcf.ABContactAddressCV) : void {
      def.refreshVariables(SelectedAddress, anABContact)
    }
    
    property get SelectedAddress () : Address {
      return getCurrentSelection(0) as Address
    }
    
    property set SelectedAddress ($arg :  Address) {
      setCurrentSelection(0, $arg)
    }
    
    property get anABContact () : ABContact {
      return getRequireValue("anABContact", 0) as ABContact
    }
    
    property set anABContact ($arg :  ABContact) {
      setRequireValue("anABContact", 0, $arg)
    }
    
    /* This function deletes all addresses in the root object's
       SecondaryAddresses array.
    */
    
    function deleteABContactSecondaryAddresses(): void {
      for (currentAddress in anABContact.AllAddresses) {
        anABContact.removeAddress(currentAddress)
      }
    }
    
    
  }
  
  
}