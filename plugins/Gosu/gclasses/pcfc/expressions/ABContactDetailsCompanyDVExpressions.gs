package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/training/ABContact/Details/ABContactDetailsCompanyDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ABContactDetailsCompanyDVExpressions {
  @javax.annotation.Generated("config/web/pcf/training/ABContact/Details/ABContactDetailsCompanyDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ABContactDetailsCompanyDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ToolbarButton (id=CascadeEmailAddress) at ABContactDetailsCompanyDV.pcf: line 172, column 87
    function action_106 () : void {
      cascadeCompanyMainEmailAddress()
    }
    
    // 'available' attribute on ToolbarButton (id=CascadeEmailAddress) at ABContactDetailsCompanyDV.pcf: line 172, column 87
    function available_105 () : java.lang.Boolean {
      return CurrentLocation.InEditMode and (anABContact as ABCompany).EmailAddress1 != null
    }
    
    // 'available' attribute on TextInput (id=EmailAddress_Input) at ABContactDetailsCompanyDV.pcf: line 46, column 73
    function available_20 () : java.lang.Boolean {
      return (anABContact as ABCompany).PrimaryContact !=null
    }
    
    // 'available' attribute on BooleanRadioInput (id=PrefersContactByEmail_Input) at ABContactDetailsCompanyDV.pcf: line 57, column 84
    function available_26 () : java.lang.Boolean {
      return (anABContact as ABCompany).PrimaryContact.EmailAddress1 != null
    }
    
    // 'def' attribute on ListViewInput (id=ABCompanyEmployeesLV) at ABContactDetailsCompanyDV.pcf: line 166, column 70
    function def_onEnter_108 (def :  pcf.ABCompanyEmployeesLV) : void {
      def.onEnter(anABContact)
    }
    
    // 'def' attribute on InputSetRef (id=globalAddressContainer) at ABContactDetailsCompanyDV.pcf: line 40, column 43
    function def_onEnter_13 (def :  pcf.GlobalAddressInputSet_BigToSmall) : void {
      def.onEnter(new gw.api.address.SecondaryAddressOwner(getCompanyPrimaryAddress()))
    }
    
    // 'def' attribute on InputSetRef at ABContactDetailsCompanyDV.pcf: line 208, column 53
    function def_onEnter_131 (def :  pcf.ContactInsightsInputSet) : void {
      def.onEnter(anABContact)
    }
    
    // 'def' attribute on InputSetRef (id=globalAddressContainer) at ABContactDetailsCompanyDV.pcf: line 40, column 43
    function def_onEnter_15 (def :  pcf.GlobalAddressInputSet_PostCodeBeforeCity) : void {
      def.onEnter(new gw.api.address.SecondaryAddressOwner(getCompanyPrimaryAddress()))
    }
    
    // 'def' attribute on InputSetRef (id=globalAddressContainer) at ABContactDetailsCompanyDV.pcf: line 40, column 43
    function def_onEnter_17 (def :  pcf.GlobalAddressInputSet_default) : void {
      def.onEnter(new gw.api.address.SecondaryAddressOwner(getCompanyPrimaryAddress()))
    }
    
    // 'def' attribute on ListViewInput (id=ABCompanyEmployeesLV) at ABContactDetailsCompanyDV.pcf: line 166, column 70
    function def_refreshVariables_109 (def :  pcf.ABCompanyEmployeesLV) : void {
      def.refreshVariables(anABContact)
    }
    
    // 'def' attribute on InputSetRef at ABContactDetailsCompanyDV.pcf: line 208, column 53
    function def_refreshVariables_132 (def :  pcf.ContactInsightsInputSet) : void {
      def.refreshVariables(anABContact)
    }
    
    // 'def' attribute on InputSetRef (id=globalAddressContainer) at ABContactDetailsCompanyDV.pcf: line 40, column 43
    function def_refreshVariables_14 (def :  pcf.GlobalAddressInputSet_BigToSmall) : void {
      def.refreshVariables(new gw.api.address.SecondaryAddressOwner(getCompanyPrimaryAddress()))
    }
    
    // 'def' attribute on InputSetRef (id=globalAddressContainer) at ABContactDetailsCompanyDV.pcf: line 40, column 43
    function def_refreshVariables_16 (def :  pcf.GlobalAddressInputSet_PostCodeBeforeCity) : void {
      def.refreshVariables(new gw.api.address.SecondaryAddressOwner(getCompanyPrimaryAddress()))
    }
    
    // 'def' attribute on InputSetRef (id=globalAddressContainer) at ABContactDetailsCompanyDV.pcf: line 40, column 43
    function def_refreshVariables_18 (def :  pcf.GlobalAddressInputSet_default) : void {
      def.refreshVariables(new gw.api.address.SecondaryAddressOwner(getCompanyPrimaryAddress()))
    }
    
    // 'value' attribute on TextInput (id=Name_Input) at ABContactDetailsCompanyDV.pcf: line 17, column 50
    function defaultSetter_1 (__VALUE_TO_SET :  java.lang.Object) : void {
      (anABContact as ABCompany).Name = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on RangeInput (id=FinanceManager_Input) at ABContactDetailsCompanyDV.pcf: line 187, column 33
    function defaultSetter_111 (__VALUE_TO_SET :  java.lang.Object) : void {
      (anABContact as ABCompanyVendor).FinanceManager = (__VALUE_TO_SET as ABPerson)
    }
    
    // 'value' attribute on RangeInput (id=PaymentContact_Input) at ABContactDetailsCompanyDV.pcf: line 194, column 33
    function defaultSetter_118 (__VALUE_TO_SET :  java.lang.Object) : void {
      (anABContact as ABCompanyVendor).PaymentContact = (__VALUE_TO_SET as ABPerson)
    }
    
    // 'value' attribute on TypeKeyInput (id=FinanceMgrRelationship_Input) at ABContactDetailsCompanyDV.pcf: line 200, column 55
    function defaultSetter_127 (__VALUE_TO_SET :  java.lang.Object) : void {
      (anABContact as ABCompanyVendor).FinanceMgrRelationship = (__VALUE_TO_SET as typekey.ManagerRelationshipType)
    }
    
    // 'value' attribute on TextInput (id=EmailAddress_Input) at ABContactDetailsCompanyDV.pcf: line 46, column 73
    function defaultSetter_22 (__VALUE_TO_SET :  java.lang.Object) : void {
      (anABContact as ABCompany).PrimaryContact.EmailAddress1 = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on BooleanRadioInput (id=PrefersContactByEmail_Input) at ABContactDetailsCompanyDV.pcf: line 57, column 84
    function defaultSetter_30 (__VALUE_TO_SET :  java.lang.Object) : void {
      (anABContact as ABCompany).PrimaryContact.PrefersContactByEmail = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on TextInput (id=TaxID_Input) at ABContactDetailsCompanyDV.pcf: line 67, column 51
    function defaultSetter_37 (__VALUE_TO_SET :  java.lang.Object) : void {
      (anABContact as ABCompany).TaxID = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on CheckBoxInput (id=InspectionRequired_Input) at ABContactDetailsCompanyDV.pcf: line 72, column 63
    function defaultSetter_41 (__VALUE_TO_SET :  java.lang.Object) : void {
      (anABContact as ABCompany).InspectionRequired = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on DateInput (id=InspectionDate_Input) at ABContactDetailsCompanyDV.pcf: line 80, column 75
    function defaultSetter_46 (__VALUE_TO_SET :  java.lang.Object) : void {
      (anABContact as ABCompany).InspectionDate = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on TextInput (id=ABAutoRepairShopLicense_Input) at ABContactDetailsCompanyDV.pcf: line 86, column 56
    function defaultSetter_52 (__VALUE_TO_SET :  java.lang.Object) : void {
      (anABContact as ABAutoRepairShop).AutoRepairLicense = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=ABAutoTowingAgcyLicense_Input) at ABContactDetailsCompanyDV.pcf: line 92, column 56
    function defaultSetter_58 (__VALUE_TO_SET :  java.lang.Object) : void {
      (anABContact as ABAutoTowingAgcy).AutoTowingLicense = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on RangeInput (id=PrimaryContact_Input) at ABContactDetailsCompanyDV.pcf: line 31, column 31
    function defaultSetter_6 (__VALUE_TO_SET :  java.lang.Object) : void {
      (anABContact as ABCompany).PrimaryContact = (__VALUE_TO_SET as ABContact)
    }
    
    // 'value' attribute on TypeKeyInput (id=ABLawFirmSpecialty_Input) at ABContactDetailsCompanyDV.pcf: line 99, column 37
    function defaultSetter_64 (__VALUE_TO_SET :  java.lang.Object) : void {
      (anABContact as ABLawFirm).LawFirmSpecialty = (__VALUE_TO_SET as LegalSpecialty)
    }
    
    // 'value' attribute on TypeKeyInput (id=ABMedicalCareOrg_Input) at ABContactDetailsCompanyDV.pcf: line 106, column 44
    function defaultSetter_71 (__VALUE_TO_SET :  java.lang.Object) : void {
      (anABContact as ABMedicalCareOrg).MedicalOrgSpecialty = (__VALUE_TO_SET as typekey.SpecialtyType)
    }
    
    // 'value' attribute on TypeKeyInput (id=PreferredCurrency_Input) at ABContactDetailsCompanyDV.pcf: line 112, column 39
    function defaultSetter_76 (__VALUE_TO_SET :  java.lang.Object) : void {
      (anABContact as ABCompany).PreferredCurrency = (__VALUE_TO_SET as typekey.Currency)
    }
    
    // 'value' attribute on CheckBoxInput (id=CollateralRequired_Input) at ABContactDetailsCompanyDV.pcf: line 123, column 71
    function defaultSetter_80 (__VALUE_TO_SET :  java.lang.Object) : void {
      (anABContact as ABPolicyCompany).CollateralRequired = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on TextInput (id=CollateralAmount_Input) at ABContactDetailsCompanyDV.pcf: line 133, column 42
    function defaultSetter_85 (__VALUE_TO_SET :  java.lang.Object) : void {
      (anABContact as ABPolicyCompany).CollateralAmount = (__VALUE_TO_SET as java.lang.Integer)
    }
    
    // 'value' attribute on TypeKeyInput (id=CollateralVerified_Input) at ABContactDetailsCompanyDV.pcf: line 140, column 38
    function defaultSetter_91 (__VALUE_TO_SET :  java.lang.Object) : void {
      (anABContact as ABPolicyCompany).CompanyCollateralVerified = (__VALUE_TO_SET as typekey.YesNo)
    }
    
    // 'value' attribute on CheckBoxInput (id=CanAddEmployees_Input) at ABContactDetailsCompanyDV.pcf: line 151, column 60
    function defaultSetter_97 (__VALUE_TO_SET :  java.lang.Object) : void {
      (anABContact as ABCompany).CanAddEmployees = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'editable' attribute on BooleanRadioInput (id=PrefersContactByEmail_Input) at ABContactDetailsCompanyDV.pcf: line 57, column 84
    function editable_27 () : java.lang.Boolean {
      return PrefersContactByEmailEditable()
    }
    
    // 'mode' attribute on InputSetRef (id=globalAddressContainer) at ABContactDetailsCompanyDV.pcf: line 40, column 43
    function mode_19 () : java.lang.Object {
      return selectAddressMode()
    }
    
    // 'value' attribute on Reflect at ABContactDetailsCompanyDV.pcf: line 203, column 102
    function reflectionValue_124 (TRIGGER_INDEX :  int, VALUE1 :  ABPerson, VALUE2 :  ABPerson) : java.lang.Object {
      return (VALUE1 != null and VALUE1 == VALUE2) ?  ManagerRelationshipType.TC_SELF : null
    }
    
    // 'valueRange' attribute on RangeInput (id=PrimaryContact_Input) at ABContactDetailsCompanyDV.pcf: line 31, column 31
    function valueRange_8 () : java.lang.Object {
      return (anABContact as ABCompany).Employees
    }
    
    // 'value' attribute on RangeInput (id=FinanceManager_Input) at ABContactDetailsCompanyDV.pcf: line 187, column 33
    function valueRoot_112 () : java.lang.Object {
      return (anABContact as ABCompanyVendor)
    }
    
    // 'value' attribute on TextInput (id=Name_Input) at ABContactDetailsCompanyDV.pcf: line 17, column 50
    function valueRoot_2 () : java.lang.Object {
      return (anABContact as ABCompany)
    }
    
    // 'value' attribute on TextInput (id=EmailAddress_Input) at ABContactDetailsCompanyDV.pcf: line 46, column 73
    function valueRoot_23 () : java.lang.Object {
      return (anABContact as ABCompany).PrimaryContact
    }
    
    // 'value' attribute on TextInput (id=ABAutoRepairShopLicense_Input) at ABContactDetailsCompanyDV.pcf: line 86, column 56
    function valueRoot_53 () : java.lang.Object {
      return (anABContact as ABAutoRepairShop)
    }
    
    // 'value' attribute on TextInput (id=ABAutoTowingAgcyLicense_Input) at ABContactDetailsCompanyDV.pcf: line 92, column 56
    function valueRoot_59 () : java.lang.Object {
      return (anABContact as ABAutoTowingAgcy)
    }
    
    // 'value' attribute on TypeKeyInput (id=ABLawFirmSpecialty_Input) at ABContactDetailsCompanyDV.pcf: line 99, column 37
    function valueRoot_65 () : java.lang.Object {
      return (anABContact as ABLawFirm)
    }
    
    // 'value' attribute on TypeKeyInput (id=ABMedicalCareOrg_Input) at ABContactDetailsCompanyDV.pcf: line 106, column 44
    function valueRoot_72 () : java.lang.Object {
      return (anABContact as ABMedicalCareOrg)
    }
    
    // 'value' attribute on CheckBoxInput (id=CollateralRequired_Input) at ABContactDetailsCompanyDV.pcf: line 123, column 71
    function valueRoot_81 () : java.lang.Object {
      return (anABContact as ABPolicyCompany)
    }
    
    // 'value' attribute on TextInput (id=Name_Input) at ABContactDetailsCompanyDV.pcf: line 17, column 50
    function value_0 () : java.lang.String {
      return (anABContact as ABCompany).Name
    }
    
    // 'value' attribute on TextInput (id=NumberOfEmployees_Input) at ABContactDetailsCompanyDV.pcf: line 159, column 40
    function value_101 () : java.lang.Integer {
      return (anABContact as ABCompany).NumberOfEmployees
    }
    
    // 'value' attribute on RangeInput (id=FinanceManager_Input) at ABContactDetailsCompanyDV.pcf: line 187, column 33
    function value_110 () : ABPerson {
      return (anABContact as ABCompanyVendor).FinanceManager
    }
    
    // 'value' attribute on RangeInput (id=PaymentContact_Input) at ABContactDetailsCompanyDV.pcf: line 194, column 33
    function value_117 () : ABPerson {
      return (anABContact as ABCompanyVendor).PaymentContact
    }
    
    // 'value' attribute on TypeKeyInput (id=FinanceMgrRelationship_Input) at ABContactDetailsCompanyDV.pcf: line 200, column 55
    function value_126 () : typekey.ManagerRelationshipType {
      return (anABContact as ABCompanyVendor).FinanceMgrRelationship
    }
    
    // 'value' attribute on TextInput (id=EmailAddress_Input) at ABContactDetailsCompanyDV.pcf: line 46, column 73
    function value_21 () : java.lang.String {
      return (anABContact as ABCompany).PrimaryContact.EmailAddress1
    }
    
    // 'value' attribute on BooleanRadioInput (id=PrefersContactByEmail_Input) at ABContactDetailsCompanyDV.pcf: line 57, column 84
    function value_29 () : java.lang.Boolean {
      return (anABContact as ABCompany).PrimaryContact.PrefersContactByEmail
    }
    
    // 'value' attribute on TextInput (id=TaxID_Input) at ABContactDetailsCompanyDV.pcf: line 67, column 51
    function value_36 () : java.lang.String {
      return (anABContact as ABCompany).TaxID
    }
    
    // 'value' attribute on CheckBoxInput (id=InspectionRequired_Input) at ABContactDetailsCompanyDV.pcf: line 72, column 63
    function value_40 () : java.lang.Boolean {
      return (anABContact as ABCompany).InspectionRequired
    }
    
    // 'value' attribute on DateInput (id=InspectionDate_Input) at ABContactDetailsCompanyDV.pcf: line 80, column 75
    function value_45 () : java.util.Date {
      return (anABContact as ABCompany).InspectionDate
    }
    
    // 'value' attribute on RangeInput (id=PrimaryContact_Input) at ABContactDetailsCompanyDV.pcf: line 31, column 31
    function value_5 () : ABContact {
      return (anABContact as ABCompany).PrimaryContact
    }
    
    // 'value' attribute on TextInput (id=ABAutoRepairShopLicense_Input) at ABContactDetailsCompanyDV.pcf: line 86, column 56
    function value_51 () : java.lang.String {
      return (anABContact as ABAutoRepairShop).AutoRepairLicense
    }
    
    // 'value' attribute on TextInput (id=ABAutoTowingAgcyLicense_Input) at ABContactDetailsCompanyDV.pcf: line 92, column 56
    function value_57 () : java.lang.String {
      return (anABContact as ABAutoTowingAgcy).AutoTowingLicense
    }
    
    // 'value' attribute on TypeKeyInput (id=ABLawFirmSpecialty_Input) at ABContactDetailsCompanyDV.pcf: line 99, column 37
    function value_63 () : LegalSpecialty {
      return (anABContact as ABLawFirm).LawFirmSpecialty
    }
    
    // 'value' attribute on TypeKeyInput (id=ABMedicalCareOrg_Input) at ABContactDetailsCompanyDV.pcf: line 106, column 44
    function value_70 () : typekey.SpecialtyType {
      return (anABContact as ABMedicalCareOrg).MedicalOrgSpecialty
    }
    
    // 'value' attribute on TypeKeyInput (id=PreferredCurrency_Input) at ABContactDetailsCompanyDV.pcf: line 112, column 39
    function value_75 () : typekey.Currency {
      return (anABContact as ABCompany).PreferredCurrency
    }
    
    // 'value' attribute on CheckBoxInput (id=CollateralRequired_Input) at ABContactDetailsCompanyDV.pcf: line 123, column 71
    function value_79 () : java.lang.Boolean {
      return (anABContact as ABPolicyCompany).CollateralRequired
    }
    
    // 'value' attribute on TextInput (id=CollateralAmount_Input) at ABContactDetailsCompanyDV.pcf: line 133, column 42
    function value_84 () : java.lang.Integer {
      return (anABContact as ABPolicyCompany).CollateralAmount
    }
    
    // 'value' attribute on TypeKeyInput (id=CollateralVerified_Input) at ABContactDetailsCompanyDV.pcf: line 140, column 38
    function value_90 () : typekey.YesNo {
      return (anABContact as ABPolicyCompany).CompanyCollateralVerified
    }
    
    // 'value' attribute on CheckBoxInput (id=CanAddEmployees_Input) at ABContactDetailsCompanyDV.pcf: line 151, column 60
    function value_96 () : java.lang.Boolean {
      return (anABContact as ABCompany).CanAddEmployees
    }
    
    // 'valueRange' attribute on RangeInput (id=FinanceManager_Input) at ABContactDetailsCompanyDV.pcf: line 187, column 33
    function verifyValueRangeIsAllowedType_114 ($$arg :  ABPerson[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=FinanceManager_Input) at ABContactDetailsCompanyDV.pcf: line 187, column 33
    function verifyValueRangeIsAllowedType_114 ($$arg :  gw.api.database.IQueryBeanResult) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=FinanceManager_Input) at ABContactDetailsCompanyDV.pcf: line 187, column 33
    function verifyValueRangeIsAllowedType_114 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=PaymentContact_Input) at ABContactDetailsCompanyDV.pcf: line 194, column 33
    function verifyValueRangeIsAllowedType_121 ($$arg :  ABPerson[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=PaymentContact_Input) at ABContactDetailsCompanyDV.pcf: line 194, column 33
    function verifyValueRangeIsAllowedType_121 ($$arg :  gw.api.database.IQueryBeanResult) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=PaymentContact_Input) at ABContactDetailsCompanyDV.pcf: line 194, column 33
    function verifyValueRangeIsAllowedType_121 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=PrimaryContact_Input) at ABContactDetailsCompanyDV.pcf: line 31, column 31
    function verifyValueRangeIsAllowedType_9 ($$arg :  ABContact[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=PrimaryContact_Input) at ABContactDetailsCompanyDV.pcf: line 31, column 31
    function verifyValueRangeIsAllowedType_9 ($$arg :  gw.api.database.IQueryBeanResult) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=PrimaryContact_Input) at ABContactDetailsCompanyDV.pcf: line 31, column 31
    function verifyValueRangeIsAllowedType_9 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=PrimaryContact_Input) at ABContactDetailsCompanyDV.pcf: line 31, column 31
    function verifyValueRange_10 () : void {
      var __valueRangeArg = (anABContact as ABCompany).Employees
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_9(__valueRangeArg)
    }
    
    // 'valueRange' attribute on RangeInput (id=FinanceManager_Input) at ABContactDetailsCompanyDV.pcf: line 187, column 33
    function verifyValueRange_115 () : void {
      var __valueRangeArg = (anABContact as ABCompany).Employees
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_114(__valueRangeArg)
    }
    
    // 'valueRange' attribute on RangeInput (id=PaymentContact_Input) at ABContactDetailsCompanyDV.pcf: line 194, column 33
    function verifyValueRange_122 () : void {
      var __valueRangeArg = (anABContact as ABCompany).Employees
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_121(__valueRangeArg)
    }
    
    // 'valueType' attribute on TypeKeyInput (id=ABLawFirmSpecialty_Input) at ABContactDetailsCompanyDV.pcf: line 99, column 37
    function verifyValueType_68 () : void {
      var __valueTypeArg : LegalSpecialty
      // If this assignment statement fails to compile, that means that the declared valueType
      // is not a valid type for use with this Input or Cell type
      var __requiredTypeArg : gw.entity.TypeKey = __valueTypeArg
    }
    
    // 'visible' attribute on TextInput (id=NumberOfEmployees_Input) at ABContactDetailsCompanyDV.pcf: line 159, column 40
    function visible_100 () : java.lang.Boolean {
      return (anABContact as ABCompany).CanAddEmployees == true
    }
    
    // 'visible' attribute on InputSetRef (id=globalAddressContainer) at ABContactDetailsCompanyDV.pcf: line 40, column 43
    function visible_12 () : java.lang.Boolean {
      return anABContact typeis ABCompany
    }
    
    // 'visible' attribute on InputSet (id=FinancialPersonnelInputSet) at ABContactDetailsCompanyDV.pcf: line 177, column 54
    function visible_130 () : java.lang.Boolean {
      return anABContact typeis ABCompanyVendor
    }
    
    // 'visible' attribute on Label (id=PrimaryContactHelp) at ABContactDetailsCompanyDV.pcf: line 24, column 63
    function visible_4 () : java.lang.Boolean {
      return User.util.getCurrentUser().UseHelperLabels
    }
    
    // 'visible' attribute on DateInput (id=InspectionDate_Input) at ABContactDetailsCompanyDV.pcf: line 80, column 75
    function visible_44 () : java.lang.Boolean {
      return (anABContact as ABCompany).InspectionRequired == true 
    }
    
    // 'visible' attribute on TextInput (id=ABAutoRepairShopLicense_Input) at ABContactDetailsCompanyDV.pcf: line 86, column 56
    function visible_50 () : java.lang.Boolean {
      return anABContact typeis ABAutoRepairShop
    }
    
    // 'visible' attribute on TextInput (id=ABAutoTowingAgcyLicense_Input) at ABContactDetailsCompanyDV.pcf: line 92, column 56
    function visible_56 () : java.lang.Boolean {
      return anABContact typeis ABAutoTowingAgcy
    }
    
    // 'visible' attribute on TypeKeyInput (id=ABLawFirmSpecialty_Input) at ABContactDetailsCompanyDV.pcf: line 99, column 37
    function visible_62 () : java.lang.Boolean {
      return anABContact typeis ABLawFirm
    }
    
    // 'visible' attribute on TypeKeyInput (id=ABMedicalCareOrg_Input) at ABContactDetailsCompanyDV.pcf: line 106, column 44
    function visible_69 () : java.lang.Boolean {
      return anABContact typeis ABMedicalCareOrg
    }
    
    // 'visible' attribute on InputSet (id=ColateralInputSet) at ABContactDetailsCompanyDV.pcf: line 115, column 54
    function visible_95 () : java.lang.Boolean {
      return anABContact typeis ABPolicyCompany
    }
    
    property get anABContact () : ABContact {
      return getRequireValue("anABContact", 0) as ABContact
    }
    
    property set anABContact ($arg :  ABContact) {
      setRequireValue("anABContact", 0, $arg)
    }
    
    function cascadeCompanyMainEmailAddress() {
      if(anABContact typeis ABCompany) {
        var companyMainEmailAddress = anABContact.EmailAddress1
        var employees = anABContact.Employees
    
        for(oneEmployee in employees) {
          oneEmployee.EmailAddress1 = companyMainEmailAddress
        }
      }
    }
    
    // The logic to determine if the PrefersContactByEmail field should be editable must check to see if anABContact is a company,
    // and if so, if the primary contact is non-null. If you attempt to do both checks in a single line, then you get a coercion error.
    // (This is because the check for a primary contact works only if the contact is an ABCompany.) This function simply splits the
    // logic into two lines.
    
    function PrefersContactByEmailEditable() : boolean {
      var returnValue = false
      if (anABContact typeis ABCompany)
        if (anABContact.PrimaryContact != null)  // typeis automatically downcasts object; casting isn't needed here
          returnValue = true
      return returnValue
    }
    
    // Determining the mode for the GlobalAddressInputSet
    // This is in a separate function because of the typeis. typeis is needed because of a simplification of ABContactDetailsCV
    // Removing the typeis would raise a ClassCastException when displaying an ABPerson or ABPlace
    function selectAddressMode() : String {
      if(anABContact typeis ABCompany) {
        return gw.api.address.AddressCountrySettings.getSettings(new gw.api.address.SecondaryAddressOwner(anABContact.PrimaryContact.PrimaryAddress).SelectedCountry).PCFMode
      } else {
        return ""
      }
    }
    
    // Getting the input parameter for the GlobalAddressInputSet
    // This is in a separate function because of the typeis. typeis is needed because of a simplification of ABContactDetailsCV
    // Removing the typeis would raise a ClassCastException when displaying an ABPerson or ABPlace
    function getCompanyPrimaryAddress() : Address {
      if(anABContact typeis ABCompany) {
        return anABContact.PrimaryContact.PrimaryAddress
      } else {
        return null
      }
    }
    
    
  }
  
  
}