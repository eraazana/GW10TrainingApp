package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/contacts/NewContactPickerMenuItemSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class NewContactPickerMenuItemSetExpressions {
  @javax.annotation.Generated("config/web/pcf/contacts/NewContactPickerMenuItemSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class NewContactPickerMenuItemSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on MenuItem (id=NewContactPickerMenuItemSet_AdjudicatorMenuItem) at NewContactPickerMenuItemSet.pcf: line 21, column 79
    function action_1 () : void {
      NewContactPopup.push(entity.ABAdjudicator, parentContact)
    }
    
    // 'action' attribute on MenuItem (id=NewContactPickerMenuItemSet_UserContactMenuItem) at NewContactPickerMenuItemSet.pcf: line 36, column 79
    function action_10 () : void {
      NewContactPopup.push(entity.ABUserContact, parentContact)
    }
    
    // 'action' attribute on MenuItem (id=NewContactPickerMenuItemSet_AttorneyMenuItem) at NewContactPickerMenuItemSet.pcf: line 45, column 78
    function action_13 () : void {
      NewContactPopup.push(entity.ABAttorney, parentContact)
    }
    
    // 'action' attribute on MenuItem (id=NewContactPickerMenuItemSet_DoctorMenuItem) at NewContactPickerMenuItemSet.pcf: line 50, column 76
    function action_16 () : void {
      NewContactPopup.push(entity.ABDoctor, parentContact)
    }
    
    // 'action' attribute on MenuItem (id=NewContactPickerMenuItemSet_OtherPersonVendorMenuItem) at NewContactPickerMenuItemSet.pcf: line 55, column 82
    function action_19 () : void {
      NewContactPopup.push(entity.ABPersonVendor, parentContact)
    }
    
    // 'action' attribute on MenuItem (id=NewContactPickerMenuItemSet_OtherCompanyMenuItem) at NewContactPickerMenuItemSet.pcf: line 66, column 75
    function action_24 () : void {
      NewContactPopup.push(entity.ABCompany, parentContact)
    }
    
    // 'action' attribute on MenuItem (id=NewContactPickerMenuItemSet_PolicyCompanyMenuItem) at NewContactPickerMenuItemSet.pcf: line 71, column 75
    function action_27 () : void {
      NewContactPopup.push(entity.ABPolicyCompany, parentContact)
    }
    
    // 'action' attribute on MenuItem (id=NewContactPickerMenuItemSet_AutoRepairShopMenuItem) at NewContactPickerMenuItemSet.pcf: line 80, column 84
    function action_30 () : void {
      NewContactPopup.push(entity.ABAutoRepairShop, parentContact)
    }
    
    // 'action' attribute on MenuItem (id=NewContactPickerMenuItemSet_AutoTowingAgcyMenuItem) at NewContactPickerMenuItemSet.pcf: line 85, column 84
    function action_33 () : void {
      NewContactPopup.push(entity.ABAutoTowingAgcy, parentContact)
    }
    
    // 'action' attribute on MenuItem (id=NewContactPickerMenuItemSet_LawFirmMenuItem) at NewContactPickerMenuItemSet.pcf: line 90, column 77
    function action_36 () : void {
      NewContactPopup.push(entity.ABLawFirm, parentContact)
    }
    
    // 'action' attribute on MenuItem (id=NewContactPickerMenuItemSet_MedicalCareOrgMenuItem) at NewContactPickerMenuItemSet.pcf: line 95, column 84
    function action_39 () : void {
      NewContactPopup.push(entity.ABMedicalCareOrg, parentContact)
    }
    
    // 'action' attribute on MenuItem (id=NewContactPickerMenuItemSet_OtherPersonMenuItem) at NewContactPickerMenuItemSet.pcf: line 26, column 73
    function action_4 () : void {
      NewContactPopup.push(entity.ABPerson, parentContact)
    }
    
    // 'action' attribute on MenuItem (id=NewContactPickerMenuItemSet_OtherCompanyVendorMenuItem) at NewContactPickerMenuItemSet.pcf: line 100, column 83
    function action_42 () : void {
      NewContactPopup.push(entity.ABCompanyVendor, parentContact)
    }
    
    // 'action' attribute on MenuItem (id=NewContactPickerMenuItemSet_LegalVenueMenuItem) at NewContactPickerMenuItemSet.pcf: line 111, column 78
    function action_47 () : void {
      NewContactPopup.push(entity.ABLegalVenue, parentContact)
    }
    
    // 'action' attribute on MenuItem (id=NewContactPickerMenuItemSet_OtherPlaceMenuItem) at NewContactPickerMenuItemSet.pcf: line 116, column 73
    function action_50 () : void {
      NewContactPopup.push(entity.ABPlace, parentContact)
    }
    
    // 'action' attribute on MenuItem (id=NewContactPickerMenuItemSet_PolicyPersonMenuItem) at NewContactPickerMenuItemSet.pcf: line 31, column 73
    function action_7 () : void {
      NewContactPopup.push(entity.ABPolicyPerson, parentContact)
    }
    
    // 'action' attribute on MenuItem (id=NewContactPickerMenuItemSet_UserContactMenuItem) at NewContactPickerMenuItemSet.pcf: line 36, column 79
    function action_dest_11 () : pcf.api.Destination {
      return pcf.NewContactPopup.createDestination(entity.ABUserContact, parentContact)
    }
    
    // 'action' attribute on MenuItem (id=NewContactPickerMenuItemSet_AttorneyMenuItem) at NewContactPickerMenuItemSet.pcf: line 45, column 78
    function action_dest_14 () : pcf.api.Destination {
      return pcf.NewContactPopup.createDestination(entity.ABAttorney, parentContact)
    }
    
    // 'action' attribute on MenuItem (id=NewContactPickerMenuItemSet_DoctorMenuItem) at NewContactPickerMenuItemSet.pcf: line 50, column 76
    function action_dest_17 () : pcf.api.Destination {
      return pcf.NewContactPopup.createDestination(entity.ABDoctor, parentContact)
    }
    
    // 'action' attribute on MenuItem (id=NewContactPickerMenuItemSet_AdjudicatorMenuItem) at NewContactPickerMenuItemSet.pcf: line 21, column 79
    function action_dest_2 () : pcf.api.Destination {
      return pcf.NewContactPopup.createDestination(entity.ABAdjudicator, parentContact)
    }
    
    // 'action' attribute on MenuItem (id=NewContactPickerMenuItemSet_OtherPersonVendorMenuItem) at NewContactPickerMenuItemSet.pcf: line 55, column 82
    function action_dest_20 () : pcf.api.Destination {
      return pcf.NewContactPopup.createDestination(entity.ABPersonVendor, parentContact)
    }
    
    // 'action' attribute on MenuItem (id=NewContactPickerMenuItemSet_OtherCompanyMenuItem) at NewContactPickerMenuItemSet.pcf: line 66, column 75
    function action_dest_25 () : pcf.api.Destination {
      return pcf.NewContactPopup.createDestination(entity.ABCompany, parentContact)
    }
    
    // 'action' attribute on MenuItem (id=NewContactPickerMenuItemSet_PolicyCompanyMenuItem) at NewContactPickerMenuItemSet.pcf: line 71, column 75
    function action_dest_28 () : pcf.api.Destination {
      return pcf.NewContactPopup.createDestination(entity.ABPolicyCompany, parentContact)
    }
    
    // 'action' attribute on MenuItem (id=NewContactPickerMenuItemSet_AutoRepairShopMenuItem) at NewContactPickerMenuItemSet.pcf: line 80, column 84
    function action_dest_31 () : pcf.api.Destination {
      return pcf.NewContactPopup.createDestination(entity.ABAutoRepairShop, parentContact)
    }
    
    // 'action' attribute on MenuItem (id=NewContactPickerMenuItemSet_AutoTowingAgcyMenuItem) at NewContactPickerMenuItemSet.pcf: line 85, column 84
    function action_dest_34 () : pcf.api.Destination {
      return pcf.NewContactPopup.createDestination(entity.ABAutoTowingAgcy, parentContact)
    }
    
    // 'action' attribute on MenuItem (id=NewContactPickerMenuItemSet_LawFirmMenuItem) at NewContactPickerMenuItemSet.pcf: line 90, column 77
    function action_dest_37 () : pcf.api.Destination {
      return pcf.NewContactPopup.createDestination(entity.ABLawFirm, parentContact)
    }
    
    // 'action' attribute on MenuItem (id=NewContactPickerMenuItemSet_MedicalCareOrgMenuItem) at NewContactPickerMenuItemSet.pcf: line 95, column 84
    function action_dest_40 () : pcf.api.Destination {
      return pcf.NewContactPopup.createDestination(entity.ABMedicalCareOrg, parentContact)
    }
    
    // 'action' attribute on MenuItem (id=NewContactPickerMenuItemSet_OtherCompanyVendorMenuItem) at NewContactPickerMenuItemSet.pcf: line 100, column 83
    function action_dest_43 () : pcf.api.Destination {
      return pcf.NewContactPopup.createDestination(entity.ABCompanyVendor, parentContact)
    }
    
    // 'action' attribute on MenuItem (id=NewContactPickerMenuItemSet_LegalVenueMenuItem) at NewContactPickerMenuItemSet.pcf: line 111, column 78
    function action_dest_48 () : pcf.api.Destination {
      return pcf.NewContactPopup.createDestination(entity.ABLegalVenue, parentContact)
    }
    
    // 'action' attribute on MenuItem (id=NewContactPickerMenuItemSet_OtherPersonMenuItem) at NewContactPickerMenuItemSet.pcf: line 26, column 73
    function action_dest_5 () : pcf.api.Destination {
      return pcf.NewContactPopup.createDestination(entity.ABPerson, parentContact)
    }
    
    // 'action' attribute on MenuItem (id=NewContactPickerMenuItemSet_OtherPlaceMenuItem) at NewContactPickerMenuItemSet.pcf: line 116, column 73
    function action_dest_51 () : pcf.api.Destination {
      return pcf.NewContactPopup.createDestination(entity.ABPlace, parentContact)
    }
    
    // 'action' attribute on MenuItem (id=NewContactPickerMenuItemSet_PolicyPersonMenuItem) at NewContactPickerMenuItemSet.pcf: line 31, column 73
    function action_dest_8 () : pcf.api.Destination {
      return pcf.NewContactPopup.createDestination(entity.ABPolicyPerson, parentContact)
    }
    
    // 'visible' attribute on MenuItem (id=NewContactPickerMenuItemSet_AdjudicatorMenuItem) at NewContactPickerMenuItemSet.pcf: line 21, column 79
    function visible_0 () : java.lang.Boolean {
      return requiredContactType.isAssignableFrom(entity.ABAdjudicator)
    }
    
    // 'visible' attribute on MenuItem (id=NewContactPickerMenuItemSet_AttorneyMenuItem) at NewContactPickerMenuItemSet.pcf: line 45, column 78
    function visible_12 () : java.lang.Boolean {
      return requiredContactType.isAssignableFrom(entity.ABAttorney)
    }
    
    // 'visible' attribute on MenuItem (id=NewContactPickerMenuItemSet_DoctorMenuItem) at NewContactPickerMenuItemSet.pcf: line 50, column 76
    function visible_15 () : java.lang.Boolean {
      return requiredContactType.isAssignableFrom(entity.ABDoctor)
    }
    
    // 'visible' attribute on MenuItem (id=NewContactPickerMenuItemSet_OtherPersonVendorMenuItem) at NewContactPickerMenuItemSet.pcf: line 55, column 82
    function visible_18 () : java.lang.Boolean {
      return requiredContactType.isAssignableFrom(entity.ABPersonVendor)
    }
    
    // 'visible' attribute on MenuItem (id=NewContactPickerMenuItemSet_OtherCompanyMenuItem) at NewContactPickerMenuItemSet.pcf: line 66, column 75
    function visible_23 () : java.lang.Boolean {
      return requiredContactType.isAssignableFrom(entity.ABCompany)
    }
    
    // 'visible' attribute on MenuItem (id=NewContactPickerMenuItemSet_AutoRepairShopMenuItem) at NewContactPickerMenuItemSet.pcf: line 80, column 84
    function visible_29 () : java.lang.Boolean {
      return requiredContactType.isAssignableFrom(entity.ABAutoRepairShop)
    }
    
    // 'visible' attribute on MenuItem (id=NewContactPickerMenuItemSet_OtherPersonMenuItem) at NewContactPickerMenuItemSet.pcf: line 26, column 73
    function visible_3 () : java.lang.Boolean {
      return requiredContactType.isAssignableFrom(entity.ABPerson)
    }
    
    // 'visible' attribute on MenuItem (id=NewContactPickerMenuItemSet_AutoTowingAgcyMenuItem) at NewContactPickerMenuItemSet.pcf: line 85, column 84
    function visible_32 () : java.lang.Boolean {
      return requiredContactType.isAssignableFrom(entity.ABAutoTowingAgcy)
    }
    
    // 'visible' attribute on MenuItem (id=NewContactPickerMenuItemSet_LawFirmMenuItem) at NewContactPickerMenuItemSet.pcf: line 90, column 77
    function visible_35 () : java.lang.Boolean {
      return requiredContactType.isAssignableFrom(entity.ABLawFirm)
    }
    
    // 'visible' attribute on MenuItem (id=NewContactPickerMenuItemSet_MedicalCareOrgMenuItem) at NewContactPickerMenuItemSet.pcf: line 95, column 84
    function visible_38 () : java.lang.Boolean {
      return requiredContactType.isAssignableFrom(entity.ABMedicalCareOrg)
    }
    
    // 'visible' attribute on MenuItem (id=NewContactPickerMenuItemSet_OtherCompanyVendorMenuItem) at NewContactPickerMenuItemSet.pcf: line 100, column 83
    function visible_41 () : java.lang.Boolean {
      return requiredContactType.isAssignableFrom(entity.ABCompanyVendor)
    }
    
    // 'visible' attribute on MenuItem (id=NewContactPickerMenuItemSet_LegalVenueMenuItem) at NewContactPickerMenuItemSet.pcf: line 111, column 78
    function visible_46 () : java.lang.Boolean {
      return requiredContactType.isAssignableFrom(entity.ABLegalVenue)
    }
    
    // 'visible' attribute on MenuItem (id=NewContactPickerMenuItemSet_OtherPlaceMenuItem) at NewContactPickerMenuItemSet.pcf: line 116, column 73
    function visible_49 () : java.lang.Boolean {
      return requiredContactType.isAssignableFrom(entity.ABPlace)
    }
    
    // 'visible' attribute on MenuItem (id=NewContactPickerMenuItemSet_UserContactMenuItem) at NewContactPickerMenuItemSet.pcf: line 36, column 79
    function visible_9 () : java.lang.Boolean {
      return requiredContactType.isAssignableFrom(entity.ABUserContact)
    }
    
    property get parentContact () : ABContact {
      return getRequireValue("parentContact", 0) as ABContact
    }
    
    property set parentContact ($arg :  ABContact) {
      setRequireValue("parentContact", 0, $arg)
    }
    
    property get requiredContactType () : Type {
      return getRequireValue("requiredContactType", 0) as Type
    }
    
    property set requiredContactType ($arg :  Type) {
      setRequireValue("requiredContactType", 0, $arg)
    }
    
    
  }
  
  
}