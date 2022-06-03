package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/contacts/basics/ContactBasicsDV.ABPerson.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ContactBasicsDV_ABPersonExpressions {
  @javax.annotation.Generated("config/web/pcf/contacts/basics/ContactBasicsDV.ABPerson.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ContactBasicsDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'actionEnabled' attribute on ABContactInput (id=Organization_Input) at ABContactWidget.xml: line 11, column 172
    function actionEnabled_117 () : java.lang.Boolean {
      return (contact as ABPerson).Employer != null
    }
    
    // 'actionEnabled' attribute on ABContactInput (id=Guardian_Input) at ABContactWidget.xml: line 11, column 172
    function actionEnabled_97 () : java.lang.Boolean {
      return (contact as ABPerson).Guardian != null
    }
    
    // 'action' attribute on ABContactInput (id=Organization_Input) at ABContactWidget.xml: line 14, column 225
    function action_110 () : void {
      ABContactSearchPopup.push(statictypeof ((contact as ABPerson).Employer))
    }
    
    // 'action' attribute on ABContactInput (id=Organization_Input) at ABContactWidget.xml: line 11, column 172
    function action_112 () : void {
      ABContactDetailPopup.push((contact as ABPerson).Employer)
    }
    
    // 'action' attribute on ABContactInput (id=Guardian_Input) at ABContactWidget.xml: line 14, column 225
    function action_90 () : void {
      ABContactSearchPopup.push(entity.ABPerson)
    }
    
    // 'action' attribute on ABContactInput (id=Guardian_Input) at ABContactWidget.xml: line 11, column 172
    function action_92 () : void {
      ABContactDetailPopup.push((contact as ABPerson).Guardian)
    }
    
    // 'action' attribute on ABContactInput (id=Organization_Input) at ABContactWidget.xml: line 14, column 225
    function action_dest_111 () : pcf.api.Destination {
      return pcf.ABContactSearchPopup.createDestination(statictypeof ((contact as ABPerson).Employer))
    }
    
    // 'action' attribute on ABContactInput (id=Organization_Input) at ABContactWidget.xml: line 11, column 172
    function action_dest_113 () : pcf.api.Destination {
      return pcf.ABContactDetailPopup.createDestination((contact as ABPerson).Employer)
    }
    
    // 'action' attribute on ABContactInput (id=Guardian_Input) at ABContactWidget.xml: line 14, column 225
    function action_dest_91 () : pcf.api.Destination {
      return pcf.ABContactSearchPopup.createDestination(entity.ABPerson)
    }
    
    // 'action' attribute on ABContactInput (id=Guardian_Input) at ABContactWidget.xml: line 11, column 172
    function action_dest_93 () : pcf.api.Destination {
      return pcf.ABContactDetailPopup.createDestination((contact as ABPerson).Guardian)
    }
    
    // 'def' attribute on ABContactInput (id=Organization_Input) at ABContactWidget.xml: line 12, column 171
    function def_onEnter_107 (def :  pcf.NewContactPickerMenuItemSet) : void {
      def.onEnter(statictypeof ((contact as ABPerson).Employer), contact)
    }
    
    // 'def' attribute on InputSetRef at ContactBasicsDV.ABPerson.pcf: line 33, column 56
    function def_onEnter_11 (def :  pcf.GlobalPersonNameInputSet_default) : void {
      def.onEnter(new gw.api.name.ContactNameOwner(new gw.api.name.ABPersonNameDelegate(contact as ABPerson)))
    }
    
    // 'def' attribute on InputSetRef at ContactBasicsDV.ABPerson.pcf: line 183, column 33
    function def_onEnter_123 (def :  pcf.ABPersonVendorSpecialtyInputSet_ABAttorney) : void {
      def.onEnter(contact as ABPerson)
    }
    
    // 'def' attribute on InputSetRef at ContactBasicsDV.ABPerson.pcf: line 183, column 33
    function def_onEnter_125 (def :  pcf.ABPersonVendorSpecialtyInputSet_ABDoctor) : void {
      def.onEnter(contact as ABPerson)
    }
    
    // 'def' attribute on InputSetRef at ContactBasicsDV.ABPerson.pcf: line 183, column 33
    function def_onEnter_127 (def :  pcf.ABPersonVendorSpecialtyInputSet_default) : void {
      def.onEnter(contact as ABPerson)
    }
    
    // 'def' attribute on InputSetRef at ContactBasicsDV.ABPerson.pcf: line 186, column 33
    function def_onEnter_130 (def :  pcf.ABPersonVendorInputSet_ABPersonVendor) : void {
      def.onEnter(contact as ABPerson)
    }
    
    // 'def' attribute on InputSetRef at ContactBasicsDV.ABPerson.pcf: line 186, column 33
    function def_onEnter_132 (def :  pcf.ABPersonVendorInputSet_default) : void {
      def.onEnter(contact as ABPerson)
    }
    
    // 'def' attribute on ListViewInput at ContactBasicsDV.ABPerson.pcf: line 220, column 27
    function def_onEnter_149 (def :  pcf.ContactEFTLV) : void {
      def.onEnter(contact)
    }
    
    // 'def' attribute on InputSetRef at ContactBasicsDV.ABPerson.pcf: line 61, column 62
    function def_onEnter_32 (def :  pcf.PrimaryAddressInputSet) : void {
      def.onEnter((contact as ABPerson))
    }
    
    // 'def' attribute on InputSetRef at ContactBasicsDV.ABPerson.pcf: line 108, column 33
    function def_onEnter_49 (def :  pcf.ABUserContactBasicsInputSet_ABUserContact) : void {
      def.onEnter(contact)
    }
    
    // 'def' attribute on InputSetRef at ContactBasicsDV.ABPerson.pcf: line 108, column 33
    function def_onEnter_51 (def :  pcf.ABUserContactBasicsInputSet_default) : void {
      def.onEnter(contact)
    }
    
    // 'def' attribute on InputSetRef at ContactBasicsDV.ABPerson.pcf: line 111, column 33
    function def_onEnter_54 (def :  pcf.ABAdjudicatorBasicsInputSet_ABAdjudicator) : void {
      def.onEnter(contact)
    }
    
    // 'def' attribute on InputSetRef at ContactBasicsDV.ABPerson.pcf: line 111, column 33
    function def_onEnter_56 (def :  pcf.ABAdjudicatorBasicsInputSet_default) : void {
      def.onEnter(contact)
    }
    
    // 'def' attribute on ABContactInput (id=Guardian_Input) at ABContactWidget.xml: line 12, column 171
    function def_onEnter_87 (def :  pcf.NewPersonOnlyPickerMenuItemSet) : void {
      def.onEnter(entity.ABPerson, contact)
    }
    
    // 'def' attribute on InputSetRef at ContactBasicsDV.ABPerson.pcf: line 33, column 56
    function def_onEnter_9 (def :  pcf.GlobalPersonNameInputSet_Japan) : void {
      def.onEnter(new gw.api.name.ContactNameOwner(new gw.api.name.ABPersonNameDelegate(contact as ABPerson)))
    }
    
    // 'def' attribute on InputSetRef at ContactBasicsDV.ABPerson.pcf: line 33, column 56
    function def_refreshVariables_10 (def :  pcf.GlobalPersonNameInputSet_Japan) : void {
      def.refreshVariables(new gw.api.name.ContactNameOwner(new gw.api.name.ABPersonNameDelegate(contact as ABPerson)))
    }
    
    // 'def' attribute on ABContactInput (id=Organization_Input) at ABContactWidget.xml: line 12, column 171
    function def_refreshVariables_108 (def :  pcf.NewContactPickerMenuItemSet) : void {
      def.refreshVariables(statictypeof ((contact as ABPerson).Employer), contact)
    }
    
    // 'def' attribute on InputSetRef at ContactBasicsDV.ABPerson.pcf: line 33, column 56
    function def_refreshVariables_12 (def :  pcf.GlobalPersonNameInputSet_default) : void {
      def.refreshVariables(new gw.api.name.ContactNameOwner(new gw.api.name.ABPersonNameDelegate(contact as ABPerson)))
    }
    
    // 'def' attribute on InputSetRef at ContactBasicsDV.ABPerson.pcf: line 183, column 33
    function def_refreshVariables_124 (def :  pcf.ABPersonVendorSpecialtyInputSet_ABAttorney) : void {
      def.refreshVariables(contact as ABPerson)
    }
    
    // 'def' attribute on InputSetRef at ContactBasicsDV.ABPerson.pcf: line 183, column 33
    function def_refreshVariables_126 (def :  pcf.ABPersonVendorSpecialtyInputSet_ABDoctor) : void {
      def.refreshVariables(contact as ABPerson)
    }
    
    // 'def' attribute on InputSetRef at ContactBasicsDV.ABPerson.pcf: line 183, column 33
    function def_refreshVariables_128 (def :  pcf.ABPersonVendorSpecialtyInputSet_default) : void {
      def.refreshVariables(contact as ABPerson)
    }
    
    // 'def' attribute on InputSetRef at ContactBasicsDV.ABPerson.pcf: line 186, column 33
    function def_refreshVariables_131 (def :  pcf.ABPersonVendorInputSet_ABPersonVendor) : void {
      def.refreshVariables(contact as ABPerson)
    }
    
    // 'def' attribute on InputSetRef at ContactBasicsDV.ABPerson.pcf: line 186, column 33
    function def_refreshVariables_133 (def :  pcf.ABPersonVendorInputSet_default) : void {
      def.refreshVariables(contact as ABPerson)
    }
    
    // 'def' attribute on ListViewInput at ContactBasicsDV.ABPerson.pcf: line 220, column 27
    function def_refreshVariables_150 (def :  pcf.ContactEFTLV) : void {
      def.refreshVariables(contact)
    }
    
    // 'def' attribute on InputSetRef at ContactBasicsDV.ABPerson.pcf: line 61, column 62
    function def_refreshVariables_33 (def :  pcf.PrimaryAddressInputSet) : void {
      def.refreshVariables((contact as ABPerson))
    }
    
    // 'def' attribute on InputSetRef at ContactBasicsDV.ABPerson.pcf: line 108, column 33
    function def_refreshVariables_50 (def :  pcf.ABUserContactBasicsInputSet_ABUserContact) : void {
      def.refreshVariables(contact)
    }
    
    // 'def' attribute on InputSetRef at ContactBasicsDV.ABPerson.pcf: line 108, column 33
    function def_refreshVariables_52 (def :  pcf.ABUserContactBasicsInputSet_default) : void {
      def.refreshVariables(contact)
    }
    
    // 'def' attribute on InputSetRef at ContactBasicsDV.ABPerson.pcf: line 111, column 33
    function def_refreshVariables_55 (def :  pcf.ABAdjudicatorBasicsInputSet_ABAdjudicator) : void {
      def.refreshVariables(contact)
    }
    
    // 'def' attribute on InputSetRef at ContactBasicsDV.ABPerson.pcf: line 111, column 33
    function def_refreshVariables_57 (def :  pcf.ABAdjudicatorBasicsInputSet_default) : void {
      def.refreshVariables(contact)
    }
    
    // 'def' attribute on ABContactInput (id=Guardian_Input) at ABContactWidget.xml: line 12, column 171
    function def_refreshVariables_88 (def :  pcf.NewPersonOnlyPickerMenuItemSet) : void {
      def.refreshVariables(entity.ABPerson, contact)
    }
    
    // 'value' attribute on TextInput (id=Occupation_Input) at ContactBasicsDV.ABPerson.pcf: line 169, column 53
    function defaultSetter_103 (__VALUE_TO_SET :  java.lang.Object) : void {
      (contact as ABPerson).Occupation = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on ABContactInput (id=Organization_Input) at ABContactWidget.xml: line 11, column 172
    function defaultSetter_115 (__VALUE_TO_SET :  java.lang.Object) : void {
      (contact as ABPerson).Employer = (__VALUE_TO_SET as entity.ABCompany)
    }
    
    // 'value' attribute on TextInput (id=LicenseNumber_Input) at ContactBasicsDV.ABPerson.pcf: line 196, column 56
    function defaultSetter_136 (__VALUE_TO_SET :  java.lang.Object) : void {
      (contact as ABPerson).LicenseNumber = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TypeKeyInput (id=LicenseState_Input) at ContactBasicsDV.ABPerson.pcf: line 203, column 45
    function defaultSetter_140 (__VALUE_TO_SET :  java.lang.Object) : void {
      (contact as ABPerson).LicenseState = (__VALUE_TO_SET as typekey.Jurisdiction)
    }
    
    // 'value' attribute on TextAreaInput (id=Notes_Input) at ContactBasicsDV.ABPerson.pcf: line 212, column 46
    function defaultSetter_146 (__VALUE_TO_SET :  java.lang.Object) : void {
      (contact as ABPerson).Notes = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=FormerName_Input) at ContactBasicsDV.ABPerson.pcf: line 40, column 53
    function defaultSetter_15 (__VALUE_TO_SET :  java.lang.Object) : void {
      (contact as ABPerson).FormerName = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TypeKeyInput (id=VendorAvailability_Input) at ContactBasicsDV.ABPerson.pcf: line 49, column 34
    function defaultSetter_22 (__VALUE_TO_SET :  java.lang.Object) : void {
      contact.VendorAvailability = (__VALUE_TO_SET as typekey.VendorAvailabilityType)
    }
    
    // 'value' attribute on TextInput (id=VendorUnavailableMessageInput_Input) at ContactBasicsDV.ABPerson.pcf: line 58, column 76
    function defaultSetter_28 (__VALUE_TO_SET :  java.lang.Object) : void {
      contact.VendorUnavailableMessage = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TypeKeyInput (id=Currency_Input) at ContactBasicsDV.ABPerson.pcf: line 118, column 67
    function defaultSetter_61 (__VALUE_TO_SET :  java.lang.Object) : void {
      (contact as ABPerson).PreferredCurrency = (__VALUE_TO_SET as typekey.Currency)
    }
    
    // 'value' attribute on PrivacyInput (id=TaxID_Input) at ContactBasicsDV.ABPerson.pcf: line 126, column 48
    function defaultSetter_66 (__VALUE_TO_SET :  java.lang.Object) : void {
      (contact as ABPerson).TaxID = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TypeKeyInput (id=TaxFilingStatus_Input) at ContactBasicsDV.ABPerson.pcf: line 135, column 52
    function defaultSetter_72 (__VALUE_TO_SET :  java.lang.Object) : void {
      (contact as ABPerson).TaxFilingStatus = (__VALUE_TO_SET as typekey.TaxFilingStatusType)
    }
    
    // 'value' attribute on DateInput (id=DateOfBirth_Input) at ContactBasicsDV.ABPerson.pcf: line 140, column 54
    function defaultSetter_76 (__VALUE_TO_SET :  java.lang.Object) : void {
      (contact as ABPerson).DateOfBirth = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on TypeKeyInput (id=Gender_Input) at ContactBasicsDV.ABPerson.pcf: line 146, column 43
    function defaultSetter_80 (__VALUE_TO_SET :  java.lang.Object) : void {
      (contact as ABPerson).Gender = (__VALUE_TO_SET as typekey.GenderType)
    }
    
    // 'value' attribute on TypeKeyInput (id=MaritalStatus_Input) at ContactBasicsDV.ABPerson.pcf: line 152, column 46
    function defaultSetter_84 (__VALUE_TO_SET :  java.lang.Object) : void {
      (contact as ABPerson).MaritalStatus = (__VALUE_TO_SET as typekey.MaritalStatus)
    }
    
    // 'value' attribute on ABContactInput (id=Guardian_Input) at ABContactWidget.xml: line 11, column 172
    function defaultSetter_95 (__VALUE_TO_SET :  java.lang.Object) : void {
      (contact as ABPerson).Guardian = (__VALUE_TO_SET as entity.ABPerson)
    }
    
    // 'encryptionExpression' attribute on PrivacyInput (id=TaxID_Input) at ContactBasicsDV.ABPerson.pcf: line 126, column 48
    function encryptionExpression_68 (VALUE :  java.lang.String) : java.lang.String {
      return (contact as ABPerson).maskTaxId(VALUE)
    }
    
    // 'filter' attribute on TypeKeyInput (id=LicenseState_Input) at ContactBasicsDV.ABPerson.pcf: line 203, column 45
    function filter_142 (VALUE :  typekey.Jurisdiction, VALUES :  typekey.Jurisdiction[]) : java.lang.Boolean {
      return VALUE.hasCategory(JurisdictionType.TC_DRIVING_LIC)
    }
    
    // 'initialValue' attribute on Variable at ContactBasicsDV.ABPerson.pcf: line 14, column 23
    function initialValue_0 () : Boolean {
      return contact.CategoryScores != null and contact.CategoryScores.length > 0
    }
    
    // 'initialValue' attribute on Variable at ContactBasicsDV.ABPerson.pcf: line 18, column 49
    function initialValue_1 () : gw.web.ContactDetailsVendorHelper {
      return new gw.web.ContactDetailsVendorHelper(contact)
    }
    
    // 'label' attribute on Label at ContactBasicsDV.ABPerson.pcf: line 30, column 51
    function label_8 () : java.lang.String {
      return contact.getSubtype().DisplayName
    }
    
    // 'mode' attribute on InputSetRef at ContactBasicsDV.ABPerson.pcf: line 33, column 56
    function mode_13 () : java.lang.Object {
      return gw.api.name.NameLocaleSettings.PCFMode
    }
    
    // 'mode' attribute on InputSetRef at ContactBasicsDV.ABPerson.pcf: line 108, column 33
    function mode_53 () : java.lang.Object {
      return contact.Subtype
    }
    
    // 'value' attribute on TextInput (id=FormerName_Input) at ContactBasicsDV.ABPerson.pcf: line 40, column 53
    function valueRoot_16 () : java.lang.Object {
      return (contact as ABPerson)
    }
    
    // 'value' attribute on TypeKeyInput (id=VendorAvailability_Input) at ContactBasicsDV.ABPerson.pcf: line 49, column 34
    function valueRoot_23 () : java.lang.Object {
      return contact
    }
    
    // 'value' attribute on TextInput (id=CreateStatus_Input) at ContactBasicsDV.ABPerson.pcf: line 26, column 86
    function valueRoot_4 () : java.lang.Object {
      return contact.CreateStatus
    }
    
    // 'value' attribute on TextInput (id=Occupation_Input) at ContactBasicsDV.ABPerson.pcf: line 169, column 53
    function value_102 () : java.lang.String {
      return (contact as ABPerson).Occupation
    }
    
    // 'value' attribute on ABContactInput (id=Organization_Input) at ABContactWidget.xml: line 11, column 172
    function value_114 () : entity.ABCompany {
      return (contact as ABPerson).Employer
    }
    
    // 'value' attribute on TextInput (id=LicenseNumber_Input) at ContactBasicsDV.ABPerson.pcf: line 196, column 56
    function value_135 () : java.lang.String {
      return (contact as ABPerson).LicenseNumber
    }
    
    // 'value' attribute on TypeKeyInput (id=LicenseState_Input) at ContactBasicsDV.ABPerson.pcf: line 203, column 45
    function value_139 () : typekey.Jurisdiction {
      return (contact as ABPerson).LicenseState
    }
    
    // 'value' attribute on TextInput (id=FormerName_Input) at ContactBasicsDV.ABPerson.pcf: line 40, column 53
    function value_14 () : java.lang.String {
      return (contact as ABPerson).FormerName
    }
    
    // 'value' attribute on TextAreaInput (id=Notes_Input) at ContactBasicsDV.ABPerson.pcf: line 212, column 46
    function value_145 () : java.lang.String {
      return (contact as ABPerson).Notes
    }
    
    // 'value' attribute on TypeKeyInput (id=VendorAvailability_Input) at ContactBasicsDV.ABPerson.pcf: line 49, column 34
    function value_21 () : typekey.VendorAvailabilityType {
      return contact.VendorAvailability
    }
    
    // 'value' attribute on TextInput (id=VendorUnavailableMessageInput_Input) at ContactBasicsDV.ABPerson.pcf: line 58, column 76
    function value_27 () : java.lang.String {
      return contact.VendorUnavailableMessage
    }
    
    // 'value' attribute on TextInput (id=CreateStatus_Input) at ContactBasicsDV.ABPerson.pcf: line 26, column 86
    function value_3 () : java.lang.String {
      return contact.CreateStatus.DisplayName
    }
    
    // 'value' attribute on TextInput (id=score_Input) at ContactBasicsDV.ABPerson.pcf: line 72, column 42
    function value_37 () : java.lang.Integer {
      return contact.Score
    }
    
    // 'value' attribute on RowIterator at ContactBasicsDV.ABPerson.pcf: line 84, column 57
    function value_47 () : entity.ABContactCategoryScore[] {
      return contact.getSortedCategoryScores()
    }
    
    // 'value' attribute on TypeKeyInput (id=Currency_Input) at ContactBasicsDV.ABPerson.pcf: line 118, column 67
    function value_60 () : typekey.Currency {
      return (contact as ABPerson).PreferredCurrency
    }
    
    // 'value' attribute on PrivacyInput (id=TaxID_Input) at ContactBasicsDV.ABPerson.pcf: line 126, column 48
    function value_65 () : java.lang.String {
      return (contact as ABPerson).TaxID
    }
    
    // 'value' attribute on TypeKeyInput (id=TaxFilingStatus_Input) at ContactBasicsDV.ABPerson.pcf: line 135, column 52
    function value_71 () : typekey.TaxFilingStatusType {
      return (contact as ABPerson).TaxFilingStatus
    }
    
    // 'value' attribute on DateInput (id=DateOfBirth_Input) at ContactBasicsDV.ABPerson.pcf: line 140, column 54
    function value_75 () : java.util.Date {
      return (contact as ABPerson).DateOfBirth
    }
    
    // 'value' attribute on TypeKeyInput (id=Gender_Input) at ContactBasicsDV.ABPerson.pcf: line 146, column 43
    function value_79 () : typekey.GenderType {
      return (contact as ABPerson).Gender
    }
    
    // 'value' attribute on TypeKeyInput (id=MaritalStatus_Input) at ContactBasicsDV.ABPerson.pcf: line 152, column 46
    function value_83 () : typekey.MaritalStatus {
      return (contact as ABPerson).MaritalStatus
    }
    
    // 'value' attribute on ABContactInput (id=Guardian_Input) at ABContactWidget.xml: line 11, column 172
    function value_94 () : entity.ABPerson {
      return (contact as ABPerson).Guardian
    }
    
    // 'valueType' attribute on ABContactInput (id=Guardian_Input) at ContactBasicsDV.ABPerson.pcf: line 161, column 40
    function verifyValueType_101 () : void {
      var __valueTypeArg : entity.ABPerson
      // If this assignment statement fails to compile, that means that the declared valueType
      // is not a valid type for use with this Input or Cell type
      var __requiredTypeArg : entity.ABContact = __valueTypeArg
    }
    
    // 'valueType' attribute on ABContactInput (id=Organization_Input) at ContactBasicsDV.ABPerson.pcf: line 179, column 41
    function verifyValueType_121 () : void {
      var __valueTypeArg : entity.ABCompany
      // If this assignment statement fails to compile, that means that the declared valueType
      // is not a valid type for use with this Input or Cell type
      var __requiredTypeArg : entity.ABContact = __valueTypeArg
    }
    
    // 'visible' attribute on ABContactInput (id=Organization_Input) at ABContactWidget.xml: line 14, column 225
    function visible_109 () : java.lang.Boolean {
      return "ABContactSearchPopup.push(statictypeof ((contact as ABPerson).Employer))" != "" && true
    }
    
    // 'visible' attribute on InputSet at ContactBasicsDV.ABPerson.pcf: line 172, column 67
    function visible_122 () : java.lang.Boolean {
      return isPersonOnly(contact) or isAdjudicator(contact)
    }
    
    // 'visible' attribute on InputSet at ContactBasicsDV.ABPerson.pcf: line 35, column 41
    function visible_18 () : java.lang.Boolean {
      return isPersonOnly(contact)
    }
    
    // 'visible' attribute on TypeKeyInput (id=VendorAvailability_Input) at ContactBasicsDV.ABPerson.pcf: line 49, column 34
    function visible_19 () : java.lang.Boolean {
      return contact.Vendor
    }
    
    // 'visible' attribute on TextInput (id=CreateStatus_Input) at ContactBasicsDV.ABPerson.pcf: line 26, column 86
    function visible_2 () : java.lang.Boolean {
      return contact.CreateStatus != ContactCreationApprovalStatus.TC_APPROVED
    }
    
    // 'visible' attribute on TextInput (id=VendorUnavailableMessageInput_Input) at ContactBasicsDV.ABPerson.pcf: line 58, column 76
    function visible_26 () : java.lang.Boolean {
      return contactDetailsVendorHelper.ShowVendorUnavailableMessage
    }
    
    // 'visible' attribute on InputDivider at ContactBasicsDV.ABPerson.pcf: line 63, column 65
    function visible_34 () : java.lang.Boolean {
      return hasCategoryScores or (contact.Score != null)
    }
    
    // 'visible' attribute on TextInput (id=score_Input) at ContactBasicsDV.ABPerson.pcf: line 72, column 42
    function visible_36 () : java.lang.Boolean {
      return contact.Score != null
    }
    
    // 'visible' attribute on ListViewInput at ContactBasicsDV.ABPerson.pcf: line 75, column 37
    function visible_48 () : java.lang.Boolean {
      return hasCategoryScores
    }
    
    // 'visible' attribute on TypeKeyInput (id=Currency_Input) at ContactBasicsDV.ABPerson.pcf: line 118, column 67
    function visible_59 () : java.lang.Boolean {
      return gw.api.util.CurrencyUtil.isMultiCurrencyMode()
    }
    
    // 'visible' attribute on InputSet at ContactBasicsDV.ABPerson.pcf: line 120, column 94
    function visible_70 () : java.lang.Boolean {
      return isPersonOnly(contact) or isAdjudicator(contact) or isPolicyPerson(contact)
    }
    
    // 'visible' attribute on ABContactInput (id=Guardian_Input) at ABContactWidget.xml: line 14, column 225
    function visible_89 () : java.lang.Boolean {
      return "ABContactSearchPopup.push(entity.ABPerson)" != "" && true
    }
    
    property get contact () : ABContact {
      return getRequireValue("contact", 0) as ABContact
    }
    
    property set contact ($arg :  ABContact) {
      setRequireValue("contact", 0, $arg)
    }
    
    property get contactDetailsVendorHelper () : gw.web.ContactDetailsVendorHelper {
      return getVariableValue("contactDetailsVendorHelper", 0) as gw.web.ContactDetailsVendorHelper
    }
    
    property set contactDetailsVendorHelper ($arg :  gw.web.ContactDetailsVendorHelper) {
      setVariableValue("contactDetailsVendorHelper", 0, $arg)
    }
    
    property get hasCategoryScores () : Boolean {
      return getVariableValue("hasCategoryScores", 0) as Boolean
    }
    
    property set hasCategoryScores ($arg :  Boolean) {
      setVariableValue("hasCategoryScores", 0, $arg)
    }
    
    function isVendor(aContact : ABContact) : boolean {
          return aContact typeis ABPersonVendor;
          }
    
          function isAdjudicator(aContact : ABContact) : boolean {
          return aContact typeis ABAdjudicator;
          }
    
          function isPersonOnly(aContact : ABContact) : boolean {
          return aContact.Subtype==TC_ABPERSON;
          }
    
          function isPolicyPerson(aContact : ABContact) : boolean {
          return aContact typeis ABPolicyPerson;
          }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/contacts/basics/ContactBasicsDV.ABPerson.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends ContactBasicsDVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TypeKeyCell (id=Category_Cell) at ContactBasicsDV.ABPerson.pcf: line 91, column 53
    function valueRoot_42 () : java.lang.Object {
      return categoryScore
    }
    
    // 'value' attribute on TypeKeyCell (id=Category_Cell) at ContactBasicsDV.ABPerson.pcf: line 91, column 53
    function value_41 () : typekey.ReviewCategory {
      return categoryScore.ReviewCategory
    }
    
    // 'value' attribute on TextCell (id=Score_Cell) at ContactBasicsDV.ABPerson.pcf: line 97, column 48
    function value_44 () : java.lang.Integer {
      return categoryScore.Score
    }
    
    property get categoryScore () : entity.ABContactCategoryScore {
      return getIteratedValue(1) as entity.ABContactCategoryScore
    }
    
    
  }
  
  
}