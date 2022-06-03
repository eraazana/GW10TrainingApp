package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/training/ABContact/Details/ABContactDetailsPersonDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ABContactDetailsPersonDVExpressions {
  @javax.annotation.Generated("config/web/pcf/training/ABContact/Details/ABContactDetailsPersonDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ABContactDetailsPersonDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ButtonInput (id=RequestReportButton_Input) at ABContactDetailsPersonDV.pcf: line 134, column 75
    function action_80 () : void {
      submitRequestForLegalReport()
    }
    
    // 'available' attribute on ButtonInput (id=RequestReportButton_Input) at ABContactDetailsPersonDV.pcf: line 134, column 75
    function available_79 () : java.lang.Boolean {
      return anABContact.LegalCaseReportStatus != typekey.LegalCaseReportStatus.TC_REQUESTED_PENDING and !CurrentLocation.InEditMode
    }
    
    // 'def' attribute on InputSetRef at ABContactDetailsPersonDV.pcf: line 99, column 37
    function def_onEnter_56 (def :  pcf.ABPersonSubtypeInfoInputSet_ABAdjudicator) : void {
      def.onEnter(anABContact)
    }
    
    // 'def' attribute on InputSetRef at ABContactDetailsPersonDV.pcf: line 99, column 37
    function def_onEnter_58 (def :  pcf.ABPersonSubtypeInfoInputSet_ABAttorney) : void {
      def.onEnter(anABContact)
    }
    
    // 'def' attribute on InputSetRef at ABContactDetailsPersonDV.pcf: line 99, column 37
    function def_onEnter_60 (def :  pcf.ABPersonSubtypeInfoInputSet_ABDoctor) : void {
      def.onEnter(anABContact)
    }
    
    // 'def' attribute on InputSetRef at ABContactDetailsPersonDV.pcf: line 99, column 37
    function def_onEnter_62 (def :  pcf.ABPersonSubtypeInfoInputSet_ABPerson) : void {
      def.onEnter(anABContact)
    }
    
    // 'def' attribute on InputSetRef at ABContactDetailsPersonDV.pcf: line 99, column 37
    function def_onEnter_64 (def :  pcf.ABPersonSubtypeInfoInputSet_default) : void {
      def.onEnter(anABContact)
    }
    
    // 'def' attribute on ListViewInput (id=LegalCaseLV) at ABContactDetailsPersonDV.pcf: line 138, column 29
    function def_onEnter_82 (def :  pcf.LegalCaseLV) : void {
      def.onEnter(anABContact)
    }
    
    // 'def' attribute on InputSetRef at ABContactDetailsPersonDV.pcf: line 144, column 53
    function def_onEnter_85 (def :  pcf.ContactInsightsInputSet) : void {
      def.onEnter(anABContact)
    }
    
    // 'def' attribute on InputSetRef at ABContactDetailsPersonDV.pcf: line 99, column 37
    function def_refreshVariables_57 (def :  pcf.ABPersonSubtypeInfoInputSet_ABAdjudicator) : void {
      def.refreshVariables(anABContact)
    }
    
    // 'def' attribute on InputSetRef at ABContactDetailsPersonDV.pcf: line 99, column 37
    function def_refreshVariables_59 (def :  pcf.ABPersonSubtypeInfoInputSet_ABAttorney) : void {
      def.refreshVariables(anABContact)
    }
    
    // 'def' attribute on InputSetRef at ABContactDetailsPersonDV.pcf: line 99, column 37
    function def_refreshVariables_61 (def :  pcf.ABPersonSubtypeInfoInputSet_ABDoctor) : void {
      def.refreshVariables(anABContact)
    }
    
    // 'def' attribute on InputSetRef at ABContactDetailsPersonDV.pcf: line 99, column 37
    function def_refreshVariables_63 (def :  pcf.ABPersonSubtypeInfoInputSet_ABPerson) : void {
      def.refreshVariables(anABContact)
    }
    
    // 'def' attribute on InputSetRef at ABContactDetailsPersonDV.pcf: line 99, column 37
    function def_refreshVariables_65 (def :  pcf.ABPersonSubtypeInfoInputSet_default) : void {
      def.refreshVariables(anABContact)
    }
    
    // 'def' attribute on ListViewInput (id=LegalCaseLV) at ABContactDetailsPersonDV.pcf: line 138, column 29
    function def_refreshVariables_83 (def :  pcf.LegalCaseLV) : void {
      def.refreshVariables(anABContact)
    }
    
    // 'def' attribute on InputSetRef at ABContactDetailsPersonDV.pcf: line 144, column 53
    function def_refreshVariables_86 (def :  pcf.ContactInsightsInputSet) : void {
      def.refreshVariables(anABContact)
    }
    
    // 'value' attribute on TextInput (id=MiddleName_Input) at ABContactDetailsPersonDV.pcf: line 33, column 55
    function defaultSetter_12 (__VALUE_TO_SET :  java.lang.Object) : void {
      (anABContact as ABPerson).MiddleName = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=LastName_Input) at ABContactDetailsPersonDV.pcf: line 39, column 53
    function defaultSetter_16 (__VALUE_TO_SET :  java.lang.Object) : void {
      (anABContact as ABPerson).LastName = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TypeKeyInput (id=Suffix_Input) at ABContactDetailsPersonDV.pcf: line 45, column 41
    function defaultSetter_20 (__VALUE_TO_SET :  java.lang.Object) : void {
      (anABContact as ABPerson).Suffix = (__VALUE_TO_SET as typekey.NameSuffix)
    }
    
    // 'value' attribute on TextInput (id=TaxID_Input) at ABContactDetailsPersonDV.pcf: line 54, column 50
    function defaultSetter_24 (__VALUE_TO_SET :  java.lang.Object) : void {
      (anABContact as ABPerson).TaxID = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TypeKeyInput (id=TaxFilingStatus_Input) at ABContactDetailsPersonDV.pcf: line 60, column 50
    function defaultSetter_28 (__VALUE_TO_SET :  java.lang.Object) : void {
      (anABContact as ABPerson).TaxFilingStatus = (__VALUE_TO_SET as typekey.TaxFilingStatusType)
    }
    
    // 'value' attribute on DateInput (id=DateOfBirth_Input) at ABContactDetailsPersonDV.pcf: line 66, column 56
    function defaultSetter_33 (__VALUE_TO_SET :  java.lang.Object) : void {
      (anABContact as ABPerson).DateOfBirth = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on TypeKeyInput (id=Gender_Input) at ABContactDetailsPersonDV.pcf: line 72, column 41
    function defaultSetter_38 (__VALUE_TO_SET :  java.lang.Object) : void {
      (anABContact as ABPerson).Gender = (__VALUE_TO_SET as typekey.GenderType)
    }
    
    // 'value' attribute on TypeKeyInput (id=Prefix_Input) at ABContactDetailsPersonDV.pcf: line 23, column 41
    function defaultSetter_4 (__VALUE_TO_SET :  java.lang.Object) : void {
      (anABContact as ABPerson).Prefix = (__VALUE_TO_SET as typekey.NamePrefix)
    }
    
    // 'value' attribute on TypeKeyInput (id=MaritalStatus_Input) at ABContactDetailsPersonDV.pcf: line 78, column 44
    function defaultSetter_42 (__VALUE_TO_SET :  java.lang.Object) : void {
      (anABContact as ABPerson).MaritalStatus = (__VALUE_TO_SET as typekey.MaritalStatus)
    }
    
    // 'value' attribute on TextInput (id=Occupation_Input) at ABContactDetailsPersonDV.pcf: line 88, column 55
    function defaultSetter_46 (__VALUE_TO_SET :  java.lang.Object) : void {
      (anABContact as ABPerson).Occupation = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on RangeInput (id=Employer_Input) at ABContactDetailsPersonDV.pcf: line 95, column 32
    function defaultSetter_50 (__VALUE_TO_SET :  java.lang.Object) : void {
      (anABContact as ABPerson).Employer = (__VALUE_TO_SET as ABCompany)
    }
    
    // 'value' attribute on TextInput (id=Height_Input) at ABContactDetailsPersonDV.pcf: line 112, column 45
    function defaultSetter_69 (__VALUE_TO_SET :  java.lang.Object) : void {
      (anABContact as ABPolicyPerson).HeightBasedOnUserPreferences = (__VALUE_TO_SET as java.math.BigDecimal)
    }
    
    // 'value' attribute on TextInput (id=FirstName_Input) at ABContactDetailsPersonDV.pcf: line 28, column 54
    function defaultSetter_8 (__VALUE_TO_SET :  java.lang.Object) : void {
      (anABContact as ABPerson).FirstName = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'label' attribute on TextInput (id=Height_Input) at ABContactDetailsPersonDV.pcf: line 112, column 45
    function label_67 () : java.lang.Object {
      return choseHeightLabel()
    }
    
    // 'mode' attribute on InputSetRef at ABContactDetailsPersonDV.pcf: line 99, column 37
    function mode_66 () : java.lang.Object {
      return anABContact.Subtype
    }
    
    // 'validationExpression' attribute on DateInput (id=DateOfBirth_Input) at ABContactDetailsPersonDV.pcf: line 66, column 56
    function validationExpression_31 () : java.lang.Object {
      return (anABContact as ABPerson).DateOfBirth > gw.api.util.DateUtil.currentDate() ? DisplayKey.get("Training.ValidationErrorFutureDOB") : null
    }
    
    // 'valueRange' attribute on RangeInput (id=Employer_Input) at ABContactDetailsPersonDV.pcf: line 95, column 32
    function valueRange_52 () : java.lang.Object {
      return queryForCompaniesWhoCanHaveEmployees()
    }
    
    // 'value' attribute on TextInput (id=FullName_Input) at ABContactDetailsPersonDV.pcf: line 17, column 53
    function valueRoot_1 () : java.lang.Object {
      return (anABContact as ABPerson)
    }
    
    // 'value' attribute on TextInput (id=Height_Input) at ABContactDetailsPersonDV.pcf: line 112, column 45
    function valueRoot_70 () : java.lang.Object {
      return (anABContact as ABPolicyPerson)
    }
    
    // 'value' attribute on TextInput (id=FullName_Input) at ABContactDetailsPersonDV.pcf: line 17, column 53
    function value_0 () : java.lang.String {
      return (anABContact as ABPerson).FullName
    }
    
    // 'value' attribute on TextInput (id=MiddleName_Input) at ABContactDetailsPersonDV.pcf: line 33, column 55
    function value_11 () : java.lang.String {
      return (anABContact as ABPerson).MiddleName
    }
    
    // 'value' attribute on TextInput (id=LastName_Input) at ABContactDetailsPersonDV.pcf: line 39, column 53
    function value_15 () : java.lang.String {
      return (anABContact as ABPerson).LastName
    }
    
    // 'value' attribute on TypeKeyInput (id=Suffix_Input) at ABContactDetailsPersonDV.pcf: line 45, column 41
    function value_19 () : typekey.NameSuffix {
      return (anABContact as ABPerson).Suffix
    }
    
    // 'value' attribute on TextInput (id=TaxID_Input) at ABContactDetailsPersonDV.pcf: line 54, column 50
    function value_23 () : java.lang.String {
      return (anABContact as ABPerson).TaxID
    }
    
    // 'value' attribute on TypeKeyInput (id=TaxFilingStatus_Input) at ABContactDetailsPersonDV.pcf: line 60, column 50
    function value_27 () : typekey.TaxFilingStatusType {
      return (anABContact as ABPerson).TaxFilingStatus
    }
    
    // 'value' attribute on TypeKeyInput (id=Prefix_Input) at ABContactDetailsPersonDV.pcf: line 23, column 41
    function value_3 () : typekey.NamePrefix {
      return (anABContact as ABPerson).Prefix
    }
    
    // 'value' attribute on DateInput (id=DateOfBirth_Input) at ABContactDetailsPersonDV.pcf: line 66, column 56
    function value_32 () : java.util.Date {
      return (anABContact as ABPerson).DateOfBirth
    }
    
    // 'value' attribute on TypeKeyInput (id=Gender_Input) at ABContactDetailsPersonDV.pcf: line 72, column 41
    function value_37 () : typekey.GenderType {
      return (anABContact as ABPerson).Gender
    }
    
    // 'value' attribute on TypeKeyInput (id=MaritalStatus_Input) at ABContactDetailsPersonDV.pcf: line 78, column 44
    function value_41 () : typekey.MaritalStatus {
      return (anABContact as ABPerson).MaritalStatus
    }
    
    // 'value' attribute on TextInput (id=Occupation_Input) at ABContactDetailsPersonDV.pcf: line 88, column 55
    function value_45 () : java.lang.String {
      return (anABContact as ABPerson).Occupation
    }
    
    // 'value' attribute on RangeInput (id=Employer_Input) at ABContactDetailsPersonDV.pcf: line 95, column 32
    function value_49 () : ABCompany {
      return (anABContact as ABPerson).Employer
    }
    
    // 'value' attribute on TextInput (id=Height_Input) at ABContactDetailsPersonDV.pcf: line 112, column 45
    function value_68 () : java.math.BigDecimal {
      return (anABContact as ABPolicyPerson).HeightBasedOnUserPreferences
    }
    
    // 'value' attribute on TextInput (id=FirstName_Input) at ABContactDetailsPersonDV.pcf: line 28, column 54
    function value_7 () : java.lang.String {
      return (anABContact as ABPerson).FirstName
    }
    
    // 'value' attribute on TextInput (id=Age_Input) at ABContactDetailsPersonDV.pcf: line 116, column 56
    function value_73 () : java.lang.String {
      return (anABContact as ABPolicyPerson).Age
    }
    
    // 'value' attribute on TextInput (id=ReportStatus_Input) at ABContactDetailsPersonDV.pcf: line 127, column 49
    function value_77 () : java.lang.String {
      return determineReportStatusValue()
    }
    
    // 'valueRange' attribute on RangeInput (id=Employer_Input) at ABContactDetailsPersonDV.pcf: line 95, column 32
    function verifyValueRangeIsAllowedType_53 ($$arg :  ABCompany[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Employer_Input) at ABContactDetailsPersonDV.pcf: line 95, column 32
    function verifyValueRangeIsAllowedType_53 ($$arg :  gw.api.database.IQueryBeanResult) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Employer_Input) at ABContactDetailsPersonDV.pcf: line 95, column 32
    function verifyValueRangeIsAllowedType_53 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Employer_Input) at ABContactDetailsPersonDV.pcf: line 95, column 32
    function verifyValueRange_54 () : void {
      var __valueRangeArg = queryForCompaniesWhoCanHaveEmployees()
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_53(__valueRangeArg)
    }
    
    // 'visible' attribute on InputSet at ABContactDetailsPersonDV.pcf: line 101, column 53
    function visible_76 () : java.lang.Boolean {
      return anABContact typeis ABPolicyPerson
    }
    
    // 'visible' attribute on InputSet at ABContactDetailsPersonDV.pcf: line 119, column 47
    function visible_84 () : java.lang.Boolean {
      return anABContact typeis ABDoctor
    }
    
    property get anABContact () : ABContact {
      return getRequireValue("anABContact", 0) as ABContact
    }
    
    property set anABContact ($arg :  ABContact) {
      setRequireValue("anABContact", 0, $arg)
    }
    
    /* This function is used to populate the Employer dynamic dropdown.
    */
        function queryForCompaniesWhoCanHaveEmployees():
        gw.api.database.IQueryBeanResult<entity.ABCompany> {
    
          var abCompanyQuery = gw.api.database.Query.make(ABCompany)
          abCompanyQuery.compare("CanAddEmployees", Equals, true)
          var resultSet = abCompanyQuery.select()
          return resultSet
        }
    
          /* This function is used to choose the label to be used for the Height field.
          */
          function choseHeightLabel(): String {
            if (User.util.getCurrentUser().MeasurementSystemPreference == MeasurementSystem.TC_US_CUSTOMARY) {
              return DisplayKey.get("Training.HeightInInches")
            } else {
              return DisplayKey.get("Training.HeightInMeters")
            }
          }
    
          /* This function is used to choose the label to be used for the Legal Case Report Status field.
          */
          function determineReportStatusValue(): String {
            switch (anABContact.LegalCaseReportStatus) {
              case LegalCaseReportStatus.TC_NEVER_REQUESTED:
                return "No case report requested"
              case LegalCaseReportStatus.TC_REQUESTED_PENDING:
                return "Report requested"
              case LegalCaseReportStatus.TC_REQUESTED_RECEIVED:
                return "Updated : " + anABContact.LastLegalCaseReportDate.formatDateTime(SHORT, SHORT)
              default:
                return "Report status unknown"
            }
          }
    
          /* This function is used to submit legal case report requests to an external system. It must
             change the value of the ABContact's LegalCaseReportStatus field and throw a custom
             messaging event, so it manually creates and commits a bundle.
          */
          function submitRequestForLegalReport(): void {
            gw.transaction.Transaction.runWithNewBundle(\bundle -> {
              anABContact = bundle.add(anABContact)
              anABContact.LegalCaseReportStatus = LegalCaseReportStatus.TC_REQUESTED_PENDING
              anABContact.addEvent("LegalCaseReportRequested")
              // runWithNewBundle() inherently commits the bundle
            }, "su")
          }
    
    
  }
  
  
}