package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/search/ContactSearchDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ContactSearchDVExpressions {
  @javax.annotation.Generated("config/web/pcf/search/ContactSearchDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ContactSearchDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on InputSetRef at ContactSearchDV.pcf: line 35, column 45
    function def_onEnter_11 (def :  pcf.GlobalPersonNameInputSet_default) : void {
      def.onEnter(new gw.api.name.SearchNameOwner(SearchCriteria, isPerson(SearchCriteria)))
    }
    
    // 'def' attribute on InputSetRef at ContactSearchDV.pcf: line 39, column 49
    function def_onEnter_15 (def :  pcf.GlobalContactNameInputSet_Japan) : void {
      def.onEnter(new gw.api.name.SearchNameOwner(SearchCriteria, not isPerson(SearchCriteria)))
    }
    
    // 'def' attribute on InputSetRef at ContactSearchDV.pcf: line 39, column 49
    function def_onEnter_17 (def :  pcf.GlobalContactNameInputSet_default) : void {
      def.onEnter(new gw.api.name.SearchNameOwner(SearchCriteria, not isPerson(SearchCriteria)))
    }
    
    // 'def' attribute on InputSetRef at ContactSearchDV.pcf: line 159, column 54
    function def_onEnter_72 (def :  pcf.AddressSearchInputSet) : void {
      def.onEnter(SearchCriteria)
    }
    
    // 'def' attribute on InputSetRef at ContactSearchDV.pcf: line 164, column 74
    function def_onEnter_75 (def :  pcf.ContactSearchProximityInputSet) : void {
      def.onEnter(SearchCriteria, proximitySearchPageHelper)
    }
    
    // 'def' attribute on InputSetRef at ContactSearchDV.pcf: line 168, column 41
    function def_onEnter_77 (def :  pcf.SearchAndResetInputSet) : void {
      def.onEnter()
    }
    
    // 'def' attribute on InputSetRef at ContactSearchDV.pcf: line 35, column 45
    function def_onEnter_9 (def :  pcf.GlobalPersonNameInputSet_Japan) : void {
      def.onEnter(new gw.api.name.SearchNameOwner(SearchCriteria, isPerson(SearchCriteria)))
    }
    
    // 'def' attribute on InputSetRef at ContactSearchDV.pcf: line 35, column 45
    function def_refreshVariables_10 (def :  pcf.GlobalPersonNameInputSet_Japan) : void {
      def.refreshVariables(new gw.api.name.SearchNameOwner(SearchCriteria, isPerson(SearchCriteria)))
    }
    
    // 'def' attribute on InputSetRef at ContactSearchDV.pcf: line 35, column 45
    function def_refreshVariables_12 (def :  pcf.GlobalPersonNameInputSet_default) : void {
      def.refreshVariables(new gw.api.name.SearchNameOwner(SearchCriteria, isPerson(SearchCriteria)))
    }
    
    // 'def' attribute on InputSetRef at ContactSearchDV.pcf: line 39, column 49
    function def_refreshVariables_16 (def :  pcf.GlobalContactNameInputSet_Japan) : void {
      def.refreshVariables(new gw.api.name.SearchNameOwner(SearchCriteria, not isPerson(SearchCriteria)))
    }
    
    // 'def' attribute on InputSetRef at ContactSearchDV.pcf: line 39, column 49
    function def_refreshVariables_18 (def :  pcf.GlobalContactNameInputSet_default) : void {
      def.refreshVariables(new gw.api.name.SearchNameOwner(SearchCriteria, not isPerson(SearchCriteria)))
    }
    
    // 'def' attribute on InputSetRef at ContactSearchDV.pcf: line 159, column 54
    function def_refreshVariables_73 (def :  pcf.AddressSearchInputSet) : void {
      def.refreshVariables(SearchCriteria)
    }
    
    // 'def' attribute on InputSetRef at ContactSearchDV.pcf: line 164, column 74
    function def_refreshVariables_76 (def :  pcf.ContactSearchProximityInputSet) : void {
      def.refreshVariables(SearchCriteria, proximitySearchPageHelper)
    }
    
    // 'def' attribute on InputSetRef at ContactSearchDV.pcf: line 168, column 41
    function def_refreshVariables_78 (def :  pcf.SearchAndResetInputSet) : void {
      def.refreshVariables()
    }
    
    // 'value' attribute on RangeInput (id=ContactSubtype_Input) at ContactSearchDV.pcf: line 27, column 39
    function defaultSetter_2 (__VALUE_TO_SET :  java.lang.Object) : void {
      SearchCriteria.ContactSubtype = (__VALUE_TO_SET as typekey.ABContact)
    }
    
    // 'value' attribute on TextInput (id=TaxID_Input) at ContactSearchDV.pcf: line 46, column 41
    function defaultSetter_21 (__VALUE_TO_SET :  java.lang.Object) : void {
      SearchCriteria.TaxID = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=OrganizationName_Input) at ContactSearchDV.pcf: line 54, column 52
    function defaultSetter_26 (__VALUE_TO_SET :  java.lang.Object) : void {
      SearchCriteria.OrganizationName = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TypeKeyInput (id=AttorneySpecialty_Input) at ContactSearchDV.pcf: line 63, column 47
    function defaultSetter_31 (__VALUE_TO_SET :  java.lang.Object) : void {
      SearchCriteria.AttorneySpecialty = (__VALUE_TO_SET as typekey.LegalSpecialty)
    }
    
    // 'value' attribute on TypeKeyInput (id=DoctorSpecialty_Input) at ContactSearchDV.pcf: line 72, column 46
    function defaultSetter_36 (__VALUE_TO_SET :  java.lang.Object) : void {
      SearchCriteria.DoctorSpecialty = (__VALUE_TO_SET as typekey.SpecialtyType)
    }
    
    // 'value' attribute on TypeKeyInput (id=AdjudicativeDomain_Input) at ContactSearchDV.pcf: line 81, column 51
    function defaultSetter_41 (__VALUE_TO_SET :  java.lang.Object) : void {
      SearchCriteria.AdjudicativeDomain = (__VALUE_TO_SET as typekey.AdjudicativeDomain)
    }
    
    // 'value' attribute on TypeKeyInput (id=MedicalSpecialty_Input) at ContactSearchDV.pcf: line 90, column 46
    function defaultSetter_46 (__VALUE_TO_SET :  java.lang.Object) : void {
      SearchCriteria.MedicalOrgSpecialty = (__VALUE_TO_SET as typekey.SpecialtyType)
    }
    
    // 'value' attribute on TypeKeyInput (id=LawFirmSpecialty_Input) at ContactSearchDV.pcf: line 99, column 47
    function defaultSetter_51 (__VALUE_TO_SET :  java.lang.Object) : void {
      SearchCriteria.LawFirmSpecialty = (__VALUE_TO_SET as typekey.LegalSpecialty)
    }
    
    // 'value' attribute on TextInput (id=EmployeeNumber_Input) at ContactSearchDV.pcf: line 107, column 50
    function defaultSetter_56 (__VALUE_TO_SET :  java.lang.Object) : void {
      SearchCriteria.EmployeeNumber = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on BooleanRadioInput (id=PreferredVendors_Input) at ContactSearchDV.pcf: line 115, column 52
    function defaultSetter_61 (__VALUE_TO_SET :  java.lang.Object) : void {
      SearchCriteria.PreferredVendors = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on RangeInput (id=MinimumScore_Input) at ContactSearchDV.pcf: line 123, column 40
    function defaultSetter_66 (__VALUE_TO_SET :  java.lang.Object) : void {
      SearchCriteria.Score = (__VALUE_TO_SET as java.lang.Integer)
    }
    
    // 'mode' attribute on InputSetRef at ContactSearchDV.pcf: line 35, column 45
    function mode_13 () : java.lang.Object {
      return gw.api.name.NameLocaleSettings.PCFMode
    }
    
    // 'onChange' attribute on PostOnChange at ContactSearchDV.pcf: line 30, column 64
    function onChange_0 () : void {
      gw.api.util.SearchUtil.resetResultOnly()
    }
    
    // 'valueRange' attribute on RangeInput (id=ContactSubtype_Input) at ContactSearchDV.pcf: line 27, column 39
    function valueRange_4 () : java.lang.Object {
      return SearchCriteria.getAvailableSubtypes(requiredContactType)
    }
    
    // 'valueRange' attribute on RangeInput (id=MinimumScore_Input) at ContactSearchDV.pcf: line 123, column 40
    function valueRange_68 () : java.lang.Object {
      return scoreRange()
    }
    
    // 'value' attribute on RangeInput (id=ContactSubtype_Input) at ContactSearchDV.pcf: line 27, column 39
    function valueRoot_3 () : java.lang.Object {
      return SearchCriteria
    }
    
    // 'value' attribute on RangeInput (id=ContactSubtype_Input) at ContactSearchDV.pcf: line 27, column 39
    function value_1 () : typekey.ABContact {
      return SearchCriteria.ContactSubtype
    }
    
    // 'value' attribute on TextInput (id=TaxID_Input) at ContactSearchDV.pcf: line 46, column 41
    function value_20 () : java.lang.String {
      return SearchCriteria.TaxID
    }
    
    // 'value' attribute on TextInput (id=OrganizationName_Input) at ContactSearchDV.pcf: line 54, column 52
    function value_25 () : java.lang.String {
      return SearchCriteria.OrganizationName
    }
    
    // 'value' attribute on TypeKeyInput (id=AttorneySpecialty_Input) at ContactSearchDV.pcf: line 63, column 47
    function value_30 () : typekey.LegalSpecialty {
      return SearchCriteria.AttorneySpecialty
    }
    
    // 'value' attribute on TypeKeyInput (id=DoctorSpecialty_Input) at ContactSearchDV.pcf: line 72, column 46
    function value_35 () : typekey.SpecialtyType {
      return SearchCriteria.DoctorSpecialty
    }
    
    // 'value' attribute on TypeKeyInput (id=AdjudicativeDomain_Input) at ContactSearchDV.pcf: line 81, column 51
    function value_40 () : typekey.AdjudicativeDomain {
      return SearchCriteria.AdjudicativeDomain
    }
    
    // 'value' attribute on TypeKeyInput (id=MedicalSpecialty_Input) at ContactSearchDV.pcf: line 90, column 46
    function value_45 () : typekey.SpecialtyType {
      return SearchCriteria.MedicalOrgSpecialty
    }
    
    // 'value' attribute on TypeKeyInput (id=LawFirmSpecialty_Input) at ContactSearchDV.pcf: line 99, column 47
    function value_50 () : typekey.LegalSpecialty {
      return SearchCriteria.LawFirmSpecialty
    }
    
    // 'value' attribute on TextInput (id=EmployeeNumber_Input) at ContactSearchDV.pcf: line 107, column 50
    function value_55 () : java.lang.String {
      return SearchCriteria.EmployeeNumber
    }
    
    // 'value' attribute on BooleanRadioInput (id=PreferredVendors_Input) at ContactSearchDV.pcf: line 115, column 52
    function value_60 () : java.lang.Boolean {
      return SearchCriteria.PreferredVendors
    }
    
    // 'value' attribute on RangeInput (id=MinimumScore_Input) at ContactSearchDV.pcf: line 123, column 40
    function value_65 () : java.lang.Integer {
      return SearchCriteria.Score
    }
    
    // 'valueRange' attribute on RangeInput (id=ContactSubtype_Input) at ContactSearchDV.pcf: line 27, column 39
    function verifyValueRangeIsAllowedType_5 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=ContactSubtype_Input) at ContactSearchDV.pcf: line 27, column 39
    function verifyValueRangeIsAllowedType_5 ($$arg :  typekey.ABContact[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=MinimumScore_Input) at ContactSearchDV.pcf: line 123, column 40
    function verifyValueRangeIsAllowedType_69 ($$arg :  java.lang.Integer[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=MinimumScore_Input) at ContactSearchDV.pcf: line 123, column 40
    function verifyValueRangeIsAllowedType_69 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=ContactSubtype_Input) at ContactSearchDV.pcf: line 27, column 39
    function verifyValueRange_6 () : void {
      var __valueRangeArg = SearchCriteria.getAvailableSubtypes(requiredContactType)
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_5(__valueRangeArg)
    }
    
    // 'valueRange' attribute on RangeInput (id=MinimumScore_Input) at ContactSearchDV.pcf: line 123, column 40
    function verifyValueRange_70 () : void {
      var __valueRangeArg = scoreRange()
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_69(__valueRangeArg)
    }
    
    // 'visible' attribute on InputSetRef at ContactSearchDV.pcf: line 39, column 49
    function visible_14 () : java.lang.Boolean {
      return not isPerson(SearchCriteria)
    }
    
    // 'visible' attribute on InputSet at ContactSearchDV.pcf: line 41, column 145
    function visible_24 () : java.lang.Boolean {
      return isCompany(SearchCriteria) or (isPerson(SearchCriteria) and !isUserContact(SearchCriteria) and !isAdjudicator(SearchCriteria))
    }
    
    // 'visible' attribute on InputSet at ContactSearchDV.pcf: line 49, column 115
    function visible_29 () : java.lang.Boolean {
      return isPerson(SearchCriteria) and !(isPersonVendor(SearchCriteria) or isUserContact(SearchCriteria))
    }
    
    // 'visible' attribute on InputSet at ContactSearchDV.pcf: line 57, column 46
    function visible_34 () : java.lang.Boolean {
      return isAttorney(SearchCriteria)
    }
    
    // 'visible' attribute on InputSet at ContactSearchDV.pcf: line 66, column 44
    function visible_39 () : java.lang.Boolean {
      return isDoctor(SearchCriteria)
    }
    
    // 'visible' attribute on InputSet at ContactSearchDV.pcf: line 75, column 49
    function visible_44 () : java.lang.Boolean {
      return isAdjudicator(SearchCriteria)
    }
    
    // 'visible' attribute on InputSet at ContactSearchDV.pcf: line 84, column 52
    function visible_49 () : java.lang.Boolean {
      return isMedicalCareOrg(SearchCriteria)
    }
    
    // 'visible' attribute on InputSet at ContactSearchDV.pcf: line 93, column 45
    function visible_54 () : java.lang.Boolean {
      return isLawFirm(SearchCriteria)
    }
    
    // 'visible' attribute on InputSet at ContactSearchDV.pcf: line 102, column 49
    function visible_59 () : java.lang.Boolean {
      return isUserContact(SearchCriteria)
    }
    
    // 'visible' attribute on InputSet at ContactSearchDV.pcf: line 110, column 44
    function visible_64 () : java.lang.Boolean {
      return isVendor(SearchCriteria)
    }
    
    // 'visible' attribute on InputSetRef at ContactSearchDV.pcf: line 164, column 74
    function visible_74 () : java.lang.Boolean {
      return proximitySearchPageHelper.useGeocodeUIinAddressBook()
    }
    
    // 'visible' attribute on InputSetRef at ContactSearchDV.pcf: line 35, column 45
    function visible_8 () : java.lang.Boolean {
      return isPerson(SearchCriteria)
    }
    
    property get SearchCriteria () : ABContactSearchCriteria {
      return getRequireValue("SearchCriteria", 0) as ABContactSearchCriteria
    }
    
    property set SearchCriteria ($arg :  ABContactSearchCriteria) {
      setRequireValue("SearchCriteria", 0, $arg)
    }
    
    property get proximitySearchPageHelper () : gw.api.contact.ProximitySearchPageHelper {
      return getRequireValue("proximitySearchPageHelper", 0) as gw.api.contact.ProximitySearchPageHelper
    }
    
    property set proximitySearchPageHelper ($arg :  gw.api.contact.ProximitySearchPageHelper) {
      setRequireValue("proximitySearchPageHelper", 0, $arg)
    }
    
    property get requiredContactType () : Type {
      return getRequireValue("requiredContactType", 0) as Type
    }
    
    property set requiredContactType ($arg :  Type) {
      setRequireValue("requiredContactType", 0, $arg)
    }
    
    property get searchSpec () : gw.api.webservice.addressbook.contactapi.ABContactSearchSpecWithoutPaging {
      return getRequireValue("searchSpec", 0) as gw.api.webservice.addressbook.contactapi.ABContactSearchSpecWithoutPaging
    }
    
    property set searchSpec ($arg :  gw.api.webservice.addressbook.contactapi.ABContactSearchSpecWithoutPaging) {
      setRequireValue("searchSpec", 0, $arg)
    }
    
    function isAdjudicator(c : ABContactSearchCriteria) : boolean { return entity.ABAdjudicator.Type.isAssignableFrom(c.ContactSubtypeType )}
          function isAttorney(c : ABContactSearchCriteria) : boolean { return entity.ABAttorney.Type.isAssignableFrom(c.ContactSubtypeType )}
          function isCompany(c : ABContactSearchCriteria) : boolean { return entity.ABCompany.Type.isAssignableFrom(c.ContactSubtypeType )}
          function isDoctor(c : ABContactSearchCriteria) : boolean { return entity.ABDoctor.Type.isAssignableFrom(c.ContactSubtypeType )}
          function isLawFirm(c : ABContactSearchCriteria) : boolean { return entity.ABLawFirm.Type.isAssignableFrom(c.ContactSubtypeType )}
          function isMedicalCareOrg(c : ABContactSearchCriteria) : boolean { return entity.ABMedicalCareOrg.Type.isAssignableFrom( c.ContactSubtypeType )}
          function isPerson(c : ABContactSearchCriteria) : boolean { return entity.ABPerson.Type.isAssignableFrom( c.ContactSubtypeType )}
          function isPersonVendor(c : ABContactSearchCriteria) : boolean { return entity.ABPersonVendor.Type.isAssignableFrom(c.ContactSubtypeType )}
          function isPlace(c : ABContactSearchCriteria) : boolean { return entity.ABPlace.Type.isAssignableFrom( c.ContactSubtypeType )}
          function isUserContact(c : ABContactSearchCriteria) : boolean { return entity.ABUserContact.Type.isAssignableFrom(c.ContactSubtypeType )}
          function isVendor(c: ABContactSearchCriteria) : boolean { return (entity.ABCompanyVendor.Type.isAssignableFrom(c.ContactSubtypeType ) 
                                                                    or entity.ABPersonVendor.Type.isAssignableFrom( c.ContactSubtypeType )) }
          function scoreRange() : java.lang.Integer[] {
            return { 0, 10, 20, 30, 40, 50, 60, 70, 80, 90}
          }
          function getCountryCode(country : Country) : String {
            if (country == null) {
              return gw.api.admin.BaseAdminUtil.getDefaultCountry().Code;
            }
            return country.Code;
          }
    
    
  }
  
  
}