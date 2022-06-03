package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/contacts/basics/ContactBasicsDV.ABCompany.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ContactBasicsDV_ABCompanyExpressions {
  @javax.annotation.Generated("config/web/pcf/contacts/basics/ContactBasicsDV.ABCompany.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ContactBasicsDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'actionEnabled' attribute on ABContactInput (id=PrimaryContact_Input) at ABContactWidget.xml: line 11, column 172
    function actionEnabled_84 () : java.lang.Boolean {
      return contact.PrimaryContact != null
    }
    
    // 'action' attribute on ABContactInput (id=PrimaryContact_Input) at ABContactWidget.xml: line 14, column 225
    function action_77 () : void {
      ABContactSearchPopup.push(entity.ABPerson)
    }
    
    // 'action' attribute on ABContactInput (id=PrimaryContact_Input) at ABContactWidget.xml: line 11, column 172
    function action_79 () : void {
      ABContactDetailPopup.push(contact.PrimaryContact)
    }
    
    // 'action' attribute on ABContactInput (id=PrimaryContact_Input) at ABContactWidget.xml: line 14, column 225
    function action_dest_78 () : pcf.api.Destination {
      return pcf.ABContactSearchPopup.createDestination(entity.ABPerson)
    }
    
    // 'action' attribute on ABContactInput (id=PrimaryContact_Input) at ABContactWidget.xml: line 11, column 172
    function action_dest_80 () : pcf.api.Destination {
      return pcf.ABContactDetailPopup.createDestination(contact.PrimaryContact)
    }
    
    // 'def' attribute on InputSetRef at ContactBasicsDV.ABCompany.pcf: line 37, column 56
    function def_onEnter_10 (def :  pcf.GlobalContactNameInputSet_Japan) : void {
      def.onEnter(new gw.api.name.ContactNameOwner(new gw.api.name.ABContactNameDelegate(contact as ABCompany)))
    }
    
    // 'def' attribute on InputSetRef at ContactBasicsDV.ABCompany.pcf: line 161, column 33
    function def_onEnter_100 (def :  pcf.ABCompanyVendorFormInputSet_ABCompanyVendor) : void {
      def.onEnter(contact)
    }
    
    // 'def' attribute on InputSetRef at ContactBasicsDV.ABCompany.pcf: line 161, column 33
    function def_onEnter_102 (def :  pcf.ABCompanyVendorFormInputSet_default) : void {
      def.onEnter(contact)
    }
    
    // 'def' attribute on ListViewInput at ContactBasicsDV.ABCompany.pcf: line 177, column 27
    function def_onEnter_109 (def :  pcf.ContactEFTLV) : void {
      def.onEnter(contact)
    }
    
    // 'def' attribute on InputSetRef at ContactBasicsDV.ABCompany.pcf: line 37, column 56
    function def_onEnter_12 (def :  pcf.GlobalContactNameInputSet_default) : void {
      def.onEnter(new gw.api.name.ContactNameOwner(new gw.api.name.ABContactNameDelegate(contact as ABCompany)))
    }
    
    // 'def' attribute on InputSetRef at ContactBasicsDV.ABCompany.pcf: line 66, column 61
    function def_onEnter_34 (def :  pcf.PrimaryAddressInputSet) : void {
      def.onEnter(contact as ABCompany)
    }
    
    // 'def' attribute on InputSetRef at ContactBasicsDV.ABCompany.pcf: line 116, column 35
    function def_onEnter_51 (def :  pcf.ABCompanyVendorBasicInputSet_ABCompanyVendor) : void {
      def.onEnter(contact)
    }
    
    // 'def' attribute on InputSetRef at ContactBasicsDV.ABCompany.pcf: line 116, column 35
    function def_onEnter_53 (def :  pcf.ABCompanyVendorBasicInputSet_default) : void {
      def.onEnter(contact)
    }
    
    // 'def' attribute on InputSetRef at ContactBasicsDV.ABCompany.pcf: line 119, column 35
    function def_onEnter_56 (def :  pcf.ABCompanyVendorSpecialtyInputSet_ABAutoRepairShop) : void {
      def.onEnter(contact)
    }
    
    // 'def' attribute on InputSetRef at ContactBasicsDV.ABCompany.pcf: line 119, column 35
    function def_onEnter_58 (def :  pcf.ABCompanyVendorSpecialtyInputSet_ABAutoTowingAgcy) : void {
      def.onEnter(contact)
    }
    
    // 'def' attribute on InputSetRef at ContactBasicsDV.ABCompany.pcf: line 119, column 35
    function def_onEnter_60 (def :  pcf.ABCompanyVendorSpecialtyInputSet_ABLawFirm) : void {
      def.onEnter(contact)
    }
    
    // 'def' attribute on InputSetRef at ContactBasicsDV.ABCompany.pcf: line 119, column 35
    function def_onEnter_62 (def :  pcf.ABCompanyVendorSpecialtyInputSet_ABMedicalCareOrg) : void {
      def.onEnter(contact)
    }
    
    // 'def' attribute on InputSetRef at ContactBasicsDV.ABCompany.pcf: line 119, column 35
    function def_onEnter_64 (def :  pcf.ABCompanyVendorSpecialtyInputSet_default) : void {
      def.onEnter(contact)
    }
    
    // 'def' attribute on ABContactInput (id=PrimaryContact_Input) at ABContactWidget.xml: line 12, column 171
    function def_onEnter_74 (def :  pcf.NewPersonOnlyPickerMenuItemSet) : void {
      def.onEnter(entity.ABPerson, contact)
    }
    
    // 'def' attribute on InputSetRef (id=Work) at ContactBasicsDV.ABCompany.pcf: line 142, column 20
    function def_onEnter_88 (def :  pcf.GlobalPhoneInputSet) : void {
      def.onEnter(new gw.api.phone.StandardPhoneOwner(new gw.api.phone.ContactPhoneDelegate(contact, ABCompany#WorkPhone), DisplayKey.get("Web.ContactDetail.Phone.Phone"), false))
    }
    
    // 'def' attribute on InputSetRef (id=Fax) at ContactBasicsDV.ABCompany.pcf: line 146, column 19
    function def_onEnter_90 (def :  pcf.GlobalPhoneInputSet) : void {
      def.onEnter(new gw.api.phone.StandardPhoneOwner(new gw.api.phone.ContactPhoneDelegate(contact, ABCompany#FaxPhone), DisplayKey.get("Web.ContactDetail.Phone.Fax"), false))
    }
    
    // 'def' attribute on InputSetRef at ContactBasicsDV.ABCompany.pcf: line 161, column 33
    function def_refreshVariables_101 (def :  pcf.ABCompanyVendorFormInputSet_ABCompanyVendor) : void {
      def.refreshVariables(contact)
    }
    
    // 'def' attribute on InputSetRef at ContactBasicsDV.ABCompany.pcf: line 161, column 33
    function def_refreshVariables_103 (def :  pcf.ABCompanyVendorFormInputSet_default) : void {
      def.refreshVariables(contact)
    }
    
    // 'def' attribute on InputSetRef at ContactBasicsDV.ABCompany.pcf: line 37, column 56
    function def_refreshVariables_11 (def :  pcf.GlobalContactNameInputSet_Japan) : void {
      def.refreshVariables(new gw.api.name.ContactNameOwner(new gw.api.name.ABContactNameDelegate(contact as ABCompany)))
    }
    
    // 'def' attribute on ListViewInput at ContactBasicsDV.ABCompany.pcf: line 177, column 27
    function def_refreshVariables_110 (def :  pcf.ContactEFTLV) : void {
      def.refreshVariables(contact)
    }
    
    // 'def' attribute on InputSetRef at ContactBasicsDV.ABCompany.pcf: line 37, column 56
    function def_refreshVariables_13 (def :  pcf.GlobalContactNameInputSet_default) : void {
      def.refreshVariables(new gw.api.name.ContactNameOwner(new gw.api.name.ABContactNameDelegate(contact as ABCompany)))
    }
    
    // 'def' attribute on InputSetRef at ContactBasicsDV.ABCompany.pcf: line 66, column 61
    function def_refreshVariables_35 (def :  pcf.PrimaryAddressInputSet) : void {
      def.refreshVariables(contact as ABCompany)
    }
    
    // 'def' attribute on InputSetRef at ContactBasicsDV.ABCompany.pcf: line 116, column 35
    function def_refreshVariables_52 (def :  pcf.ABCompanyVendorBasicInputSet_ABCompanyVendor) : void {
      def.refreshVariables(contact)
    }
    
    // 'def' attribute on InputSetRef at ContactBasicsDV.ABCompany.pcf: line 116, column 35
    function def_refreshVariables_54 (def :  pcf.ABCompanyVendorBasicInputSet_default) : void {
      def.refreshVariables(contact)
    }
    
    // 'def' attribute on InputSetRef at ContactBasicsDV.ABCompany.pcf: line 119, column 35
    function def_refreshVariables_57 (def :  pcf.ABCompanyVendorSpecialtyInputSet_ABAutoRepairShop) : void {
      def.refreshVariables(contact)
    }
    
    // 'def' attribute on InputSetRef at ContactBasicsDV.ABCompany.pcf: line 119, column 35
    function def_refreshVariables_59 (def :  pcf.ABCompanyVendorSpecialtyInputSet_ABAutoTowingAgcy) : void {
      def.refreshVariables(contact)
    }
    
    // 'def' attribute on InputSetRef at ContactBasicsDV.ABCompany.pcf: line 119, column 35
    function def_refreshVariables_61 (def :  pcf.ABCompanyVendorSpecialtyInputSet_ABLawFirm) : void {
      def.refreshVariables(contact)
    }
    
    // 'def' attribute on InputSetRef at ContactBasicsDV.ABCompany.pcf: line 119, column 35
    function def_refreshVariables_63 (def :  pcf.ABCompanyVendorSpecialtyInputSet_ABMedicalCareOrg) : void {
      def.refreshVariables(contact)
    }
    
    // 'def' attribute on InputSetRef at ContactBasicsDV.ABCompany.pcf: line 119, column 35
    function def_refreshVariables_65 (def :  pcf.ABCompanyVendorSpecialtyInputSet_default) : void {
      def.refreshVariables(contact)
    }
    
    // 'def' attribute on ABContactInput (id=PrimaryContact_Input) at ABContactWidget.xml: line 12, column 171
    function def_refreshVariables_75 (def :  pcf.NewPersonOnlyPickerMenuItemSet) : void {
      def.refreshVariables(entity.ABPerson, contact)
    }
    
    // 'def' attribute on InputSetRef (id=Work) at ContactBasicsDV.ABCompany.pcf: line 142, column 20
    function def_refreshVariables_89 (def :  pcf.GlobalPhoneInputSet) : void {
      def.refreshVariables(new gw.api.phone.StandardPhoneOwner(new gw.api.phone.ContactPhoneDelegate(contact, ABCompany#WorkPhone), DisplayKey.get("Web.ContactDetail.Phone.Phone"), false))
    }
    
    // 'def' attribute on InputSetRef (id=Fax) at ContactBasicsDV.ABCompany.pcf: line 146, column 19
    function def_refreshVariables_91 (def :  pcf.GlobalPhoneInputSet) : void {
      def.refreshVariables(new gw.api.phone.StandardPhoneOwner(new gw.api.phone.ContactPhoneDelegate(contact, ABCompany#FaxPhone), DisplayKey.get("Web.ContactDetail.Phone.Fax"), false))
    }
    
    // 'value' attribute on TextAreaInput (id=Notes_Input) at ContactBasicsDV.ABCompany.pcf: line 169, column 47
    function defaultSetter_106 (__VALUE_TO_SET :  java.lang.Object) : void {
      (contact as ABCompany).Notes = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on PrivacyInput (id=EIN_Input) at ContactBasicsDV.ABCompany.pcf: line 45, column 49
    function defaultSetter_16 (__VALUE_TO_SET :  java.lang.Object) : void {
      (contact as ABCompany).TaxID = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TypeKeyInput (id=VendorAvailability_Input) at ContactBasicsDV.ABCompany.pcf: line 54, column 34
    function defaultSetter_24 (__VALUE_TO_SET :  java.lang.Object) : void {
      contact.VendorAvailability = (__VALUE_TO_SET as typekey.VendorAvailabilityType)
    }
    
    // 'value' attribute on TextInput (id=VendorUnavailableMessageInput_Input) at ContactBasicsDV.ABCompany.pcf: line 63, column 76
    function defaultSetter_30 (__VALUE_TO_SET :  java.lang.Object) : void {
      contact.VendorUnavailableMessage = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TypeKeyInput (id=Currency_Input) at ContactBasicsDV.ABCompany.pcf: line 127, column 67
    function defaultSetter_70 (__VALUE_TO_SET :  java.lang.Object) : void {
      (contact as ABCompany).PreferredCurrency = (__VALUE_TO_SET as typekey.Currency)
    }
    
    // 'value' attribute on ABContactInput (id=PrimaryContact_Input) at ABContactWidget.xml: line 11, column 172
    function defaultSetter_82 (__VALUE_TO_SET :  java.lang.Object) : void {
      contact.PrimaryContact = (__VALUE_TO_SET as entity.ABContact)
    }
    
    // 'value' attribute on TextInput (id=Email1_Input) at ContactBasicsDV.ABCompany.pcf: line 152, column 55
    function defaultSetter_93 (__VALUE_TO_SET :  java.lang.Object) : void {
      (contact as ABCompany).EmailAddress1 = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=Email2_Input) at ContactBasicsDV.ABCompany.pcf: line 158, column 55
    function defaultSetter_97 (__VALUE_TO_SET :  java.lang.Object) : void {
      (contact as ABCompany).EmailAddress2 = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'encryptionExpression' attribute on PrivacyInput (id=EIN_Input) at ContactBasicsDV.ABCompany.pcf: line 45, column 49
    function encryptionExpression_18 (VALUE :  java.lang.String) : java.lang.String {
      return (contact as ABCompany).maskTaxId(VALUE)
    }
    
    // 'initialValue' attribute on Variable at ContactBasicsDV.ABCompany.pcf: line 14, column 40
    function initialValue_0 () : ABContactCategoryScore[] {
      return contact.getSortedCategoryScores()
    }
    
    // 'initialValue' attribute on Variable at ContactBasicsDV.ABCompany.pcf: line 18, column 23
    function initialValue_1 () : Boolean {
      return categoryScores != null and categoryScores.length > 0
    }
    
    // 'initialValue' attribute on Variable at ContactBasicsDV.ABCompany.pcf: line 22, column 49
    function initialValue_2 () : gw.web.ContactDetailsVendorHelper {
      return new gw.web.ContactDetailsVendorHelper(contact)
    }
    
    // 'label' attribute on Label at ContactBasicsDV.ABCompany.pcf: line 34, column 51
    function label_9 () : java.lang.String {
      return contact.getSubtype().DisplayName
    }
    
    // 'mode' attribute on InputSetRef at ContactBasicsDV.ABCompany.pcf: line 37, column 56
    function mode_14 () : java.lang.Object {
      return gw.api.name.NameLocaleSettings.PCFMode
    }
    
    // 'mode' attribute on InputSetRef at ContactBasicsDV.ABCompany.pcf: line 116, column 35
    function mode_55 () : java.lang.Object {
      return contact.Subtype
    }
    
    // 'value' attribute on PrivacyInput (id=EIN_Input) at ContactBasicsDV.ABCompany.pcf: line 45, column 49
    function valueRoot_17 () : java.lang.Object {
      return (contact as ABCompany)
    }
    
    // 'value' attribute on TypeKeyInput (id=VendorAvailability_Input) at ContactBasicsDV.ABCompany.pcf: line 54, column 34
    function valueRoot_25 () : java.lang.Object {
      return contact
    }
    
    // 'value' attribute on TextInput (id=CreateStatus_Input) at ContactBasicsDV.ABCompany.pcf: line 30, column 86
    function valueRoot_5 () : java.lang.Object {
      return contact.CreateStatus
    }
    
    // 'value' attribute on TextAreaInput (id=Notes_Input) at ContactBasicsDV.ABCompany.pcf: line 169, column 47
    function value_105 () : java.lang.String {
      return (contact as ABCompany).Notes
    }
    
    // 'value' attribute on PrivacyInput (id=EIN_Input) at ContactBasicsDV.ABCompany.pcf: line 45, column 49
    function value_15 () : java.lang.String {
      return (contact as ABCompany).TaxID
    }
    
    // 'value' attribute on TypeKeyInput (id=VendorAvailability_Input) at ContactBasicsDV.ABCompany.pcf: line 54, column 34
    function value_23 () : typekey.VendorAvailabilityType {
      return contact.VendorAvailability
    }
    
    // 'value' attribute on TextInput (id=VendorUnavailableMessageInput_Input) at ContactBasicsDV.ABCompany.pcf: line 63, column 76
    function value_29 () : java.lang.String {
      return contact.VendorUnavailableMessage
    }
    
    // 'value' attribute on TextInput (id=score_Input) at ContactBasicsDV.ABCompany.pcf: line 77, column 42
    function value_39 () : java.lang.Integer {
      return contact.Score
    }
    
    // 'value' attribute on TextInput (id=CreateStatus_Input) at ContactBasicsDV.ABCompany.pcf: line 30, column 86
    function value_4 () : java.lang.String {
      return contact.CreateStatus.DisplayName
    }
    
    // 'value' attribute on RowIterator at ContactBasicsDV.ABCompany.pcf: line 89, column 57
    function value_49 () : entity.ABContactCategoryScore[] {
      return categoryScores
    }
    
    // 'value' attribute on TypeKeyInput (id=Currency_Input) at ContactBasicsDV.ABCompany.pcf: line 127, column 67
    function value_69 () : typekey.Currency {
      return (contact as ABCompany).PreferredCurrency
    }
    
    // 'value' attribute on ABContactInput (id=PrimaryContact_Input) at ABContactWidget.xml: line 11, column 172
    function value_81 () : entity.ABContact {
      return contact.PrimaryContact
    }
    
    // 'value' attribute on TextInput (id=Email1_Input) at ContactBasicsDV.ABCompany.pcf: line 152, column 55
    function value_92 () : java.lang.String {
      return (contact as ABCompany).EmailAddress1
    }
    
    // 'value' attribute on TextInput (id=Email2_Input) at ContactBasicsDV.ABCompany.pcf: line 158, column 55
    function value_96 () : java.lang.String {
      return (contact as ABCompany).EmailAddress2
    }
    
    // 'visible' attribute on InputSet at ContactBasicsDV.ABCompany.pcf: line 39, column 53
    function visible_20 () : java.lang.Boolean {
      return !(contact typeis ABCompanyVendor)
    }
    
    // 'visible' attribute on TypeKeyInput (id=VendorAvailability_Input) at ContactBasicsDV.ABCompany.pcf: line 54, column 34
    function visible_21 () : java.lang.Boolean {
      return contact.Vendor
    }
    
    // 'visible' attribute on TextInput (id=VendorUnavailableMessageInput_Input) at ContactBasicsDV.ABCompany.pcf: line 63, column 76
    function visible_28 () : java.lang.Boolean {
      return contactDetailsVendorHelper.ShowVendorUnavailableMessage
    }
    
    // 'visible' attribute on TextInput (id=CreateStatus_Input) at ContactBasicsDV.ABCompany.pcf: line 30, column 86
    function visible_3 () : java.lang.Boolean {
      return contact.CreateStatus != ContactCreationApprovalStatus.TC_APPROVED
    }
    
    // 'visible' attribute on InputDivider at ContactBasicsDV.ABCompany.pcf: line 68, column 65
    function visible_36 () : java.lang.Boolean {
      return hasCategoryScores or (contact.Score != null)
    }
    
    // 'visible' attribute on TextInput (id=score_Input) at ContactBasicsDV.ABCompany.pcf: line 77, column 42
    function visible_38 () : java.lang.Boolean {
      return contact.Score != null
    }
    
    // 'visible' attribute on ListViewInput at ContactBasicsDV.ABCompany.pcf: line 80, column 37
    function visible_50 () : java.lang.Boolean {
      return hasCategoryScores
    }
    
    // 'visible' attribute on InputSet at ContactBasicsDV.ABCompany.pcf: line 110, column 50
    function visible_67 () : java.lang.Boolean {
      return contact typeis ABCompanyVendor
    }
    
    // 'visible' attribute on TypeKeyInput (id=Currency_Input) at ContactBasicsDV.ABCompany.pcf: line 127, column 67
    function visible_68 () : java.lang.Boolean {
      return gw.api.util.CurrencyUtil.isMultiCurrencyMode()
    }
    
    // 'visible' attribute on ABContactInput (id=PrimaryContact_Input) at ABContactWidget.xml: line 14, column 225
    function visible_76 () : java.lang.Boolean {
      return "ABContactSearchPopup.push(entity.ABPerson)" != "" && true
    }
    
    property get categoryScores () : ABContactCategoryScore[] {
      return getVariableValue("categoryScores", 0) as ABContactCategoryScore[]
    }
    
    property set categoryScores ($arg :  ABContactCategoryScore[]) {
      setVariableValue("categoryScores", 0, $arg)
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
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/contacts/basics/ContactBasicsDV.ABCompany.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends ContactBasicsDVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TypeKeyCell (id=Category_Cell) at ContactBasicsDV.ABCompany.pcf: line 96, column 53
    function valueRoot_44 () : java.lang.Object {
      return categoryScore
    }
    
    // 'value' attribute on TypeKeyCell (id=Category_Cell) at ContactBasicsDV.ABCompany.pcf: line 96, column 53
    function value_43 () : typekey.ReviewCategory {
      return categoryScore.ReviewCategory
    }
    
    // 'value' attribute on TextCell (id=Score_Cell) at ContactBasicsDV.ABCompany.pcf: line 102, column 48
    function value_46 () : java.lang.Integer {
      return categoryScore.Score
    }
    
    property get categoryScore () : entity.ABContactCategoryScore {
      return getIteratedValue(1) as entity.ABContactCategoryScore
    }
    
    
  }
  
  
}