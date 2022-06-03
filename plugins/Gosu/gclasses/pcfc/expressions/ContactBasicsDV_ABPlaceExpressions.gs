package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/contacts/basics/ContactBasicsDV.ABPlace.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ContactBasicsDV_ABPlaceExpressions {
  @javax.annotation.Generated("config/web/pcf/contacts/basics/ContactBasicsDV.ABPlace.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ContactBasicsDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'actionEnabled' attribute on ABContactInput (id=PrimaryContact_Input) at ABContactWidget.xml: line 11, column 172
    function actionEnabled_45 () : java.lang.Boolean {
      return contact.PrimaryContact != null
    }
    
    // 'action' attribute on ABContactInput (id=PrimaryContact_Input) at ABContactWidget.xml: line 14, column 225
    function action_38 () : void {
      ABContactSearchPopup.push(entity.ABPerson)
    }
    
    // 'action' attribute on ABContactInput (id=PrimaryContact_Input) at ABContactWidget.xml: line 11, column 172
    function action_40 () : void {
      ABContactDetailPopup.push(contact.PrimaryContact)
    }
    
    // 'action' attribute on ABContactInput (id=PrimaryContact_Input) at ABContactWidget.xml: line 14, column 225
    function action_dest_39 () : pcf.api.Destination {
      return pcf.ABContactSearchPopup.createDestination(entity.ABPerson)
    }
    
    // 'action' attribute on ABContactInput (id=PrimaryContact_Input) at ABContactWidget.xml: line 11, column 172
    function action_dest_41 () : pcf.api.Destination {
      return pcf.ABContactDetailPopup.createDestination(contact.PrimaryContact)
    }
    
    // 'def' attribute on InputSetRef at ContactBasicsDV.ABPlace.pcf: line 29, column 56
    function def_onEnter_10 (def :  pcf.GlobalContactNameInputSet_default) : void {
      def.onEnter(new gw.api.name.ContactNameOwner(new gw.api.name.ABContactNameDelegate(contact as ABPlace)))
    }
    
    // 'def' attribute on InputSetRef at ContactBasicsDV.ABPlace.pcf: line 49, column 48
    function def_onEnter_26 (def :  pcf.PrimaryAddressInputSet) : void {
      def.onEnter(contact)
    }
    
    // 'def' attribute on ABContactInput (id=PrimaryContact_Input) at ABContactWidget.xml: line 12, column 171
    function def_onEnter_35 (def :  pcf.NewPersonOnlyPickerMenuItemSet) : void {
      def.onEnter(entity.ABPerson, contact)
    }
    
    // 'def' attribute on InputSetRef (id=Work) at ContactBasicsDV.ABPlace.pcf: line 76, column 20
    function def_onEnter_49 (def :  pcf.GlobalPhoneInputSet) : void {
      def.onEnter(new gw.api.phone.StandardPhoneOwner(new gw.api.phone.ContactPhoneDelegate(contact,ABPlace#WorkPhone), DisplayKey.get("Web.ContactDetail.Phone.Phone"), false))
    }
    
    // 'def' attribute on InputSetRef (id=Fax) at ContactBasicsDV.ABPlace.pcf: line 80, column 19
    function def_onEnter_51 (def :  pcf.GlobalPhoneInputSet) : void {
      def.onEnter(new gw.api.phone.StandardPhoneOwner(new gw.api.phone.ContactPhoneDelegate(contact, ABPlace#FaxPhone), DisplayKey.get("Web.ContactDetail.Phone.Fax"), false))
    }
    
    // 'def' attribute on InputSetRef at ContactBasicsDV.ABPlace.pcf: line 29, column 56
    function def_onEnter_8 (def :  pcf.GlobalContactNameInputSet_Japan) : void {
      def.onEnter(new gw.api.name.ContactNameOwner(new gw.api.name.ABContactNameDelegate(contact as ABPlace)))
    }
    
    // 'def' attribute on InputSetRef at ContactBasicsDV.ABPlace.pcf: line 29, column 56
    function def_refreshVariables_11 (def :  pcf.GlobalContactNameInputSet_default) : void {
      def.refreshVariables(new gw.api.name.ContactNameOwner(new gw.api.name.ABContactNameDelegate(contact as ABPlace)))
    }
    
    // 'def' attribute on InputSetRef at ContactBasicsDV.ABPlace.pcf: line 49, column 48
    function def_refreshVariables_27 (def :  pcf.PrimaryAddressInputSet) : void {
      def.refreshVariables(contact)
    }
    
    // 'def' attribute on ABContactInput (id=PrimaryContact_Input) at ABContactWidget.xml: line 12, column 171
    function def_refreshVariables_36 (def :  pcf.NewPersonOnlyPickerMenuItemSet) : void {
      def.refreshVariables(entity.ABPerson, contact)
    }
    
    // 'def' attribute on InputSetRef (id=Work) at ContactBasicsDV.ABPlace.pcf: line 76, column 20
    function def_refreshVariables_50 (def :  pcf.GlobalPhoneInputSet) : void {
      def.refreshVariables(new gw.api.phone.StandardPhoneOwner(new gw.api.phone.ContactPhoneDelegate(contact,ABPlace#WorkPhone), DisplayKey.get("Web.ContactDetail.Phone.Phone"), false))
    }
    
    // 'def' attribute on InputSetRef (id=Fax) at ContactBasicsDV.ABPlace.pcf: line 80, column 19
    function def_refreshVariables_52 (def :  pcf.GlobalPhoneInputSet) : void {
      def.refreshVariables(new gw.api.phone.StandardPhoneOwner(new gw.api.phone.ContactPhoneDelegate(contact, ABPlace#FaxPhone), DisplayKey.get("Web.ContactDetail.Phone.Fax"), false))
    }
    
    // 'def' attribute on InputSetRef at ContactBasicsDV.ABPlace.pcf: line 29, column 56
    function def_refreshVariables_9 (def :  pcf.GlobalContactNameInputSet_Japan) : void {
      def.refreshVariables(new gw.api.name.ContactNameOwner(new gw.api.name.ABContactNameDelegate(contact as ABPlace)))
    }
    
    // 'value' attribute on TypeKeyInput (id=VendorAvailability_Input) at ContactBasicsDV.ABPlace.pcf: line 37, column 34
    function defaultSetter_16 (__VALUE_TO_SET :  java.lang.Object) : void {
      contact.VendorAvailability = (__VALUE_TO_SET as typekey.VendorAvailabilityType)
    }
    
    // 'value' attribute on TextInput (id=VendorUnavailableMessageInput_Input) at ContactBasicsDV.ABPlace.pcf: line 46, column 76
    function defaultSetter_22 (__VALUE_TO_SET :  java.lang.Object) : void {
      contact.VendorUnavailableMessage = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TypeKeyInput (id=Currency_Input) at ContactBasicsDV.ABPlace.pcf: line 61, column 67
    function defaultSetter_31 (__VALUE_TO_SET :  java.lang.Object) : void {
      contact.PreferredCurrency = (__VALUE_TO_SET as typekey.Currency)
    }
    
    // 'value' attribute on ABContactInput (id=PrimaryContact_Input) at ABContactWidget.xml: line 11, column 172
    function defaultSetter_43 (__VALUE_TO_SET :  java.lang.Object) : void {
      contact.PrimaryContact = (__VALUE_TO_SET as entity.ABContact)
    }
    
    // 'value' attribute on TextInput (id=Email1_Input) at ContactBasicsDV.ABPlace.pcf: line 86, column 40
    function defaultSetter_54 (__VALUE_TO_SET :  java.lang.Object) : void {
      contact.EmailAddress1 = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=Email2_Input) at ContactBasicsDV.ABPlace.pcf: line 92, column 40
    function defaultSetter_58 (__VALUE_TO_SET :  java.lang.Object) : void {
      contact.EmailAddress2 = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextAreaInput (id=Notes_Input) at ContactBasicsDV.ABPlace.pcf: line 100, column 32
    function defaultSetter_62 (__VALUE_TO_SET :  java.lang.Object) : void {
      contact.Notes = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'initialValue' attribute on Variable at ContactBasicsDV.ABPlace.pcf: line 14, column 49
    function initialValue_0 () : gw.web.ContactDetailsVendorHelper {
      return new gw.web.ContactDetailsVendorHelper(contact)
    }
    
    // 'label' attribute on Label at ContactBasicsDV.ABPlace.pcf: line 26, column 51
    function label_7 () : java.lang.String {
      return contact.getSubtype().DisplayName
    }
    
    // 'mode' attribute on InputSetRef at ContactBasicsDV.ABPlace.pcf: line 29, column 56
    function mode_12 () : java.lang.Object {
      return gw.api.name.NameLocaleSettings.PCFMode
    }
    
    // 'value' attribute on TypeKeyInput (id=VendorAvailability_Input) at ContactBasicsDV.ABPlace.pcf: line 37, column 34
    function valueRoot_17 () : java.lang.Object {
      return contact
    }
    
    // 'value' attribute on TextInput (id=CreateStatus_Input) at ContactBasicsDV.ABPlace.pcf: line 22, column 86
    function valueRoot_3 () : java.lang.Object {
      return contact.CreateStatus
    }
    
    // 'value' attribute on TypeKeyInput (id=VendorAvailability_Input) at ContactBasicsDV.ABPlace.pcf: line 37, column 34
    function value_15 () : typekey.VendorAvailabilityType {
      return contact.VendorAvailability
    }
    
    // 'value' attribute on TextInput (id=CreateStatus_Input) at ContactBasicsDV.ABPlace.pcf: line 22, column 86
    function value_2 () : java.lang.String {
      return contact.CreateStatus.DisplayName
    }
    
    // 'value' attribute on TextInput (id=VendorUnavailableMessageInput_Input) at ContactBasicsDV.ABPlace.pcf: line 46, column 76
    function value_21 () : java.lang.String {
      return contact.VendorUnavailableMessage
    }
    
    // 'value' attribute on TypeKeyInput (id=Currency_Input) at ContactBasicsDV.ABPlace.pcf: line 61, column 67
    function value_30 () : typekey.Currency {
      return contact.PreferredCurrency
    }
    
    // 'value' attribute on ABContactInput (id=PrimaryContact_Input) at ABContactWidget.xml: line 11, column 172
    function value_42 () : entity.ABContact {
      return contact.PrimaryContact
    }
    
    // 'value' attribute on TextInput (id=Email1_Input) at ContactBasicsDV.ABPlace.pcf: line 86, column 40
    function value_53 () : java.lang.String {
      return contact.EmailAddress1
    }
    
    // 'value' attribute on TextInput (id=Email2_Input) at ContactBasicsDV.ABPlace.pcf: line 92, column 40
    function value_57 () : java.lang.String {
      return contact.EmailAddress2
    }
    
    // 'value' attribute on TextAreaInput (id=Notes_Input) at ContactBasicsDV.ABPlace.pcf: line 100, column 32
    function value_61 () : java.lang.String {
      return contact.Notes
    }
    
    // 'visible' attribute on TextInput (id=CreateStatus_Input) at ContactBasicsDV.ABPlace.pcf: line 22, column 86
    function visible_1 () : java.lang.Boolean {
      return contact.CreateStatus != ContactCreationApprovalStatus.TC_APPROVED
    }
    
    // 'visible' attribute on TypeKeyInput (id=VendorAvailability_Input) at ContactBasicsDV.ABPlace.pcf: line 37, column 34
    function visible_13 () : java.lang.Boolean {
      return contact.Vendor
    }
    
    // 'visible' attribute on TextInput (id=VendorUnavailableMessageInput_Input) at ContactBasicsDV.ABPlace.pcf: line 46, column 76
    function visible_20 () : java.lang.Boolean {
      return contactDetailsVendorHelper.ShowVendorUnavailableMessage
    }
    
    // 'visible' attribute on Label at ContactBasicsDV.ABPlace.pcf: line 54, column 67
    function visible_28 () : java.lang.Boolean {
      return gw.api.util.CurrencyUtil.isMultiCurrencyMode()
    }
    
    // 'visible' attribute on ABContactInput (id=PrimaryContact_Input) at ABContactWidget.xml: line 14, column 225
    function visible_37 () : java.lang.Boolean {
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
    
    
  }
  
  
}