package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/training/ABContact/Details/PhoneAndAddressesDV.ABCompany.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class PhoneAndAddressesDV_ABCompanyExpressions {
  @javax.annotation.Generated("config/web/pcf/training/ABContact/Details/PhoneAndAddressesDV.ABCompany.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PhoneAndAddressesDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on InputSetRef (id=WorkPhone) at PhoneAndAddressesDV.ABCompany.pcf: line 17, column 25
    function def_onEnter_0 (def :  pcf.GlobalPhoneInputSet) : void {
      def.onEnter(new gw.api.phone.StandardPhoneOwner(new gw.api.phone.ContactPhoneDelegate(anABContact, ABContact#WorkPhone), DisplayKey.get("Web.ContactDetail.Phone.Work"), false))
    }
    
    // 'def' attribute on InputSetRef (id=FaxPhone) at PhoneAndAddressesDV.ABCompany.pcf: line 20, column 24
    function def_onEnter_2 (def :  pcf.GlobalPhoneInputSet) : void {
      def.onEnter(new gw.api.phone.StandardPhoneOwner(new gw.api.phone.ContactPhoneDelegate(anABContact, ABContact#FaxPhone), DisplayKey.get("Web.ContactDetail.Phone.Fax"), false))
    }
    
    // 'def' attribute on InputSetRef (id=BasicAddressInputSet) at PhoneAndAddressesDV.ABCompany.pcf: line 26, column 36
    function def_onEnter_4 (def :  pcf.AddressOwnerInputSet) : void {
      def.onEnter(anABContact.AddressOwner, true)
    }
    
    // 'def' attribute on InputSetRef (id=WorkPhone) at PhoneAndAddressesDV.ABCompany.pcf: line 17, column 25
    function def_refreshVariables_1 (def :  pcf.GlobalPhoneInputSet) : void {
      def.refreshVariables(new gw.api.phone.StandardPhoneOwner(new gw.api.phone.ContactPhoneDelegate(anABContact, ABContact#WorkPhone), DisplayKey.get("Web.ContactDetail.Phone.Work"), false))
    }
    
    // 'def' attribute on InputSetRef (id=FaxPhone) at PhoneAndAddressesDV.ABCompany.pcf: line 20, column 24
    function def_refreshVariables_3 (def :  pcf.GlobalPhoneInputSet) : void {
      def.refreshVariables(new gw.api.phone.StandardPhoneOwner(new gw.api.phone.ContactPhoneDelegate(anABContact, ABContact#FaxPhone), DisplayKey.get("Web.ContactDetail.Phone.Fax"), false))
    }
    
    // 'def' attribute on InputSetRef (id=BasicAddressInputSet) at PhoneAndAddressesDV.ABCompany.pcf: line 26, column 36
    function def_refreshVariables_5 (def :  pcf.AddressOwnerInputSet) : void {
      def.refreshVariables(anABContact.AddressOwner, true)
    }
    
    property get anABContact () : ABContact {
      return getRequireValue("anABContact", 0) as ABContact
    }
    
    property set anABContact ($arg :  ABContact) {
      setRequireValue("anABContact", 0, $arg)
    }
    
    
  }
  
  
}